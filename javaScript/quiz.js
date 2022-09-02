const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector(".submit-button");
const output = document.querySelector(".output");
const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore() {
  let score = 0;
  let i = 0;

  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAnswers[i]) {
      score = score + 1;
    }
    i++;
  }
  output.innerText = `You Scored : ${score}`;
}

submitButton.addEventListener(`click`, calculateScore);
