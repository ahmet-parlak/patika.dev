//A = π x r2

const pi = 3.14159;
const radius = process.argv.slice(2)[0];  //argument


if (Number(radius)) {
    const area = calculateCircleArea(radius);

    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area} şeklinde olmalıdır.`);

} else {
    console.log("Lütfen programı çalıştırırken daire yarıçapını argüman olarak girin.");
}


function calculateCircleArea(radius) {
    return (pi * radius * radius).toFixed(2);
}

