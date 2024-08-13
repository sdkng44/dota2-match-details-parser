# Dota 2 Match Details Parser
`dota2-match-details-parser` to narzędzie, które umożliwia pobieranie szczegółów meczy Dota 2 w formatach CSV i JSON. Wykorzystuje OpenDota API do uzyskiwania szczegółowych informacji o meczach i oferuje wsparcie wielojęzyczne dla różnych języków.

## Wymagania wstępne
Upewnij się, że na Twoim komputerze zainstalowany jest [Node.js](https://nodejs.org/).

## Ważna uwaga
Aby korzystać z tego narzędzia, Twój profil Steam ID musi być ustawiony jako publiczny. W przeciwnym razie dane nie mogą zostać pobrane.

## Instalacja
Możesz zainstalować projekt, klonując repozytorium z GitHub lub używając npm.

### Z GitHub
Postępuj zgodnie z poniższymi krokami, aby zainstalować i skonfigurować projekt:

1. Sklonuj repozytorium lub pobierz je ze strony GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Zainstaluj zależności:
    ```bash
    npm install
    ```

3. Skonfiguruj plik `config.json` za pomocą swojego `STEAM_ID`:
    ```json
    {
      "steamId": "wprowadź_swoje_steam_id_tutaj"
    }
    ```

### Z npm
Możesz również zainstalować pakiet za pomocą npm:

#### Dla systemów Windows

1. Utwórz katalog początkowy i przejdź do niego:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Zainstaluj pakiet:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Utwórz nowy katalog główny i przenieś zawartość pakietu poza bieżący katalog główny, a następnie przejdź do nowego katalogu głównego:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Usuń poprzedni katalog instalacyjny:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Zainstaluj zależności w nowym katalogu:
    ```powershell
    npm install
    ```

6. Skonfiguruj plik `config.json` za pomocą swojego `STEAM_ID`:
    ```json
    {
      "steamId": "wprowadź_swoje_steam_id_tutaj"
    }
    ```

#### Dla systemów opartych na Unix (Linux/macOS)

1. Utwórz katalog początkowy i przejdź do niego:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Zainstaluj pakiet:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Utwórz nowy katalog główny i przenieś zawartość pakietu poza bieżący katalog główny, a następnie przejdź do nowego katalogu głównego:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Usuń poprzedni katalog instalacyjny:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Zainstaluj zależności w nowym katalogu:
    ```bash
    npm install
    ```

6. Skonfiguruj plik `config.json` za pomocą swojego `STEAM_ID`:
    ```json
    {
      "steamId": "wprowadź_swoje_steam_id_tutaj"
    }
    ```

## Użycie
Aby uruchomić projekt, przejdź do katalogu instalacyjnego i użyj następującego polecenia:
```bash
npm start
```
To polecenie uruchomi aplikację i poprosi o wybór preferowanego języka. Następnie pobierze szczegóły meczy Dota 2 powiązane z podanym STEAM_ID.


## Ciągłość pobierania
Jeśli uruchomisz skrypt i pobierzesz określoną liczbę meczy, a następnie zatrzymasz skrypt i uruchomisz go ponownie, narzędzie wyszuka wcześniej utworzone pliki z pobranymi meczami. Odczyta już pobrane mecze i będzie kontynuować od miejsca, w którym przerwano.


## Rozwiązywanie problemów z wyświetlaniem języka
Jeśli napotkasz problemy z wyświetlaniem znaków w swoim języku, może być konieczne skonfigurowanie CMD lub PowerShell do używania czcionki obsługującej te znaki.
1. Kliknij prawym przyciskiem myszy na pasku tytułu CMD lub PowerShell.
2. Wybierz "Właściwości".
3. Przejdź do zakładki "Czcionka".
4. Wybierz "SimSun Ext-B" jako czcionkę. Ta czcionka obsługuje szeroki zakres znaków i jest zainstalowana domyślnie.
Uwaga: "SimSun Ext-B" to tylko jeden przykład, który został przetestowany i działa ze wszystkimi znakami. Możesz również zainstalować inne czcionki obsługujące znaki w Twoim języku, jeśli to konieczne.


## Repozytorium i pakiet
Ten projekt jest dostępny na GitHub i npm:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Limity API
Ten projekt korzysta z OpenDota API, które ma ograniczenia dotyczące liczby zapytań, które możesz wysłać. Zwróć uwagę na te ograniczenia, aby uniknąć problemów z pobieraniem danych.


## Licencja
Ten projekt jest licencjonowany na warunkach licencji MIT. Zobacz plik LICENSE, aby uzyskać więcej informacji.


## Dziennik Zmian
Szczegółowe informacje na temat aktualizacji znajdują się w [CHANGELOG](CHANGELOG.md).







