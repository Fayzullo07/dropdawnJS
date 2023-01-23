let selectFirst = document.querySelector(".custom_select_1");
let selectTwo = document.querySelector(".custom_select_2");
let selectThird = document.querySelector(".custom_select_3");

let buttons_1 = document.querySelector(".buttons_1");
let buttons_2 = document.querySelector(".buttons_2");

let optionOneValue = document.querySelector(".optionOneValue");
let optionTwoValue = document.querySelector(".optionTwoValue");
let optionThreeValue = document.querySelector(".optionThreeValue");

let optionTotalValues = document.querySelector(".optionTotalValues");

let totalValues = 0;
function totalV() {
  totalValues =
    Number(selectFirst.value) +
    Number(selectTwo.value) +
    Number(selectThird.value) +
    " kg";
}

function buttonClickOne(index) {
  selectFirst[index].value = index * 100;
  selectFirst[index].selected = true;
  optionOneValue.innerHTML = index * 100;
  totalV();
  optionTotalValues.innerHTML = totalValues;
}

function buttonClickTwo(index) {
  selectTwo[index].value = index * 100;
  selectTwo[index].selected = true;
  optionTwoValue.innerHTML = index * 100;
  totalV();
  optionTotalValues.innerHTML = totalValues;
}

function buttonClickThird(index) {
  selectThird[index].value = index * 100;
  selectThird[index].selected = true;
  optionThreeValue.innerHTML = index * 100;
  totalV();
  optionTotalValues.innerHTML = totalValues;
}

selectFirst.addEventListener("change", (e) => {
  const index = e.target.value / 100;
  buttonClickOne(index);
});

selectTwo.addEventListener("change", (e) => {
  const index = e.target.value / 100;
  buttonClickTwo(index);
});

selectThird.addEventListener("change", (e) => {
  const index = e.target.value / 100;
  buttonClickThird(index);
});

buttons_1.addEventListener("click", (e) => {
  for (let i = 0; i < buttons_1.children.length; i++) {
    if (e.target === buttons_1.children[i]) {
      buttonClickOne(i);
    }
  }
});

buttons_2.addEventListener("click", (e) => {
  for (let i = 0; i < buttons_2.children.length; i++) {
    if (e.target === buttons_2.children[i]) {
      buttonClickTwo(i);
    }
  }
});
