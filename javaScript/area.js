const firstSide = document.querySelector(`.first-side`);
const secondSide = document.querySelector(`.second-side`);
const thirdSide = document.querySelector(`.third-side`);
const areaCalculator = document.querySelector(`.area-calculator`);
const output = document.querySelector(`.output`);

function calculateArea(e) {
  e.preventDefault();

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (firstSide.value <= 0 || secondSide.value <= 0 || thirdSide.value <= 0) {
    output.innerText = `The sides of a triangle cannot be zero / negative.`;
  } else if (
    firstSide.value === `` ||
    secondSide.value === `` ||
    thirdSide.value === ``
  ) {
    output.innerText = `Need all three sides to proceed!`;
  } else if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    thirdSideValue + firstSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    );
    output.innerText = `Area of the triangle is ${result.toFixed(2)} units.
    (By Heron's Formula)`;
  } else {
    output.innerText = `Given sides does not form a triangle.`;
  }
}

areaCalculator.addEventListener("submit", calculateArea);
