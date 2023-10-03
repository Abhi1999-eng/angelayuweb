function bmiCalculator(weight, height) {
    height = height*height;
    bmi = weight/height;
    return bmi;
}
console.log(bmiCalculator(800, 10));