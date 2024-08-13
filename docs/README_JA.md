# Dota 2 Match Details Parser
`dota2-match-details-parser` は、Dota 2 のマッチ詳細をCSVおよびJSON形式でダウンロードできるツールです。OpenDota APIを使用してマッチの詳細情報を取得し、複数の言語に対応した多言語サポートを提供します。

## 前提条件
お使いのコンピュータに [Node.js](https://nodejs.org/) がインストールされていることを確認してください。

## 重要なお知らせ
このツールを使用するには、Steam IDのプロフィールを公開に設定する必要があります。公開でない場合、データを取得することができません。

## インストール
このプロジェクトは、GitHubからリポジトリをクローンするか、npmを使用してインストールできます。

### GitHubからのインストール
次の手順に従って、プロジェクトをインストールおよび設定してください：

1. リポジトリをクローンするか、GitHubのウェブサイトからダウンロードします：
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. 依存関係をインストールします：
    ```bash
    npm install
    ```

3. `STEAM_ID` で `config.json` ファイルを構成します：
    ```json
    {
      "steamId": "ここに_steam_id_を入力"
    }
    ```

### npmからのインストール
npmを使用してパッケージをインストールすることもできます：

#### Windowsシステムの場合

1. 初期ディレクトリを作成し、そこに移動します：
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. パッケージをインストールします：
    ```powershell
    npm install dota2-match-details-parser
    ```

3. 新しいルートディレクトリを作成し、パッケージの内容を現在のルートディレクトリから移動し、新しいルートディレクトリに移動します：
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. 以前のルートインストールディレクトリを削除します：
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. 新しいディレクトリで依存関係をインストールします：
    ```powershell
    npm install
    ```

6. `STEAM_ID` で `config.json` ファイルを構成します：
    ```json
    {
      "steamId": "ここに_steam_id_を入力"
    }
    ```

#### Unixベースのシステム（Linux/macOS）の場合

1. 初期ディレクトリを作成し、そこに移動します：
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. パッケージをインストールします：
    ```bash
    npm install dota2-match-details-parser
    ```

3. 新しいルートディレクトリを作成し、パッケージの内容を現在のルートディレクトリから移動し、新しいルートディレクトリに移動します：
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. 以前のルートインストールディレクトリを削除します：
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. 新しいディレクトリで依存関係をインストールします：
    ```bash
    npm install
    ```

6. `STEAM_ID` で `config.json` ファイルを構成します：
    ```json
    {
      "steamId": "ここに_steam_id_を入力"
    }
    ```

## 使用方法
プロジェクトを実行するには、インストールディレクトリに移動し、次のコマンドを使用します：
```bash
npm start
```
これにより、アプリケーションが起動し、優先言語を選択するように求められます。その後、指定された STEAM_ID に関連するDota 2マッチの詳細がダウンロードされます。


## ダウンロードの継続性
スクリプトを実行して一定数のマッチをダウンロードした後、スクリプトを停止して再起動すると、ツールは以前に作成されたダウンロード済みマッチのファイルを探します。既にダウンロードされたマッチを読み込み、途中から続行します。


## 言語表示の問題解決
言語の文字を表示する際に問題が発生した場合、これらの文字をサポートするフォントを使用するようにCMDまたはPowerShellを設定する必要があるかもしれません。
1. CMDまたはPowerShellのタイトルバーを右クリックします。
2. 「プロパティ」を選択します。
3. 「フォント」タブに移動します。
4. 「SimSun Ext-B」をフォントとして選択します。このフォントは幅広い文字をサポートしており、デフォルトでインストールされています。
注意：「SimSun Ext-B」はすべての文字で機能することがテストされた例です。必要に応じて、使用している言語の文字をサポートする他のフォントをインストールすることもできます。


## リポジトリとパッケージ
このプロジェクトはGitHubおよびnpmで利用可能です：
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## APIの制限
このプロジェクトはOpenDota APIを使用しており、リクエストの回数に制限があります。データ取得の問題を避けるために、これらの制限事項を把握しておいてください。


## ライセンス
このプロジェクトはMITライセンスの下でライセンスされています。詳細については、LICENSEファイルを参照してください。


## 変更履歴
アップデートの詳細については、[CHANGELOG](CHANGELOG.md) を参照してください。




