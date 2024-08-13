# Dota 2 Match Details Parser
`dota2-match-details-parser` ist ein Tool, das es Ihnen ermöglicht, Dota 2 Match-Details im CSV- und JSON-Format herunterzuladen. Es verwendet die OpenDota API, um detaillierte Informationen zu Matches abzurufen und bietet mehrsprachige Unterstützung für verschiedene Sprachen.

## Voraussetzungen
Stellen Sie sicher, dass [Node.js](https://nodejs.org/) auf Ihrem Computer installiert ist.

## Wichtiger Hinweis
Um dieses Tool zu verwenden, muss Ihr Steam ID-Profil auf öffentlich eingestellt sein. Andernfalls können die Daten nicht abgerufen werden.

## Installation
Sie können das Projekt entweder durch Klonen des Repositories von GitHub oder durch Verwendung von npm installieren.

### Von GitHub
Befolgen Sie diese Schritte, um das Projekt zu installieren und einzurichten:

1. Klonen Sie das Repository oder laden Sie es von der GitHub-Webseite herunter:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Installieren Sie die Abhängigkeiten:
    ```bash
    npm install
    ```

3. Konfigurieren Sie Ihre `config.json`-Datei mit Ihrer `STEAM_ID`:
    ```json
    {
      "steamId": "ihre_steam_id_hier"
    }
    ```

### Mit npm
Sie können das Paket auch mit npm installieren:

#### Für Windows-Systeme

1. Erstellen Sie ein Anfangsverzeichnis und navigieren Sie zu diesem:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Installieren Sie das Paket:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Erstellen Sie ein neues Stammverzeichnis und verschieben Sie den Paketinhalt aus dem aktuellen Stammverzeichnis dorthin. Wechseln Sie dann in das neue Stammverzeichnis:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Entfernen Sie das vorherige Stamminstallationsverzeichnis:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Installieren Sie die Abhängigkeiten im neuen Verzeichnis:
    ```powershell
    npm install
    ```

6. Konfigurieren Sie Ihre `config.json`-Datei mit Ihrer `STEAM_ID`:
    ```json
    {
      "steamId": "ihre_steam_id_hier"
    }
    ```

#### Für Unix-basierte Systeme (Linux/macOS)

1. Erstellen Sie ein Anfangsverzeichnis und navigieren Sie zu diesem:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Installieren Sie das Paket:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Erstellen Sie ein neues Stammverzeichnis und verschieben Sie den Paketinhalt aus dem aktuellen Stammverzeichnis dorthin. Wechseln Sie dann in das neue Stammverzeichnis:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Entfernen Sie das vorherige Stamminstallationsverzeichnis:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Installieren Sie die Abhängigkeiten im neuen Verzeichnis:
    ```bash
    npm install
    ```

6. Konfigurieren Sie Ihre `config.json`-Datei mit Ihrer `STEAM_ID`:
    ```json
    {
      "steamId": "ihre_steam_id_hier"
    }
    ```

## Verwendung
Um das Projekt auszuführen, navigieren Sie einfach zum Installationsverzeichnis und verwenden Sie den folgenden Befehl:
```bash
npm start
```
Dadurch wird die Anwendung gestartet und Sie werden aufgefordert, Ihre bevorzugte Sprache auszuwählen. Anschließend werden die Dota 2 Match-Details heruntergeladen, die mit der angegebenen STEAM_ID verbunden sind.


## Kontinuität der Downloads
Wenn Sie das Skript ausführen und eine bestimmte Anzahl von Matches herunterladen, dann das Skript stoppen und neu starten, sucht das Tool nach zuvor erstellten Dateien mit heruntergeladenen Matches. Es liest die bereits heruntergeladenen Matches und setzt dort fort, wo es aufgehört hat.


## Fehlerbehebung bei der Sprachdarstellung
Wenn bei der Darstellung von Zeichen in Ihrer Sprache Probleme auftreten, müssen Sie möglicherweise CMD oder PowerShell so konfigurieren, dass eine Schriftart verwendet wird, die diese Zeichen unterstützt.
1. Klicken Sie mit der rechten Maustaste auf die Titelleiste von CMD oder PowerShell.
2. Wählen Sie "Eigenschaften".
3. Gehen Sie zum Tab "Schriftart".
4. Wählen Sie "SimSun Ext-B" als Schriftart. Diese Schriftart unterstützt eine breite Palette von Zeichen und ist standardmäßig installiert.
Hinweis: "SimSun Ext-B" ist nur ein Beispiel, das getestet wurde und mit allen Zeichen funktioniert. Sie können auch andere Schriftarten installieren, die die Zeichen Ihrer Sprache unterstützen, falls erforderlich.


## Repository und Paket
Dieses Projekt ist sowohl auf GitHub als auch auf npm verfügbar:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## API-Beschränkungen
Dieses Projekt verwendet die OpenDota API, die Beschränkungen hinsichtlich der Anzahl der Anfragen hat, die Sie stellen können. Bitte beachten Sie diese Beschränkungen, um Probleme beim Abrufen von Daten zu vermeiden.


## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Details finden Sie in der LICENSE-Datei.


## Änderungsprotokoll
Für detaillierte Informationen zu Updates siehe [CHANGELOG](CHANGELOG.md).


