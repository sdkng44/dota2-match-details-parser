# Dota 2 Match Details Parser
`dota2-match-details-parser` é uma ferramenta que permite baixar os detalhes das partidas de Dota 2 nos formatos CSV e JSON. Ele usa a API OpenDota para obter informações detalhadas sobre as partidas e oferece suporte multilíngue para vários idiomas.

## Pré-requisitos
Certifique-se de que você tem o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Aviso Importante
Para usar esta ferramenta, o perfil do seu Steam ID deve estar configurado como público. Caso contrário, os dados não poderão ser recuperados.

## Instalação
Você pode instalar o projeto clonando o repositório do GitHub ou usando o npm.

### Do GitHub
Siga estas etapas para instalar e configurar o projeto:

1. Clone o repositório ou faça o download do GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure seu arquivo `config.json` com seu `STEAM_ID`:
    ```json
    {
      "steamId": "seu_steam_id_aqui"
    }
    ```

### Do npm
Você também pode instalar o pacote usando npm:

#### Para sistemas Windows

1. Crie um diretório inicial e navegue até ele:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Instale o pacote:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Crie um novo diretório raiz e mova o conteúdo do pacote para fora do diretório raiz atual, depois localize-se no novo diretório raiz:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules\dota2-match-details-parser\* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Remova o diretório de instalação raiz anterior:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Instale as dependências no novo diretório:
    ```powershell
    npm install
    ```

6. Configure seu arquivo `config.json` com seu `STEAM_ID`:
    ```json
    {
      "steamId": "seu_steam_id_aqui"
    }
    ```

#### Para sistemas baseados em Unix (Linux/macOS)

1. Crie um diretório inicial e navegue até ele:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Instale o pacote:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Crie um novo diretório raiz e mova o conteúdo do pacote para fora do diretório raiz atual, depois localize-se no novo diretório raiz:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Remova o diretório de instalação raiz anterior:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Instale as dependências no novo diretório:
    ```bash
    npm install
    ```

6. Configure seu arquivo `config.json` com seu `STEAM_ID`:
    ```json
    {
      "steamId": "seu_steam_id_aqui"
    }
    ```

## Uso
Para executar o projeto, simplesmente navegue até o diretório de instalação e use o seguinte comando:
```bash
npm start
```
Isso iniciará o aplicativo e solicitará que você selecione seu idioma preferido. Em seguida, ele baixará os detalhes das partidas de Dota 2 associadas ao STEAM_ID fornecido.

## Continuidade dos Downloads
Se você executar o script e baixar um certo número de partidas, depois parar o script e reiniciá-lo, a ferramenta procurará os arquivos previamente criados com as partidas baixadas. Ela lerá as partidas já baixadas e continuará de onde parou.

## Solução de Problemas de Exibição de Idiomas
Se você encontrar problemas na exibição de caracteres no seu idioma, talvez precise configurar o CMD ou PowerShell para usar uma fonte que suporte esses caracteres.
1. Clique com o botão direito na barra de título do CMD ou PowerShell.
2. Selecione "Propriedades".
3. Vá para a guia "Fonte".
4. Escolha "SimSun Ext-B" como a fonte. Esta fonte suporta uma ampla gama de caracteres e vem instalada por padrão.

Nota: "SimSun Ext-B" é apenas um exemplo que foi testado para funcionar com todos os caracteres. Você também pode instalar outras fontes que suportem os caracteres do seu idioma, se necessário.

## Repositório e Pacote
Este projeto está disponível tanto no GitHub quanto no npm:

1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Límites da API
Este projeto usa a API do OpenDota, que tem limitações na quantidade de solicitações que você pode fazer. Esteja ciente desses limites para evitar problemas na recuperação de dados.


## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.


## Registro de Alterações
Para obter informações detalhadas sobre as atualizações, consulte o [CHANGELOG](CHANGELOG.md).
