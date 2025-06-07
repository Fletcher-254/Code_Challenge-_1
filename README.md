# Code-Challenge-1

This repository contains beginner(basic) JavaScript projects for practicing basic input/output, conditional logic, arithmetic, and user interaction via the `prompt()` function.

## Projects Included

---

### ☕ 1. Chai Ingredient Calculator

**Description**:  
Calculates the required ingredients (water, milk, tea leaves, sugar) based on the number of chai cups the user wants to make.

**Formula per Cup**:
- Water: 200 ml
- Milk: 50 ml
- Tea Leaves: 1 tablespoon
- Sugar: 2 teaspoons 

**How It Works**:
- Prompts the user for the number of cups.
- Converts the input into a number.
- Multiplies the quantity of each ingredient by the number of cups.
- Displays the results in the console.

**File**:  
[`chai.js`](chai.js)

---

### 🛵 2. Boda Fare Estimator

**Description**:  
Estimates the total fare for a boda boda ride based on the distance travelled.

**Formula**:
- Base Fare: KES 50
- Per Kilometer Charge: KES 15

**How It Works**:
- Prompts the user to enter the distance in kilometers.
- Validates the input.
- Calculates the fare and displays the total in the console.

**File**:  
[`boda.js`](boda.js)

---

### 💸 3. Mobile Transaction Fee Estimator

**Description**:  
Estimates the transaction fee and total debit for a money transfer.

**Rules**:
- 1.5% fee on the amount sent.
- Minimum fee: KES 10
- Maximum fee: KES 70

**How It Works**:
- Prompts the user to enter the amount to send.
- Calculates 1.5% of the amount.
- Enforces minimum and maximum fee limits.
- Displays the fee and total amount to be debited.

**File**:  
[`fee.js`]
---

## How to Run

1. Open any of the `.js` files in a browser-based JavaScript environment (e.g., browser console or JSFiddle).
2. The program will prompt you for input using `prompt()`.
3. Results are logged in the console using `console.log()`.

---

## Skills Practiced

- `prompt()` input
- `Number()` conversion
- Conditional logic (`if`, `else`)
- Arithmetic operations
- Console output
- Basic validation using `isNaN()`

---

## License

This project is open-source 
