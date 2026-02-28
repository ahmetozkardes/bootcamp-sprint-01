const hesaplaNot = require("./grade");
const tasKagitMakas = require("./tasKagitMakas");
const lottery = require("./lottery");
const tutarHesapla = require("./donation");

// Not hesaplama
const sonuc = hesaplaNot(50, 100);
console.log("Not Sonucu:", sonuc);

// Taş Kağıt Makas
console.log(tasKagitMakas("makas"));

// Lottery
const isimListesi = Array.from({ length: 50 }, (_, i) => "Kisi" + (i + 1));
console.log("Lottery:", lottery(isimListesi));

// Donation
const yardimYapanlar = [
  "Leyla Mert",
  "Fevzi Kaya",
  "Aysel Hataylı",
  "Furkan Menekşe",
  "Zeliha Aydın"
];

console.log("Toplam Bağış:", tutarHesapla(yardimYapanlar));