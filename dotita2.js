const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');
const i18next = require('i18next');
const Backend = require('i18next-node-fs-backend');
const { select } = require('@inquirer/prompts');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const steamApiKey = config.steamApiKey;
const steamId = config.steamId;
if (steamApiKey === 'your_steam_api_key_here' || steamId === 'your_steam_id_here') {
  console.error('Please provide your STEAM_API_KEY and STEAM_ID in the config.json file');
  process.exit(1);
}

// SET LANGUAGE
async function askForLanguage() {
  const answers = await select({
    message: 'Select your language:',
    choices: [
      {
        name: 'English',
        value: 'en',
      },
      {
        name: 'Español',
        value: 'es',
      },
      {
        name: '中文',
        value: 'zh',
      },
      {
        name: 'Русский',
        value: 'ru',
      },
      {
        name: 'Português',
        value: 'pt',
      },
      {
        name: 'Français',
        value: 'fr',
      },
      {
        name: 'Deutsch',
        value: 'de',
      },
      {
        name: '한국어',
        value: 'ko',
      },
      {
        name: '日本語',
        value: 'ja',
      },
      {
        name: 'Türkçe',
        value: 'tr',
      },
      {
        name: 'Italiano',
        value: 'it',
      },
      {
        name: 'Polski',
        value: 'pl',
      },
      {
        name: 'Tiếng Việt',
        value: 'vi',
      },
      {
        name: 'ไทย',
        value: 'th',
      },
      {
        name: 'Bahasa Indonesia',
        value: 'id',
      },
      {
        name: 'العربية',
        value: 'ar',
      },
    ],
  });
  return answers;
}

