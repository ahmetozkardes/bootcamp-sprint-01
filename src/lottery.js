function lottery(array) {
  const isimler = [...array];
  const sanslilar = [];

  sanslilar.push(...isimler.slice(0, 5));
  sanslilar.push(isimler[9]);
  sanslilar.push(isimler[19]);
  sanslilar.push(isimler[29]);
  sanslilar.push(isimler[39]);
  sanslilar.push(isimler[49]);

  return sanslilar;
}

module.exports = lottery;