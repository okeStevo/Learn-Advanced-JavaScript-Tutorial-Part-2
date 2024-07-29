const paragraphElemnt = document.getElementById("text-to-change");
console.dir(paragraphElemnt);

const buttonElement = document.querySelector("#button button");
console.dir(buttonElement);
let checkText = false;
function changeText() {
  changeText = !changeText;
  // paragraphElemnt.textContent = "this text changed!!"
  if (changeText == true) {
    paragraphElemnt.textContent = "this text changed!!";
  } else {
    paragraphElemnt.textContent =
      "this text should change when the button below gets clicked";
  }
  console.log("clicked");
}
buttonElement.addEventListener("click", changeText);

// counter

const spanElementCounter = document.querySelector(".counter");
const inputElement = document.getElementById("title");

inputElement.addEventListener("input", function (event) {
  // const inputElementValue = inputElement.value;
  // const lengthOfValue = inputElementValue.length;
  // const remainingCharacters = 50 - lengthOfValue;
  // console.log(remainingCharacters);
  // spanElementCounter.textContent = remainingCharacters;

  const inputElementValue = event.target.value;
  const lengthOfValue = inputElementValue.length;
  const remainingCharacters = event.target.maxLength - lengthOfValue;
  spanElementCounter.textContent = remainingCharacters;
  console.log(lengthOfValue);

  if (remainingCharacters <= 10) {
    inputElement.style.backgroundColor = "red";
  } else {
    inputElement.style.backgroundColor = "#242424";
  }
});
console.log(spanElementCounter, inputElement);

const calculatorSection = document.querySelectorAll(".calculator");

const plusSection = calculatorSection[0];
const plus_section_input_one = plusSection.children[0];
const plus_section_input_two = plusSection.children[1];
const plus_section_span_element = plusSection.children[2];
const plus_section_button_element = plusSection.children[4];
function addNumbers() {
  const addedNumber =
    +plus_section_input_one.value + +plus_section_input_two.value;
  plus_section_span_element.textContent = addedNumber;
}
plus_section_button_element.addEventListener("click", addNumbers);

const substractSection = calculatorSection[1];
const substractSectionInputone = substractSection.children[0];
const substractSectionInputtwo = substractSection.children[1];
const substractSectionSpanElement = substractSection.children[2];
const substractSectionButtonElement = substractSection.children[4];

substractSectionButtonElement.addEventListener("click", function () {
  const subStractedNumbers =
    +substractSectionInputone.value - +substractSectionInputtwo.value;
  substractSectionSpanElement.textContent = subStractedNumbers;
});

const divisionSection = calculatorSection[2];
const divisionSectionInputone = divisionSection.children[0];
const divisionSectionInputtwo = divisionSection.children[1];
const divisionSectionSpanElement = divisionSection.children[2];
const divisionSectionButtonElement = divisionSection.children[4];

divisionSectionButtonElement.addEventListener("click", function () {
  const dividedNumbers =
    +divisionSectionInputone.value / +divisionSectionInputtwo.value;
  divisionSectionSpanElement.textContent = dividedNumbers;
});

const multiplicationSection = calculatorSection[3];
const multiplicationSectionInputone = multiplicationSection.children[0];
const multiplicationSectionInputtwo = multiplicationSection.children[1];
const multiplicationSectionSpanElement = multiplicationSection.children[2];
const multiplicationSectionButtonElement = multiplicationSection.children[4];

multiplicationSectionButtonElement.addEventListener("click", function () {
  const multipliedNumbers =
    +multiplicationSectionInputone.value * +multiplicationSectionInputtwo.value;
  multiplicationSectionSpanElement.textContent = multipliedNumbers;
});

// form submission

const formElement = document.querySelector("form");
const belowTheForm = document.querySelector(".below-the-form");
formElement.addEventListener("submit", function (event) {
  const allData = [];
  event.preventDefault()
  const formData = new FormData(event.target);
  const title = formData.get("title");
  const date = formData.get("date");
  const description = formData.get("description");

  const allInputs = {
    title,
    date,
    description,
  };
  allData.push(allInputs);
  let htmlContent = '';
  for (const input of allData) {
    htmlContent = htmlContent + `<aside class="output-section">
          <h1>${input.title}</h1>
          <p>${input.date}</p>
          <p>${input.description}</p>
        </aside>`;
  }
  belowTheForm.innerHTML = htmlContent
});
