# Dota 2 Match Details Parser
`dota2-match-details-parser` 是一个工具，允许您以CSV和JSON格式下载Dota 2比赛详情。它使用OpenDota API来获取比赛的详细信息，并为多种语言提供多语言支持。

## 先决条件
请确保您的计算机上已安装 [Node.js](https://nodejs.org/)。

## 重要提示
要使用此工具，您的Steam ID个人资料必须设置为公开。否则，将无法检索数据。

## 安装
您可以通过从GitHub克隆仓库或使用npm来安装该项目。

### 从GitHub安装
按照以下步骤安装和设置项目：

1. 克隆仓库或从GitHub网站下载：
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. 安装依赖项：
    ```bash
    npm install
    ```

3. 使用您的 `STEAM_ID` 配置 `config.json` 文件：
    ```json
    {
      "steamId": "您的_steam_id_在这里"
    }
    ```

### 从npm安装
您也可以使用npm安装此包：

#### 对于Windows系统

1. 创建初始目录并进入该目录：
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. 安装此包：
    ```powershell
    npm install dota2-match-details-parser
    ```

3. 创建一个新的根目录，并将包内容从当前根目录移出，然后进入新的根目录：
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. 删除之前的根安装目录：
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. 在新目录中安装依赖项：
    ```powershell
    npm install
    ```

6. 使用您的 `STEAM_ID` 配置 `config.json` 文件：
    ```json
    {
      "steamId": "您的_steam_id_在这里"
    }
    ```

#### 对于基于Unix的系统（Linux/macOS）

1. 创建初始目录并进入该目录：
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. 安装此包：
    ```bash
    npm install dota2-match-details-parser
    ```

3. 创建一个新的根目录，并将包内容从当前根目录移出，然后进入新的根目录：
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. 删除之前的根安装目录：
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. 在新目录中安装依赖项：
    ```bash
    npm install
    ```

6. 使用您的 `STEAM_ID` 配置 `config.json` 文件：
    ```json
    {
      "steamId": "您的_steam_id_在这里"
    }
    ```

## 使用方法
要运行该项目，只需导航到安装目录并使用以下命令：
```bash
npm start
```
这将启动应用程序，并提示您选择首选语言。然后，它将下载与提供的 STEAM_ID 相关的Dota 2比赛详情。

## 下载的持续性
如果您运行脚本并下载了一定数量的比赛，然后停止脚本并重新启动，该工具将查找以前创建的已下载比赛的文件。它将读取已经下载的比赛并从中断的地方继续。


## 语言显示问题解决方案
如果您遇到显示您语言字符的问题，您可能需要配置CMD或PowerShell以使用支持这些字符的字体。
1. 右键单击CMD或PowerShell的标题栏。
2. 选择“属性”。
3. 转到“字体”选项卡。
4. 选择“SimSun Ext-B”作为字体。此字体支持广泛的字符，并默认安装。

注意：“SimSun Ext-B”只是一个已被测试可以支持所有字符的示例。您还可以安装其他支持您语言字符的字体，如果需要的话。


## 仓库和软件包
该项目在GitHub和npm上均有提供：
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## API请求限制
该项目使用OpenDota API，它对您可以发出的请求数量有限制。请注意这些限制，以避免数据检索问题。


## 许可证
该项目采用MIT许可证。有关详细信息，请参阅LICENSE文件。


## 更新日志
有关更新的详细信息，请参阅[更新日志](CHANGELOG.md)。


