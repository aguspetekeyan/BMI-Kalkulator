function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / Math.pow(height / 100, 2);
    var result = document.getElementById("result");
    result.innerHTML = "BMI = " + bmi.toFixed(1) + " - ";
    if (bmi < 18.5) {
        result.innerHTML += "Underweight";
        result.classList.add("underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML += "Normal Weight";
        result.classList.add("normal");
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML += "Overweight";
        result.classList.add("overweight");
    } else {
        result.innerHTML += "Obesity";
        result.classList.add("obesity");
    }
}