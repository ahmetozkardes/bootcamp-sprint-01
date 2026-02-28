function tutarHesapla(liste) {
  const ahmetHarfleri = ["a", "h", "m", "e", "t"];
  let toplam = 0;

  for (let isim of liste) {
    isim = isim.toLowerCase();

    for (let harf of ahmetHarfleri) {
      for (let karakter of isim) {
        if (karakter === harf) {
          toplam++;
        }
      }
    }
  }

  return toplam * 1000;
}

module.exports = tutarHesapla;