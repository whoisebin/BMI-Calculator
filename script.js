document.getElementById("bmiForm").addEventListener("submit", function(e){
  e.preventDefault();

  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;
  let bmi = (weight / (height * height)).toFixed(1);

  document.getElementById("result").innerText = "Your BMI: " + bmi;

  let progress = document.getElementById("progress");
  let advice = document.getElementById("advice");
  let body = document.body;

  // Reset animations
  progress.style.animation = "";

  if(bmi < 18.5){
    body.className = "underweight";
    progress.style.width = "25%";
    progress.style.background = "blue";
    progress.style.animation = "pulse 2s infinite";
    advice.innerHTML = `
      <h3>Underweight</h3>
      <p><b>Fact:</b> Higher risk of nutrient deficiencies and weakened immunity.</p>
      <p><b>Action:</b> Balanced diet, consult a nutritionist.</p>`;
  } else if(bmi < 24.9){
    body.className = "healthy";
    progress.style.width = "50%";
    progress.style.background = "green";
    progress.style.animation = "glow 2s infinite";
    advice.innerHTML = `
      <h3>Healthy Weight</h3>
      <p><b>Fact:</b> Lowest risk for diabetes and heart disease.</p>
      <p><b>Action:</b> Maintain activity and balanced meals.</p>`;
  } else if(bmi < 29.9){
    body.className = "overweight";
    progress.style.width = "75%";
    progress.style.background = "orange";
    progress.style.animation = "shake 0.5s 3";
    advice.innerHTML = `
      <h3>Overweight</h3>
      <p><b>Fact:</b> Increased risk of type 2 diabetes and hypertension.</p>
      <p><b>Action:</b> Exercise more, reduce sugar intake.</p>`;
  } else {
    body.className = "obese";
    progress.style.width = "100%";
    progress.style.background = "red";
    progress.style.animation = "shake 0.5s 5";
    advice.innerHTML = `
      <h3>Obese</h3>
      <p><b>Fact:</b> Strong link to cardiovascular disease and sleep apnea.</p>
      <p><b>Action:</b> Consult a doctor, structured diet plan.</p>`;
  }

  advice.classList.add("show"); // fade-in effect
});