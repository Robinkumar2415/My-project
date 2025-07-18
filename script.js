const form = document.getElementById("symptomForm");
const symptomInput = document.getElementById("symptomInput");
const symptomTags = document.getElementById("symptomTags");
const conditionOutput = document.getElementById("conditionOutput");
const resultsDiv = document.getElementById("results");

let symptoms = [];

symptomInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const symptom = symptomInput.value.trim();
    if (symptom && !symptoms.includes(symptom)) {
      symptoms.push(symptom);
      addSymptomTag(symptom);
      symptomInput.value = "";
    }
  }
});

function addSymptomTag(symptom) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.innerText = symptom;
  symptomTags.appendChild(tag);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (!age || !gender || symptoms.length === 0) {
    alert("Please fill all fields.");
    return;
  }

  // Placeholder AI logic
  const diagnosis = dummyDiagnosis(symptoms);
  showResults(diagnosis);
});

function dummyDiagnosis(symptoms) {
  if (symptoms.includes("fever") && symptoms.includes("headache")) {
    return [
      { name: "Flu", confidence: "80%" },
      { name: "Migraine", confidence: "50%" }
    ];
  } else {
    return [
      { name: "General Viral Infection", confidence: "60%" }
    ];
  }
}

function showResults(conditions) {
  resultsDiv.classList.remove("hidden");
  conditionOutput.innerHTML = "";

  conditions.forEach(c => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${c.name}</strong> — Confidence: ${c.confidence}`;
    conditionOutput.appendChild(div);
  });
}
