function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
  
    if (weight === "" || height === "") {
      alert("Please enter both weight and height.");
      return;
    }
  
    const heightInMeters = height / 100; 
    const bmi = weight / (heightInMeters * heightInMeters);
  
    let resultText = "Your BMI is: " + bmi.toFixed(1);
  
    if (bmi < 18.5) {
      resultText += " (Underweight)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText += " (Normal weight)";
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText += " (Overweight)";
    } else {
      resultText += " (Obese)";
    }
      
  
    document.getElementById("result").innerHTML = resultText;
  }
  function clearData() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
  }