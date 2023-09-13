const pi = 3.14159;

/**
 * A = π × r²
 * 
 * @param {number} radius 
 * @returns {number} Area of the Circle
 */
function circleArea(radius) {
    return (pi * radius * radius).toFixed(2);
}


/**
 * C = 2π × r
 * 
 * @param {number} radius 
 * @returns Circumference of the Circle
 */
function circleCircumference(radius) {
    return (2 * pi * radius).toFixed(2);
}

module.exports = { circleArea, circleCircumference };