
  # BTS-ID

Sebelumnya maaf kepada Bapak/ibu HRD dan yang menilai program saya. saya berpindah dari php ke javascript untuk
pembuatan programnya. saya pindah karena mengalami kendala pada saat meng develop menggunakan php, saya belum
membuat setup untuk menggunakan php di laptop. karena waktu berjalan jadi saya memutuskan untuk pindah ke
javascript.

Jadi saya membuat program menggunakan expressjs.

Cara menjalankan Program:
1. Buat database dengan nama db_test atau bisa di lihat di .env
  
2. Pada proses login di sini mengembalikan respons token dan akan kadaluarsa dalam 25 detik. jika user ingin mengakses getuser maka harus membuat property key di HTTP header "authorization" dengan value Bearer +token dari proses login

3. untuk mengatasi harus login terus karena token invalid/forbidden pada saat getusers maka frontend harus melakukan request interceptors ke POST "/users/refresh-token" dengan req.body "token" diisi dengan cookie. Tetapi jika token belum invalid saat request ke /api/users pada saat proses development/production, maka langsung bisa di lakukan di postman.
