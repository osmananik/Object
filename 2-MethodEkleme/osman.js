let ogrenci={
    ad:"osman",
    yas:32,
    email:"osmanik26@gmail.com",
    sinif:12,
    dersler:["fizik","kimya","biyoloji"],
    login(){                         //function yazmadan da kullanabiliriz    
        console.log("Öğrenci Giriş yaptı");
    },
    logout(){                                   //logout:function()  function yazmadan da kullanabiliriz
        console.log("Öğrenci çıkış yaptı");
    },
}; //obje içerisinde arrow function kullanılamaz

//objenin içerisine fonksiyon tanımlayabiliyor muyuz evet tanımlama yapabiliyoruz.

ogrenci.login();
ogrenci.logout();