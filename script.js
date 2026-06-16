// ============================================
// STEP 1: Grab references to all the HTML elements
// we need to read from or write to.
// "document.getElementById" just means:
// "find the HTML tag that has id='loanAmount'" etc.
// ============================================
const loanAmountInput = document.getElementById('loanAmount');
const interestRateInput = document.getElementById('interestRate');
const tenureMonthsInput = document.getElementById('tenureMonths');
const calculateBtn = document.getElementById('calculateBtn');
const errorMsg = document.getElementById('errorMsg');

const resultSection = document.getElementById('resultSection');
const emiValue = document.getElementById('emiValue');
const splitPrincipal = document.getElementById('splitPrincipal');
const splitInterest = document.getElementById('splitInterest');
const principalLabel = document.getElementById('principalLabel');
const interestLabel = document.getElementById('interestLabel');
const totalInterest = document.getElementById('totalInterest');
const totalPayment = document.getElementById('totalPayment');

// ============================================
// STEP 2: A small helper function to turn a plain
// number like 12345 into "₹12,345" (Indian style commas).
// toLocaleString is a built-in JavaScript feature —
// we don't have to write the comma logic ourselves.
// ============================================
function formatRupees(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

// ============================================
// STEP 3: The actual EMI math.
// EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
//
// P = Principal (loan amount)
// R = Monthly interest rate (annual rate / 12 / 100)
// N = Number of monthly installments (tenure in months)
//
// This is the standard formula every bank uses —
// we are not inventing it, just coding it.
// ============================================
function calculateEMI(principal, annualRatePercent, tenureMonths) {
  const monthlyRate = annualRatePercent / 12 / 100;

  // Special case: if interest rate is 0, EMI is simply
  // the loan amount divided evenly across the months.
  if (monthlyRate === 0) {
    const emi = principal / tenureMonths;
    return { emi, totalPayment: principal, totalInterest: 0 };
  }

  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return { emi, totalPayment, totalInterest };
}

// ============================================
// STEP 4: What happens when the user clicks the button.
// "addEventListener('click', ...)" means:
// "when this button is clicked, run this function"
// ============================================
calculateBtn.addEventListener('click', function () {
  // Read the values typed by the user.
  // They come in as text, so we use parseFloat to turn
  // them into real numbers we can do math with.
  const principal = parseFloat(loanAmountInput.value);
  const rate = parseFloat(interestRateInput.value);
  const tenure = parseFloat(tenureMonthsInput.value);

  // Basic validation — make sure nothing is empty,
  // negative, or not a real number.
  if (!principal || principal <= 0) {
    errorMsg.textContent = 'Please enter a valid loan amount.';
    resultSection.classList.add('hidden');
    return;
  }
  if (rate === '' || isNaN(rate) || rate < 0) {
    errorMsg.textContent = 'Please enter a valid interest rate.';
    resultSection.classList.add('hidden');
    return;
  }
  if (!tenure || tenure <= 0) {
    errorMsg.textContent = 'Please enter a valid tenure in months.';
    resultSection.classList.add('hidden');
    return;
  }

  // No errors — clear any old error message.
  errorMsg.textContent = '';

  // Run the calculation.
  const { emi, totalPayment: total, totalInterest: interest } =
    calculateEMI(principal, rate, tenure);

  // STEP 5: Push the results into the page.
  emiValue.textContent = formatRupees(emi);
  totalInterest.textContent = formatRupees(interest);
  totalPayment.textContent = formatRupees(total);
  principalLabel.textContent = formatRupees(principal);
  interestLabel.textContent = formatRupees(interest);

  // Work out what % of the bar should be principal vs interest,
  // so the visual bar matches the real numbers.
  const principalPercent = (principal / total) * 100;
  const interestPercent = 100 - principalPercent;
  splitPrincipal.style.width = principalPercent + '%';
  splitInterest.style.width = interestPercent + '%';

  // Reveal the result section (it starts hidden in the HTML/CSS).
  resultSection.classList.remove('hidden');
});
