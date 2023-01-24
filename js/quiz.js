var correctAnswers = 0;
function checkAnswers() {
  checkAnswer("question1", "a", ["wrong1"]);
  checkAnswer("question2", "c", ["wrong2"]);
  checkAnswer("question3", "c", ["wrong3"]);
  checkAnswer("question4", "c", ["wrong4"]);
  checkAnswer("question5", "c", ["wrong5"]);
  checkAnswer("question6", "c", ["wrong6"]);
  checkAnswer("question7", "c", ["wrong7"]);
  checkAnswer("question8", "c", ["wrong8"]);
  checkAnswer("question9", "c", ["wrong9"]);
  checkAnswer("question10", "c", ["wrong10"]);
  // check answers for questions 3-10 here
  document.getElementById("result").innerHTML = "You got " + correctAnswers + " out of 10 questions correct.";
}

function checkAnswer(questionName, correctAnswer, wrongIds) {
  var radios = document.getElementsByName(questionName);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].value == correctAnswer && radios[i].checked) {
      correctAnswers++;
      return;
    }
  }
  for (var i = 0; i < wrongIds.length; i++) {
    document.getElementById(wrongIds[i]).style.color = "red";
  }
}