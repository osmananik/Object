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
    printLessons(){
        // console.log(dersler);//bu şekilde işlem sağlandığında hata vericektir this keyword ile bulunduğu kısma erişmesi gerekir
        console.log(this.dersler);
        console.log(this); //bulunduğu yeri göstermektedir this keywordu
        this.dersler.forEach(ders=>{
            console.log(ders);
        })
        
    }
}; //obje içerisinde arrow function kullanılamaz

//objenin içerisine fonksiyon tanımlayabiliyor muyuz evet tanımlama yapabiliyoruz.
console.log(this);  //windows objesi döner bulunduğu yeri basar
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();