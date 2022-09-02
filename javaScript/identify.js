const inputs = document.querySelectorAll(`.angle-input`);
const output = document.querySelector(`.output`);
const btnIdentify = document.querySelector(`.identify-button`);

function calculateAngleSum(firstAngle, secondAngle, thirdAngle) {
  const angleSum = firstAngle + secondAngle + thirdAngle;
  return angleSum;
}

function identifyTriangle(e) {
  e.preventDefault();

  const angleSum = calculateAngleSum(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (
    inputs[0].value === `` ||
    inputs[1].value === `` ||
    inputs[2].value === ``
  ) {
    output.innerText = `Need all three angles to proceed!`;
  } else if (
    inputs[0].value <= 0 ||
    inputs[1].value <= 0 ||
    inputs[2].value <= 0
  ) {
    output.innerText = `Any angle of Triangle can not be zero / negative. Angle value should be greater than or equal to 1.`;
  } else if (angleSum === 180) {
    output.innerText = `Triangle Identified, the given angles forms a triangle!`;
  } else {
    output.innerText = `Triangle Not Identified, the given angles does not form a triangle.`;
  }
}

btnIdentify.addEventListener("click", identifyTriangle);
