let ogrenci={
    ad:"osman",
    yas:32,
    email:"osmanik26@gmail.com",
    sinif:12,
    dersler:["fizik","kimya","biyoloji"]
};

console.log(ogrenci);

console.log(ogrenci.yas);

//ogrencinin yaşını update edebiir miyiz tabiki aşağıda yapıcaz.

ogrenci.yas=33;

console.log(ogrenci.yas);

console.log(ogrenci["yas"]);  //tanımladığımız objeye değişkenlerine ulaşmamızın 2.yöntemi

ogrenci["ad"]="yusuf";  //obje içinde tanımlanan değerleri update etme yöntemlerinden biridir

console.log(ogrenci["ad"]);

console.log(typeof ogrenci);