const sides = document.querySelectorAll(`.input-side`);
const calcHypoBtn = document.querySelector(`.calc-hypo-button`);
const output = document.querySelector(`.output`);

function calculateSquareSum(a, b) {
  const squareSum = a * a + b * b;
  return squareSum;
}

function calculateHypotenuse(e) {
  e.preventDefault();

  const squareSum = calculateSquareSum(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const hypotenuseLength = Math.sqrt(squareSum);

  if (sides[0].value === `` || sides[1].value === ``) {
    output.innerText = `Need both Height and Base values to proceed!`;
  } else if (
    sides[0].value < 0 ||
    sides[1].value < 0 ||
    sides[0].value == 0 ||
    sides[1].value == 0
  ) {
    output.innerText = `Base value and Height value can not be zero / negative. Values should be greater than or equal to 1`;
  } else {
    output.innerText = `The length of Hypotenuse is: ${hypotenuseLength.toFixed(2)}`;
  }
}

calcHypoBtn.addEventListener("click", calculateHypotenuse);
