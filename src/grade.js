function hesaplaNot(vize, final) {
    const donemNotu = vize * 0.30 + final * 0.70;
    let harfNotu = "";

    if (donemNotu >= 90 && donemNotu <= 100) {
        harfNotu = "A";
    } else if (donemNotu >= 80) {
        harfNotu = "B";
    } else if (donemNotu >= 70) {
        harfNotu = "C";
    } else if (donemNotu >= 60) {
        harfNotu = "D";
    } else if (donemNotu >= 50) {
        harfNotu = "E";
    } else {
        harfNotu = "F";
    }

    return { donemNotu, harfNotu };
}

module.exports = hesaplaNot;