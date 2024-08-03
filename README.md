# Dota 2 Match Details Parser

## Description
`dota2-match-details-parser` is a tool that allows you to download Dota 2 match details in CSV and JSON formats. It uses the OpenDota API to fetch detailed information about matches and provides multilingual support for various languages.


## Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.


## Important Notice
To use this tool, your Steam ID profile must be set to public. Otherwise, the data cannot be retrieved.


## Installation
You can install the project either by cloning the repository from GitHub or by using npm.

### From GitHub
Follow these steps to install and set up the project:

1. Clone the repository or download from GitHub web:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure your `config.json` file with your `STEAM_ID`:
    ```json
    {
      "steamId": "your_steam_id_here"
    }
    ```

### From npm
You can also install the package using npm:

#### For Unix-based systems (Linux/macOS)

1. Create an initial directory and navigate to it:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Install the package:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Create a new root directory and move the package contents outside the current root directory:
    ```bash
    mkdir ../dota2-match-details
    cp -r node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Remove the previous root installation directory:
    ```bash
    cd ..
    rm -rf dota2-parser-installation
    ```

5. Install dependencies in the new directory:
    ```bash
    npm install
    ```

6. Configure your `config.json` file with your `STEAM_ID`:
    ```json
    {
      "steamId": "your_steam_id_here"
    }
    ```

#### For Windows systems

1. Create an initial directory and navigate to it:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Install the package:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Create a new root directory and move the package contents outside the current root directory:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules\dota2-match-details-parser\* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Remove the previous root installation directory:
    ```powershell
    cd ..
    Remove-Item -Recurse -Force dota2-parser-installation
    ```

5. Install dependencies in the new directory:
    ```powershell
    npm install
    ```

6. Configure your `config.json` file with your `STEAM_ID`:
    ```json
    {
      "steamId": "your_steam_id_here"
    }
    ```


	
## Usage
To run the project, simply use the following command:
```bash
npm start
```
This will start the application and prompt you to select your preferred language. It will then download the Dota 2 match details associated with the provided STEAM_ID.


## Continuity of Downloads
If you run the script and download a certain number of matches, then stop the script and restart it, the tool will look for the previously created files with downloaded matches. It will read the already downloaded matches and continue from where it left off.


## Troubleshooting Language Display Issues
If you encounter issues with displaying characters in your respective language, you may need to configure CMD or PowerShell to use a font that supports these characters.

1. Right-click on the title bar of CMD or PowerShell.
2. Select "Properties".
3. Go to the "Font" tab.
4. Choose "SimSun Ext-B" as the font. This font supports a wide range of characters and is installed by default.

Note: "SimSun Ext-B" is just one example that has been tested to work with all characters. You can also install other fonts that support your language characters if needed.


## Repository and Package
This project is available on both GitHub and npm:

1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## API Rate Limits
This project uses the OpenDota API, which has limitations on the number of requests you can make. Please be aware of these limits to avoid issues with data retrieval.


## License
This project is licensed under the MIT License. See the LICENSE file for more details.

