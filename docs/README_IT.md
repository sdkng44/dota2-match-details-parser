# Dota 2 Match Details Parser
`dota2-match-details-parser` è uno strumento che consente di scaricare i dettagli delle partite di Dota 2 nei formati CSV e JSON. Utilizza l'API di OpenDota per ottenere informazioni dettagliate sulle partite e offre supporto multilingue per varie lingue.

## Prerequisiti
Assicurati di avere [Node.js](https://nodejs.org/) installato sul tuo computer.

## Avviso Importante
Per utilizzare questo strumento, il profilo del tuo Steam ID deve essere impostato su pubblico. In caso contrario, i dati non possono essere recuperati.

## Installazione
È possibile installare il progetto clonando il repository da GitHub o utilizzando npm.

### Da GitHub
Segui questi passaggi per installare e configurare il progetto:

1. Clona il repository o scaricalo dal sito web di GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Installa le dipendenze:
    ```bash
    npm install
    ```

3. Configura il file `config.json` con il tuo `STEAM_ID`:
    ```json
    {
      "steamId": "inserisci_steam_id_qui"
    }
    ```

### Da npm
Puoi anche installare il pacchetto utilizzando npm:

#### Per sistemi Windows

1. Crea una directory iniziale e naviga in essa:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Installa il pacchetto:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Crea una nuova directory principale e sposta il contenuto del pacchetto fuori dalla directory principale corrente, quindi posizionati nella nuova directory principale:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Rimuovi la precedente directory di installazione principale:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Installa le dipendenze nella nuova directory:
    ```powershell
    npm install
    ```

6. Configura il file `config.json` con il tuo `STEAM_ID`:
    ```json
    {
      "steamId": "inserisci_steam_id_qui"
    }
    ```

#### Per sistemi basati su Unix (Linux/macOS)

1. Crea una directory iniziale e naviga in essa:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Installa il pacchetto:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Crea una nuova directory principale e sposta il contenuto del pacchetto fuori dalla directory principale corrente, quindi posizionati nella nuova directory principale:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Rimuovi la precedente directory di installazione principale:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Installa le dipendenze nella nuova directory:
    ```bash
    npm install
    ```

6. Configura il file `config.json` con il tuo `STEAM_ID`:
    ```json
    {
      "steamId": "inserisci_steam_id_qui"
    }
    ```

## Utilizzo
Per eseguire il progetto, naviga semplicemente nella directory di installazione e utilizza il seguente comando:
```bash
npm start
```
Questo avvierà l'applicazione e ti chiederà di selezionare la lingua preferita. Successivamente, scaricherà i dettagli delle partite di Dota 2 associati allo STEAM_ID fornito.


## Continuità dei Download
Se esegui lo script e scarichi un certo numero di partite, poi interrompi lo script e lo riavvii, lo strumento cercherà i file precedentemente creati con le partite scaricate. Leggerà le partite già scaricate e continuerà da dove aveva interrotto.


## Risoluzione dei Problemi di Visualizzazione della Lingua
Se riscontri problemi nella visualizzazione dei caratteri nella tua lingua, potrebbe essere necessario configurare CMD o PowerShell per utilizzare un carattere che supporti tali caratteri.
1. Fai clic con il pulsante destro del mouse sulla barra del titolo di CMD o PowerShell.
2. Seleziona "Proprietà".
3. Vai alla scheda "Carattere".
4. Scegli "SimSun Ext-B" come carattere. Questo carattere supporta un'ampia gamma di caratteri ed è installato di default.
Nota: "SimSun Ext-B" è solo un esempio che è stato testato e funziona con tutti i caratteri. Puoi anche installare altri caratteri che supportano i caratteri della tua lingua, se necessario.


## Repository e Pacchetto
Questo progetto è disponibile su GitHub e npm:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Limiti dell'API
Questo progetto utilizza l'API di OpenDota, che ha limitazioni sul numero di richieste che puoi effettuare. Tieni presente questi limiti per evitare problemi con il recupero dei dati.


## Licenza
Questo progetto è concesso in licenza sotto la Licenza MIT. Vedi il file LICENSE per ulteriori dettagli.


## Registro delle Modifiche
Per informazioni dettagliate sugli aggiornamenti, fare riferimento al [CHANGELOG](CHANGELOG.md).






