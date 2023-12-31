window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialValues = {
    amount: 5000,
    years: 5,
    rate: 2
  };
  const amountUI = document.getElementById('loan-amount');
  const yearsUI = document.getElementById('loan-years');
  const rateUI = document.getElementById('loan-rate');
  amountUI.value = initialValues.amount;
  yearsUI.value = initialValues.years;
  rateUI.value = initialValues.rate;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
  // updateMonthly(monthlyCost);
  // console.log(currentUIValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;
  return ((p * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = "$" + monthly;
}
