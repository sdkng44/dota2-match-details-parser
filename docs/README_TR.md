# Dota 2 Match Details Parser
`dota2-match-details-parser`, Dota 2 maç detaylarını CSV ve JSON formatlarında indirmenizi sağlayan bir araçtır. Maçlar hakkında detaylı bilgi almak için OpenDota API'sini kullanır ve çeşitli diller için çok dilli destek sunar.

## Ön Koşullar
Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olduğundan emin olun.

## Önemli Uyarı
Bu aracı kullanmak için Steam ID profilinizin herkese açık olarak ayarlanmış olması gerekir. Aksi takdirde, veriler alınamaz.

## Kurulum
Projeyi GitHub'dan klonlayarak veya npm kullanarak yükleyebilirsiniz.

### GitHub'dan Kurulum
Projeyi yüklemek ve yapılandırmak için şu adımları izleyin:

1. Depoyu klonlayın veya GitHub web sitesinden indirin:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. `STEAM_ID` ile `config.json` dosyanızı yapılandırın:
    ```json
    {
      "steamId": "steam_id'nizi_buraya_girin"
    }
    ```

### npm'den Kurulum
Paketi npm kullanarak da yükleyebilirsiniz:

#### Windows Sistemler İçin

1. İlk dizini oluşturun ve o dizine geçin:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Paketi yükleyin:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Yeni bir kök dizin oluşturun ve paketin içeriğini mevcut kök dizinin dışına taşıyın, ardından yeni kök dizine geçin:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Önceki kök kurulum dizinini kaldırın:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Yeni dizinde bağımlılıkları yükleyin:
    ```powershell
    npm install
    ```

6. `STEAM_ID` ile `config.json` dosyanızı yapılandırın:
    ```json
    {
      "steamId": "steam_id'nizi_buraya_girin"
    }
    ```

#### Unix Tabanlı Sistemler (Linux/macOS) İçin

1. İlk dizini oluşturun ve o dizine geçin:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Paketi yükleyin:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Yeni bir kök dizin oluşturun ve paketin içeriğini mevcut kök dizinin dışına taşıyın, ardından yeni kök dizine geçin:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Önceki kök kurulum dizinini kaldırın:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Yeni dizinde bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

6. `STEAM_ID` ile `config.json` dosyanızı yapılandırın:
    ```json
    {
      "steamId": "steam_id'nizi_buraya_girin"
    }
    ```

## Kullanım
Projeyi çalıştırmak için kurulum dizinine gidin ve aşağıdaki komutu kullanın:
```bash
npm start
```
Bu komut uygulamayı başlatır ve tercih ettiğiniz dili seçmenizi ister. Ardından, sağlanan STEAM_ID ile ilgili Dota 2 maç detaylarını indirir.


## İndirilenlerin Sürekliliği
Komut dosyasını çalıştırıp belirli sayıda maçı indirdikten sonra, komut dosyasını durdurup yeniden başlatırsanız, araç daha önce oluşturulan indirilen maç dosyalarını arar. Önceden indirilen maçları okur ve kaldığı yerden devam eder.


## Dil Gösterim Sorunlarını Giderme
Dilinizdeki karakterlerin görüntülenmesinde sorun yaşıyorsanız, bu karakterleri destekleyen bir yazı tipi kullanacak şekilde CMD veya PowerShell'i yapılandırmanız gerekebilir.
1. CMD veya PowerShell'in başlık çubuğuna sağ tıklayın.
2. "Özellikler"i seçin.
3. "Yazı Tipi" sekmesine gidin.
4. Yazı tipi olarak "SimSun Ext-B"yi seçin. Bu yazı tipi geniş bir karakter yelpazesini destekler ve varsayılan olarak yüklüdür.
Not: "SimSun Ext-B", tüm karakterlerle çalıştığı test edilmiş bir örnektir. Gerektiğinde, dilinizdeki karakterleri destekleyen diğer yazı tiplerini de yükleyebilirsiniz.


## Depo ve Paket
Bu proje hem GitHub hem de npm üzerinden mevcuttur:：
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## API Sınırları
Bu proje, OpenDota API'sini kullanır ve bu API'nin yapabileceğiniz istek sayısında sınırlamaları vardır. Veri alma sorunlarından kaçınmak için bu sınırlamaların farkında olun.


## Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla ayrıntı için LICENSE dosyasına bakın.


## Değişiklik Günlüğü
Güncellemeler hakkında detaylı bilgi için [CHANGELOG](CHANGELOG.md) dosyasına bakın.





