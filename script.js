/* let view = document.querySelector(".view");
let amount = document.querySelector(".amount");
let month = document.querySelector(".month");
let check = document.getElementById("check");
let range = document.getElementById("range");
let valueCount = 0;

let values = [0, 12, 16, 24, 36];

const rangeChange = range.addEventListener("input", () => {
  const rangeValue = parseInt(range.value);
  const otherValue = `$${values[rangeValue].toFixed(2)}`;
  amount.value = otherValue;
  amount.textContent = otherValue;
});

range.addEventListener("input", () => {
  range.style.setProperty("--value", range.value);
});

const backColorRange = (range.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #ECF0FB " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";

  valueCount = +this.value;
  let count = valueCount * 12;
  let discountResult = count - count * 0.25;
  console.log(check.checked);

  if (amount.textContent == "$0.00") {
    view.textContent = "0K Page Viewer";
  }

  if (amount.textContent == "$12.00") {
    view.textContent = "50K Page Viewer";
  }
  if (amount.textContent == "$16.00") {
    view.textContent = "100K Page Viewer";
  }
  if (amount.textContent == "$24.00") {
    view.textContent = "500K Page Viewer";
  }
  if (amount.textContent == "$36.00") {
    view.textContent = "1000K Page Viewer";
  }

  check.addEventListener("input", function () {
    if (amount.textContent == "$0.00" && check.checked) {
      amount.textContent = "$0";
      month.textContent = "/ yearly";
    }

    if (amount.textContent == "$12.00" && check.checked) {
      amount.textContent = "$120";
      month.textContent = "/ yearly";
    }

    if (amount.textContent == "$16.00" && check.checked) {
      amount.textContent = "$150";
      month.textContent = "/ yearly";
    }
    if (amount.textContent == "$24.00" && check.checked) {
      amount.textContent = "$200";
      month.textContent = "/ yearly";
    }
    if (amount.textContent == "$36.00" && check.checked) {
      amount.textContent = "$250";
      month.textContent = "/ yearly";
    }
  });

  
});
 */

let view = document.querySelector(".view");
let amount = document.querySelector(".amount");
let month = document.querySelector(".month");
let check = document.getElementById("check");
let range = document.getElementById("range");

let values = [0, 12, 16, 24, 36];

range.addEventListener("input", () => {
  const rangeValue = parseInt(range.value);
  const otherValue = `$${values[rangeValue].toFixed(2)}`;
  amount.value = otherValue;
  amount.textContent = otherValue;

  range.style.setProperty("--value", rangeValue);
  const value = ((rangeValue - range.min) / (range.max - range.min)) * 100;
  range.style.background = `linear-gradient(to right, #A4F3EB 0%, #ECF0FB ${value}%, #fff ${value}%, white 100%)`;

  if (amount.textContent === "$0.00") {
    view.textContent = "0K Page Views";
  } else if (amount.textContent === "$12.00") {
    view.textContent = "50K Page Views";
  } else if (amount.textContent === "$16.00") {
    view.textContent = "100K Page Views";
  } else if (amount.textContent === "$24.00") {
    view.textContent = "500K Page Views";
  } else if (amount.textContent === "$36.00") {
    view.textContent = "1000K Page Views";
  }

  if (check.checked) {
    const discountResult = values[rangeValue] * 12 * 0.75;
    amount.textContent = `$${discountResult.toFixed(2)}`;
    month.textContent = "/ year";
  } else {
    amount.textContent = otherValue;
    month.textContent = "/ month";
  }
});

check.addEventListener("input", () => {
  const rangeValue = parseInt(range.value);
  const yearlyAmount = `$${(values[rangeValue] * 12 * 0.75).toFixed(2)}`;

  if (check.checked) {
    amount.textContent = yearlyAmount;
    month.textContent = "/ year";
  } else {
    amount.textContent = `$${values[rangeValue].toFixed(2)}`;
    month.textContent = "/ month";
  }
});
