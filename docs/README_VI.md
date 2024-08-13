# Dota 2 Match Details Parser
`dota2-match-details-parser` là một công cụ cho phép bạn tải xuống chi tiết trận đấu Dota 2 dưới dạng CSV và JSON. Công cụ này sử dụng OpenDota API để lấy thông tin chi tiết về các trận đấu và cung cấp hỗ trợ đa ngôn ngữ cho nhiều ngôn ngữ khác nhau.

## Yêu cầu trước
Đảm bảo rằng bạn đã cài đặt [Node.js](https://nodejs.org/) trên máy của mình.

## Thông báo quan trọng
Để sử dụng công cụ này, hồ sơ Steam ID của bạn phải được đặt ở chế độ công khai. Nếu không, dữ liệu sẽ không thể được truy xuất.

## Cài đặt
Bạn có thể cài đặt dự án bằng cách sao chép kho lưu trữ từ GitHub hoặc sử dụng npm.

### Từ GitHub
Làm theo các bước sau để cài đặt và cấu hình dự án:

1. Sao chép kho lưu trữ hoặc tải xuống từ trang web GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Cài đặt các phụ thuộc:
    ```bash
    npm install
    ```

3. Cấu hình tệp `config.json` của bạn với `STEAM_ID`:
    ```json
    {
      "steamId": "steam_id_của_bạn_tại_đây"
    }
    ```

### Từ npm
Bạn cũng có thể cài đặt gói bằng cách sử dụng npm:

#### Đối với hệ thống Windows

1. Tạo thư mục ban đầu và điều hướng đến thư mục đó:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Cài đặt gói:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Tạo thư mục gốc mới và di chuyển nội dung gói ra ngoài thư mục gốc hiện tại, sau đó định vị bạn trong thư mục gốc mới:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Xóa thư mục cài đặt gốc trước đó:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Cài đặt các phụ thuộc trong thư mục mới:
    ```powershell
    npm install
    ```

6. Cấu hình tệp `config.json` của bạn với `STEAM_ID`:
    ```json
    {
      "steamId": "steam_id_của_bạn_tại_đây"
    }
    ```

#### Đối với hệ thống dựa trên Unix (Linux/macOS)

1. Tạo thư mục ban đầu và điều hướng đến thư mục đó:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Cài đặt gói:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Tạo thư mục gốc mới và di chuyển nội dung gói ra ngoài thư mục gốc hiện tại, sau đó định vị bạn trong thư mục gốc mới:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Xóa thư mục cài đặt gốc trước đó:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Cài đặt các phụ thuộc trong thư mục mới:
    ```bash
    npm install
    ```

6. Cấu hình tệp `config.json` của bạn với `STEAM_ID`:
    ```json
    {
      "steamId": "steam_id_của_bạn_tại_đây"
    }
    ```

## Sử dụng
Để chạy dự án, chỉ cần điều hướng đến thư mục cài đặt và sử dụng lệnh sau:
```bash
npm start
```
Điều này sẽ khởi động ứng dụng và yêu cầu bạn chọn ngôn ngữ ưa thích của mình. Sau đó, nó sẽ tải xuống chi tiết trận đấu Dota 2 liên quan đến STEAM_ID được cung cấp.


## Tiếp tục Tải xuống
Nếu bạn chạy tập lệnh và tải xuống một số lượng trận đấu nhất định, sau đó dừng tập lệnh và khởi động lại, công cụ sẽ tìm các tệp đã tạo trước đó với các trận đấu đã tải xuống. Nó sẽ đọc các trận đấu đã tải xuống và tiếp tục từ nơi đã dừng lại.


## Khắc phục sự cố hiển thị ngôn ngữ
Nếu bạn gặp vấn đề với việc hiển thị các ký tự trong ngôn ngữ của mình, bạn có thể cần cấu hình CMD hoặc PowerShell để sử dụng phông chữ hỗ trợ các ký tự này.
1. Nhấp chuột phải vào thanh tiêu đề của CMD hoặc PowerShell.
2. Chọn "Properties".
3. Đi đến tab "Font".
4. Chọn "SimSun Ext-B" làm phông chữ. Phông chữ này hỗ trợ một loạt các ký tự và được cài đặt mặc định.
Lưu ý: "SimSun Ext-B" chỉ là một ví dụ đã được kiểm tra hoạt động với tất cả các ký tự. Bạn cũng có thể cài đặt các phông chữ khác hỗ trợ các ký tự trong ngôn ngữ của mình nếu cần.


## Kho lưu trữ và Gói
Dự án này có sẵn trên GitHub và npm:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Giới hạn API
Dự án này sử dụng OpenDota API, có giới hạn về số lượng yêu cầu mà bạn có thể thực hiện. Hãy chú ý đến các giới hạn này để tránh gặp sự cố khi truy xuất dữ liệu.


## Giấy phép
Dự án này được cấp phép theo giấy phép MIT. Xem tệp LICENSE để biết thêm chi tiết.


## Nhật ký Thay đổi
Để biết thông tin chi tiết về các cập nhật, vui lòng tham khảo [CHANGELOG](CHANGELOG.md).








