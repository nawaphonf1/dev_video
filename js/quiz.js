var questions = [
  {
      question: "1",
      choices: ["ก", "ข", "ค", "ง"],
      correctAnswer: "ค"
  },
  {
      question: "2",
      choices: ["ก", "ข", "ค" , "ง"],
      correctAnswer: "ก"
  },
  // ... other questions
];

function displayQuestions() {
  for (var i = 0; i < questions.length; i++) {
      var questionDiv = document.createElement("div");
      questionDiv.classList.add("row", "mb-5");

      var questionCol = document.createElement("div");
      questionCol.classList.add("col-12", "mt-4");
      questionDiv.appendChild(questionCol);

      var questionText = document.createElement("h5");
      questionText.innerHTML = "ข้อที่ " + (i + 1) + ": " + questions[i].question;
      questionCol.appendChild(questionText);

      var choicesCol = document.createElement("div");
      choicesCol.classList.add("col", "ms-3");
      questionCol.appendChild(choicesCol);

      var choices = questions[i].choices;
      for (var j = 0; j < choices.length; j++) {
          var choiceDiv = document.createElement("div");
          choiceDiv.classList.add("form-check");
          choicesCol.appendChild(choiceDiv);

          var choiceInput = document.createElement("input");
          choiceInput.classList.add("form-check-input");
          choiceInput.type = "radio";
          choiceInput.name = "question" + (i + 1);
          choiceInput.value = choices[j];
          choiceInput.id = "flexRadioDefault" + (i + 1) + (j + 1);
          choiceDiv.appendChild(choiceInput);
          var choiceLabel = document.createElement("label");
          choiceLabel.classList.add("form-check-label");
          choiceLabel.innerHTML = choices[j];
          choiceLabel.setAttribute("for", "flexRadioDefault" + (i + 1) + (j + 1));
          choiceDiv.appendChild(choiceLabel);
      }
      document.getElementById("quizForm").appendChild(questionDiv);
  }
}

function checkAnswers() {
  var correctAnswers = 0;
  for (var i = 0; i < questions.length; i++) {
      var radios = document.getElementsByName("question" + (i + 1));
      var questionCol = document.getElementsByClassName("col-12")[i];
      var isCorrect = false;
      for (var j = 0; j < radios.length; j++) {
          if (radios[j].value == questions[i].correctAnswer && radios[j].checked) {
              correctAnswers++;
              isCorrect = true;
              break;
          }
      }
      if (isCorrect) {
          questionCol.style.color = "green";
      } else {
          questionCol.style.color = "red";
      }
  }
  document.getElementById("result").innerHTML = "You got " + correctAnswers + " out of " + questions.length + " correct.";
}


displayQuestions();