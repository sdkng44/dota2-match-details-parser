# Dota 2 Match Details Parser
`dota2-match-details-parser` es una herramienta que te permite descargar detalles de partidas de Dota 2 en formatos CSV y JSON. Utiliza la API de OpenDota para obtener información detallada sobre las partidas y proporciona soporte multilingüe para varios idiomas.

## Requisitos Previos
Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

## Aviso Importante
Para usar esta herramienta, tu perfil de Steam ID debe estar configurado como público. De lo contrario, no se podrá recuperar la información.

## Instalación
Puedes instalar el proyecto clonando el repositorio desde GitHub o usando npm.

### Desde GitHub
Sigue estos pasos para instalar y configurar el proyecto:

1. Clona el repositorio o descárgalo desde la web de GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura tu archivo `config.json` con tu `STEAM_ID`:
    ```json
    {
      "steamId": "tu_steam_id_aquí"
    }
    ```

### Desde npm
También puedes instalar el paquete usando npm:

#### Para sistemas Windows

1. Crea un directorio inicial y navega hacia él:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Instala el paquete:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Crea un nuevo directorio raíz y mueve el contenido del paquete fuera del directorio raíz actual, luego ubícate en el nuevo directorio raíz:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Elimina el directorio de instalación raíz anterior:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Instala las dependencias en el nuevo directorio:
    ```powershell
    npm install
    ```

6. Configura tu archivo `config.json` con tu `STEAM_ID`:
    ```json
    {
      "steamId": "tu_steam_id_aquí"
    }
    ```

#### Para sistemas basados en Unix (Linux/macOS)

1. Crea un directorio inicial y navega hacia él:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Instala el paquete:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Crea un nuevo directorio raíz y mueve el contenido del paquete fuera del directorio raíz actual, luego ubícate en el nuevo directorio raíz:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Elimina el directorio de instalación raíz anterior:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Instala las dependencias en el nuevo directorio:
    ```bash
    npm install
    ```

6. Configura tu archivo `config.json` con tu `STEAM_ID`:
    ```json
    {
      "steamId": "tu_steam_id_aquí"
    }
    ```

	
## Uso
Para ejecutar el proyecto, simplemente navega hasta el directorio de instalación y usa el siguiente comando:
```bash
npm start
```
Esto iniciará la aplicación y te pedirá que selecciones tu idioma preferido. Luego, descargará los detalles de las partidas de Dota 2 asociadas con el STEAM_ID proporcionado.

## Solución de Problemas con la Visualización de Caracteres
Si ejecutas el script y descargas una cierta cantidad de partidas, luego detienes el script y lo reinicias, la herramienta buscará los archivos previamente creados con las partidas descargadas. Leerá las partidas ya descargadas y continuará desde donde se quedó.

## Troubleshooting Language Display Issues
Si encuentras problemas para visualizar caracteres en tu idioma, es posible que debas configurar CMD o PowerShell para usar una fuente que soporte estos caracteres.
1. Haz clic derecho en la barra de título de CMD o PowerShell.
2. Selecciona "Propiedades".
3. Ve a la pestaña "Fuente".
4. Elige "SimSun Ext-B" como la fuente. Esta fuente soporta una amplia gama de caracteres y está instalada de forma predeterminada.

Nota: "SimSun Ext-B" es solo un ejemplo que ha sido probado para funcionar con todos los caracteres. También puedes instalar otras fuentes que soporten los caracteres de tu idioma si es necesario.

## Repositorio y Paquete
Este proyecto está disponible tanto en GitHub como en npm:

1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Límites de la API
Este proyecto utiliza la API de OpenDota, la cual tiene limitaciones en la cantidad de solicitudes que puedes hacer. Ten en cuenta estos límites para evitar problemas con la recuperación de datos.


## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


## Registro de Cambios
Para obtener información detallada sobre las actualizaciones, consulta el [CHANGELOG](CHANGELOG.md).
