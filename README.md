
# bts-id

Sebelumnya maaf kepada Bapak/ibu HRD dan yang menilai program saya. saya berpindah dari php ke javascript untuk
pembuatan programnya. saya pindah karena mengalami kendala pada saat meng develop menggunakan php, saya belum
membuat setup untuk menggunakan php di laptop. karena waktu berjalan jadi saya memutuskan untuk pindah ke
javascript.

Jadi saya membuat program menggunakan expressjs.

Cara menjalankan Program:
1. Buat database dengan nama db_test atau bisa di lihat di .env
  
2. Routes pada program
  Pada proses login di sini mengembalikan respons token dan akan kadaluarsa dalam 25 detik.
  jika user ingin mengakses getuser maka harus membuat property header "authorization" dengan value Bearer +token dari proses login
   
  untuk mengatasi harus login terus pada saat sudah production maka frontend harus melakukan request interceptors ke "/users/refresh-token"
  
  POST "/api/users/login"
  POST "/api/users/register"

  GET /api/users
  POST "/users/refresh-token"

  GET "/api/shopping"
  POST "/api/shopping"
  GET "/api/shopping/:id"
  PUT "/api/shopping/:id"
  DELETE "/api/shopping/:id"
