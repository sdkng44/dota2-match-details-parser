# Dota 2 Match Details Parser
`dota2-match-details-parser`는 Dota 2 매치 상세 정보를 CSV 및 JSON 형식으로 다운로드할 수 있는 도구입니다. 이 도구는 OpenDota API를 사용하여 매치에 대한 자세한 정보를 가져오며, 여러 언어에 대한 다국어 지원을 제공합니다.

## 사전 요구 사항
[Node.js](https://nodejs.org/)가 컴퓨터에 설치되어 있는지 확인하세요.

## 중요한 공지
이 도구를 사용하려면 Steam ID 프로필이 공개로 설정되어 있어야 합니다. 그렇지 않으면 데이터를 가져올 수 없습니다.

## 설치
이 프로젝트는 GitHub에서 리포지토리를 클론하거나 npm을 사용하여 설치할 수 있습니다.

### GitHub에서 설치
다음 단계에 따라 프로젝트를 설치하고 설정하세요:

1. 리포지토리를 클론하거나 GitHub 웹사이트에서 다운로드합니다:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. 종속성을 설치합니다:
    ```bash
    npm install
    ```

3. `STEAM_ID`로 `config.json` 파일을 구성합니다:
    ```json
    {
      "steamId": "여기에_steam_id_입력"
    }
    ```

### npm에서 설치
npm을 사용하여 패키지를 설치할 수도 있습니다:

#### Windows 시스템의 경우

1. 초기 디렉토리를 생성하고 해당 디렉토리로 이동합니다:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. 패키지를 설치합니다:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. 새 루트 디렉토리를 생성하고 현재 루트 디렉토리 외부로 패키지 내용을 이동한 후 새 루트 디렉토리로 이동합니다:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. 이전 루트 설치 디렉토리를 제거합니다:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. 새 디렉토리에서 종속성을 설치합니다:
    ```powershell
    npm install
    ```

6. `STEAM_ID`로 `config.json` 파일을 구성합니다:
    ```json
    {
      "steamId": "여기에_steam_id_입력"
    }
    ```

#### Unix 기반 시스템(Linux/macOS)의 경우

1. 초기 디렉토리를 생성하고 해당 디렉토리로 이동합니다:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. 패키지를 설치합니다:
    ```bash
    npm install dota2-match-details-parser
    ```

3. 새 루트 디렉토리를 생성하고 현재 루트 디렉토리 외부로 패키지 내용을 이동한 후 새 루트 디렉토리로 이동합니다:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. 이전 루트 설치 디렉토리를 제거합니다:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. 새 디렉토리에서 종속성을 설치합니다:
    ```bash
    npm install
    ```

6. `STEAM_ID`로 `config.json` 파일을 구성합니다:
    ```json
    {
      "steamId": "여기에_steam_id_입력"
    }
    ```

## 사용법
프로젝트를 실행하려면 설치 디렉토리로 이동하여 다음 명령어를 사용하세요:
```bash
npm start
```
이 명령어는 애플리케이션을 시작하고, 선호하는 언어를 선택하도록 요청합니다. 그런 다음 제공된 STEAM_ID와 관련된 Dota 2 매치 상세 정보를 다운로드합니다.


## 다운로드 연속성
스크립트를 실행하여 일정 수의 매치를 다운로드한 후 스크립트를 중지하고 다시 시작하면, 도구는 이전에 생성된 다운로드된 매치 파일을 찾습니다. 이미 다운로드된 매치를 읽고 중단된 지점부터 계속 진행합니다.


## 언어 표시 문제 해결
언어 문자를 표시하는 데 문제가 있는 경우, CMD 또는 PowerShell에서 이러한 문자를 지원하는 폰트를 사용하도록 설정해야 할 수 있습니다.
1. CMD 또는 PowerShell의 제목 표시줄을 마우스 오른쪽 버튼으로 클릭합니다.
2. "속성"을 선택합니다.
3. "글꼴" 탭으로 이동합니다.
4. "SimSun Ext-B"를 글꼴로 선택합니다. 이 글꼴은 넓은 범위의 문자를 지원하며 기본적으로 설치되어 있습니다.
참고: "SimSun Ext-B"는 모든 문자가 정상적으로 표시되는 예제로, 테스트를 거쳤습니다. 필요에 따라 사용 언어의 문자를 지원하는 다른 글꼴을 설치할 수도 있습니다.


## 저장소 및 패키지
이 프로젝트는 GitHub 및 npm에서 사용할 수 있습니다:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## API 요청 제한
이 프로젝트는 OpenDota API를 사용하며, 요청할 수 있는 횟수에 제한이 있습니다. 데이터 검색 문제를 피하기 위해 이러한 제한 사항을 인지하시기 바랍니다.


## 라이선스
이 프로젝트는 MIT 라이선스에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하십시오.


## 변경 로그
업데이트에 대한 자세한 내용은 [CHANGELOG](CHANGELOG.md) 를 참조하십시오.