askForLanguage().then(selectedLanguage => {
  i18next.use(Backend).init(
    {
      lng: selectedLanguage,
      fallbackLng: 'en',
      backend: {
        loadPath: './locales/{{lng}}/translation.json',
      },
    },
    (err, t) => {
      if (err) return console.error(err);

      // FUNCTION CONVERT STEAM ID TO DOTA 2
      function convertToDotaId(steamId) {
        const steamIdInt = BigInt(steamId);
        const base = BigInt('76561197960265728');
        return steamIdInt - base;
      }

      // CONVERT steamId TO DOTA 2 ACCOUNT
      const dotaId = convertToDotaId(steamId);
      console.log(`${t('steamId')}: ${steamId}, ${t('dotaAccountId')}: ${dotaId.toString()}`);

      // FUNCTION TO DOWNLOAD THE DETAILS OF EACH MATCH
      async function downloadMatchDetails(matchId) {
        const url = `https://api.opendota.com/api/matches/${matchId}`;
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.error(`${t('matchDetails404')} ${matchId}`);
          } else {
            console.error(`${t('matchDetailsError')}: ${error.message}`);
          }
          return null;
        }
      }

      // FUNCTION TO LOAD PREVIOUS GAMES
      function loadPreviousMatches() {
        const previousMatches = new Set();

        const jsonExists = fs.existsSync('partidas.json');
        const csvExists = fs.existsSync('partidas.csv');

        if (jsonExists) {
          const partidasJSON = JSON.parse(fs.readFileSync('partidas.json', 'utf8'));
          partidasJSON.forEach(partida => previousMatches.add(partida.match_id));
        }

        if (!jsonExists && csvExists) {
          fs.createReadStream('partidas.csv')
            .pipe(csv())
            .on('data', row => {
              previousMatches.add(row.match_id);
            });
        }

        return previousMatches;
      }

      function awaiting(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      //FULL MATCH HISTORY DOWNLOAD FUNCTION
      async function downloadAllMatches(dotaId) {
        let previousMatches = loadPreviousMatches();
        let matchCounter = 0;
        let callsPerMinute = 0;
        let contadorLlamadas = 0;
        let csvWriter;
        let encabezados = [];
        let inicializadoCSV = false;

        setInterval(() => {
          callsPerMinute = 0;
        }, 65000);

        initializeJson();

        try {
          while (true) {
            let url = `https://api.opendota.com/api/players/${dotaId}/matches`;

            console.log(`${t('urlConstructed')}: ${url}`);
            const response = await axios.get(url);
            let partidas = response.data;
            console.log(`${t('matchesObtained')}: ${JSON.stringify(partidas.map(p => p.match_id))}`);

            partidas = partidas.filter(p => !previousMatches.has(p.match_id));

            console.log(`${t('matchesFiltered')}: ${JSON.stringify(partidas.map(p => p.match_id))}`);

            if (!partidas || partidas.length === 0) {
              console.log(t('noMoreMatches'));
              break;
            }

            for (const partida of partidas) {
              if (contadorLlamadas >= 1975) {
                console.log(t('apiLimitReached'));
                return;
              }

              await awaiting(2000);

              const matchDetails = await downloadMatchDetails(partida.match_id);
              if (matchDetails) {
                if (callsPerMinute >= 40) {
                  console.log(t('waitingForRateLimit'));
                  await awaiting(60000);
                  callsPerMinute = 0;
                }

                await awaiting(2000);
                const matchWithDetails = {
                  ...partida,
                  ...matchDetails,
                };
                matchCounter++;
                console.log(`${t('matchesDownloaded')} ${matchCounter} - ID: ${partida.match_id}`);

                if (!inicializadoCSV) {
                  let dissagregateMatch = dissagregateObject(matchWithDetails);
                  encabezados = Array.from(new Set(Object.keys(dissagregateMatch)));
                  csvWriter = initializeCsvWriter(encabezados);
                  inicializadoCSV = true;
                }

                await saveMatchInJSON(matchWithDetails);
                await saveMatchInCSV(matchWithDetails, csvWriter);

                callsPerMinute++;
                contadorLlamadas++;
              } else {
                console.log(t('detailsNotObtained'));
              }
            }
          }
          console.log(`${t('totalMatchesDownloaded')}: ${matchCounter}`);
        } catch (error) {
          console.error(`${t('matchDetailsError')}: ${error.message}`);
          return console.log(`${t('apiLimitReached')}`);
        }
      }

      //FUNCTION TO HANDLE NESTED ARRAYS
      function dissagregateObject(objeto, prefijo = '') {
        let output = {};

        for (let [clave, valor] of Object.entries(objeto)) {
          if (typeof valor === 'object' && valor != null) {
            output = {
              ...output,
              ...dissagregateObject(valor, `${prefijo}${clave}.`),
            };
          } else {
            output[`${prefijo}${clave}`] = valor;
          }
        }
        return output;
      }

      // FUNCTION TO INITIALIZE JSON
      function initializeJson() {
        if (!fs.existsSync('partidas.json')) {
          fs.writeFileSync('partidas.json', '[]', 'utf8');
          console.log(t('jsonCreated'));
        }
      }

      // FUNCTION TO SAVE MATCH IN JSON
      async function saveMatchInJSON(partida) {
        let partidas = [];
        const data = fs.readFileSync('partidas.json', 'utf8');
        partidas = JSON.parse(data);

        partidas.push(partida);
        fs.writeFileSync('partidas.json', JSON.stringify(partidas, null, 2), 'utf8');
        console.log(t('matchSavedToJSON'));
      }

      // FUNCTION TO INITIALIZE CSV WRITER
      function initializeCsvWriter(encabezados) {
        return createCsvWriter({
          path: 'partidas.csv',
          header: encabezados.map(campo => ({
            id: campo,
            title: campo,
          })),
          append: fs.existsSync('partidas.csv'),
        });
      }

      // FUNCTION TO SAVE GAME IN CSV
      async function saveMatchInCSV(partida, csvWriter) {
        let dissagregateMatch = dissagregateObject(partida);
        await csvWriter.writeRecords([dissagregateMatch]);
        console.log(t('matchSavedToCSV'));
      }

      downloadAllMatches(dotaId.toString());
    }
  );
});
