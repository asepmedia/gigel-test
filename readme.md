### CLONE
clone repository `git clone https://github.com/asepmedia/gigel-test.git`
### INSTALL
Please run `composer install` and `npm run install`
### SETTING DB
Run `cp .env.example .env` for Linux/Mac user
Run `copy .env.example .env` for Windows user

Setting Database as usual

### RUNNING
Run `php artisan migrate` & `php artisan db:seed` & `php artisan passport:install`

Run `php artisan serve` & `npm install watch / npm install dev`
### NOTE
I used
Npm : 6.4.1
Node : v10.15.0
PHP : 7.2.10
MySql : 5.7.25
Comppser : 1.6.3

### SHORT TUTORIAL
http://127.0.0.1:8000/register == Halaman untuk daftar user baru
http://127.0.0.1:8000/login == Halaman untuk login
http://127.0.0.1:8000 == Halaman dashboard
http://127.0.0.1:8000/profile/update == Halaman untuk update profile
http://127.0.0.1:8000/profile/password == Halaman untuk update password
#### Register
Calon pengguna wajib mengisi semua form yang tersedia.
Note: untuk password harus di awali huruf besar, contoh : Secret123
#### Login
Wajib mengisi semua form yang tersedia untuk bisa masuk
#### Dashboard
Berisi informasi profile singkat
#### Update Profile
Dapat mengubah nama, email, dan nomor handphone 
#### Update Password
Dapat mengubah password dengan syarat memasukan Password Lama yang aktif