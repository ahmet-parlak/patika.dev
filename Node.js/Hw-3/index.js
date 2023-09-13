const { circleArea, circleCircumference } = require('./circle');

const radius = 5;
const area = circleArea(radius);
const circumference = circleCircumference(radius);


console.log(`Yarıçapı ${radius} olan dairenin çevresi ${circumference} şeklinde olmalıdır`);
console.log(`Yarıçapı ${radius} olan dairenin alanı ${area} şeklinde olmalıdır`);