# Dota 2 Match Details Parser
`dota2-match-details-parser` adalah alat yang memungkinkan Anda mengunduh detail pertandingan Dota 2 dalam format CSV dan JSON. Alat ini menggunakan OpenDota API untuk mengambil informasi detail tentang pertandingan dan menyediakan dukungan multibahasa untuk berbagai bahasa.

## Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

## Pemberitahuan Penting
Untuk menggunakan alat ini, profil Steam ID Anda harus diatur ke publik. Jika tidak, data tidak dapat diambil.

## Instalasi
Anda dapat menginstal proyek ini dengan mengkloning repositori dari GitHub atau menggunakan npm.

### Dari GitHub
Ikuti langkah-langkah berikut untuk menginstal dan mengkonfigurasi proyek:

1. Klon repositori atau unduh dari situs web GitHub:
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Instal dependensi:
    ```bash
    npm install
    ```

3. Konfigurasikan file `config.json` Anda dengan `STEAM_ID` Anda:
    ```json
    {
      "steamId": "masukkan_steam_id_anda_disini"
    }
    ```

### Dari npm
Anda juga dapat menginstal paket ini menggunakan npm:

#### Untuk Sistem Windows

1. Buat direktori awal dan navigasikan ke direktori tersebut:
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Instal paket:
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Buat direktori root baru dan pindahkan konten paket keluar dari direktori root saat ini, lalu navigasikan ke direktori root yang baru:
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Hapus direktori instalasi root sebelumnya:
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Instal dependensi di direktori baru:
    ```powershell
    npm install
    ```

6. Konfigurasikan file `config.json` Anda dengan `STEAM_ID` Anda:
    ```json
    {
      "steamId": "masukkan_steam_id_anda_disini"
    }
    ```

#### Untuk Sistem Berbasis Unix (Linux/macOS)

1. Buat direktori awal dan navigasikan ke direktori tersebut:
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Instal paket:
    ```bash
    npm install dota2-match-details-parser
    ```

3. Buat direktori root baru dan pindahkan konten paket keluar dari direktori root saat ini, lalu navigasikan ke direktori root yang baru:
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Hapus direktori instalasi root sebelumnya:
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Instal dependensi di direktori baru:
    ```bash
    npm install
    ```

6. Konfigurasikan file `config.json` Anda dengan `STEAM_ID` Anda:
    ```json
    {
      "steamId": "masukkan_steam_id_anda_disini"
    }
    ```

## Penggunaan
Untuk menjalankan proyek ini, cukup navigasikan ke direktori instalasi dan gunakan perintah berikut:
```bash
npm start
```
Ini akan memulai aplikasi dan meminta Anda untuk memilih bahasa yang diinginkan. Setelah itu, aplikasi akan mengunduh detail pertandingan Dota 2 yang terkait dengan STEAM_ID yang diberikan.


## Kelanjutan Unduhan
Jika Anda menjalankan skrip dan mengunduh sejumlah pertandingan, kemudian menghentikan skrip dan memulainya kembali, alat ini akan mencari file yang telah dibuat sebelumnya dengan pertandingan yang diunduh. Alat ini akan membaca pertandingan yang sudah diunduh dan melanjutkan dari tempat yang terhenti.


## Pemecahan Masalah Tampilan Bahasa
Jika Anda mengalami masalah dalam menampilkan karakter dalam bahasa Anda, Anda mungkin perlu mengkonfigurasi CMD atau PowerShell untuk menggunakan font yang mendukung karakter tersebut.
1. Klik kanan pada bilah judul CMD atau PowerShell.
2. Pilih "Properties".
3. Pergi ke tab "Font".
4. Pilih "SimSun Ext-B" sebagai font. Font ini mendukung berbagai karakter dan sudah diinstal secara default.
Catatan: "SimSun Ext-B" hanyalah salah satu contoh yang telah diuji bekerja dengan semua karakter. Anda juga dapat menginstal font lain yang mendukung karakter dalam bahasa Anda jika diperlukan.


## Repositori dan Paket
Proyek ini tersedia di GitHub dan npm:
1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Batasan API
Proyek ini menggunakan OpenDota API, yang memiliki batasan jumlah permintaan yang dapat Anda lakukan. Harap perhatikan batasan ini untuk menghindari masalah dalam mengambil data.


## Lisensi
Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file LICENSE untuk detail lebih lanjut.


## Catatan Perubahan
Untuk informasi detail tentang pembaruan, silakan merujuk ke [CHANGELOG](CHANGELOG.md).






