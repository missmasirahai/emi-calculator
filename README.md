# 🧮 Loan EMI Calculator

A clean, responsive web tool that calculates your monthly loan EMI (Equated Monthly Instalment), total interest payable, and total repayment amount — instantly, with no page reload.

**Live Demo → [emi-calculator-sandy.vercel.app](https://emi-calculator-sandy.vercel.app/)**

---

## 📌 What it does

Enter three numbers and click **Calculate EMI**:

| Input | Example |
|---|---|
| Loan Amount (₹) | ₹5,00,000 |
| Interest Rate (% per year) | 9.5% |
| Loan Tenure (months) | 36 months |

The tool instantly shows you:
- ✅ Your **Monthly EMI**
- ✅ **Total Interest** you will pay over the entire loan
- ✅ **Total Amount** payable (Principal + Interest)
- ✅ A **visual bar** showing the split between principal and interest

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive design |
| Vanilla JavaScript | EMI calculation logic and DOM updates |
| Git + GitHub | Version control |
| Vercel | Free live deployment |

> No frameworks. No libraries. No build step required.

---

## 📐 The EMI Formula

This tool uses the standard **amortization formula** used by all banks and financial institutions:

```
EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
```

Where:
- **P** = Principal loan amount
- **R** = Monthly interest rate (Annual Rate ÷ 12 ÷ 100)
- **N** = Loan tenure in months

---

## 📁 Project Structure

```
emi-calculator/
│
├── index.html      ← Page layout and all HTML elements
├── style.css       ← All styling (colors, layout, receipt design)
└── script.js       ← EMI formula, input validation, result display
```

---

## 🚀 How to Run Locally

No installations needed. Just:

1. Clone this repository:
   ```bash
   git clone https://github.com/missmasirahai/emi-calculator.git
   ```

2. Open the folder:
   ```bash
   cd emi-calculator
   ```

3. Double-click `index.html` to open it in your browser.

That's it — it runs entirely in the browser.

---

## ✨ Features

- 📱 **Responsive** — works on mobile and desktop
- ✅ **Input validation** — shows clear error messages for invalid inputs
- 📊 **Visual breakdown** — principal vs interest bar updates in real time
- 💸 **Handles 0% interest** — divides loan evenly across months
- 🎨 **Paper receipt design** — clean, distinctive UI theme
- ⚡ **No dependencies** — pure HTML, CSS, JS; loads instantly

---

## 🔗 Built for Digital Heroes

This project was built as part of the [Digital Heroes](https://digitalheroesco.com) Custom Software Developer Trial Task.

---

## 👩‍💻 Author

**Masirah Saudagar**  
📧 masirahhh61@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/masirah-saudagar-2980a93a1)  
🐙 [GitHub](https://github.com/missmasirahai)
