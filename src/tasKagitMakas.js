function tasKagitMakas(secim) {
  const rastgele = Math.floor(Math.random() * 3);
  const secenekler = ["taş", "kağıt", "makas"];
  const bilgisayar = secenekler[rastgele];

  if (secim === bilgisayar) {
    return `Beraberlik! (${secim})`;
  }

  if (
    (secim === "taş" && bilgisayar === "makas") ||
    (secim === "makas" && bilgisayar === "kağıt") ||
    (secim === "kağıt" && bilgisayar === "taş")
  ) {
    return `Kazandın! (${secim} vs ${bilgisayar})`;
  }

  return `Kaybettin! (${secim} vs ${bilgisayar})`;
}

module.exports = tasKagitMakas;