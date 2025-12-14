# 📘 Data Structures & Algorithms (DSA) – JavaScript

This repository contains a **well-structured and detailed collection of Data Structures and Algorithms (DSA)** problems implemented in **JavaScript**, covering topics from **Mathematics to Dynamic Programming (DP)**.

All implementations are organized topic-wise, and a **single test runner (`test.js`)** is used to import and test all functions.

---

## 📂 Project Structure

```
DSA/
│
├── mathematics/
│   ├── gcd.js
│   ├── lcm.js
│   ├── primeCheck.js
│
├── arrays/
│   ├── reverseArray.js
│   ├── maxSubarray.js
│
├── strings/
│   ├── isPalindrome.js
│
├── recursion/
│   ├── factorial.js
│
├── dp/
│   ├── fibonacci.js
│   ├── knapsack.js
│
├── test.js
└── README.md
```

---

## 🧠 Topics Covered

### 1️⃣ Mathematics
### 2️⃣ Arrays
### 3️⃣ Strings
### 4️⃣ Sorting
### 5️⃣ Recursion
### 6️⃣ Dynamic Programming (DP)

## 🧪 Test Runner (`test.js`)

All functions are imported and tested from a **single entry file**.

### Example
```js
import { gcd } from "./mathematics/gcd.js";
import { fibonacci } from "./dp/fibonacci.js";

console.log(gcd(10, 20));      // 10
console.log(fibonacci(7));     // 13
```

---

## ▶️ How to Run

### Prerequisites
- Node.js (v16+ recommended)

### Run Tests
```bash
node test.js
```

---

## ➕ How to Add a New Problem

1. Create a file inside the relevant topic folder  
   ```bash
   arrays/twoSum.js
   ```

2. Export the function
   ```js
   export function twoSum(nums, target) {
     // implementation
   }
   ```

3. Import and test it in `test.js`

4. Add the problem details to `README.md`

---

## 📌 Coding Guidelines

- One problem per file
- Use meaningful function names
- Add time & space complexity as comments
- Use ES6 `export / import`
- Keep functions pure and reusable

---

## 🚀 Roadmap

- [ ] Linked List
- [ ] Stack & Queue
- [ ] Trees
- [ ] Graphs
- [ ] Sliding Window
- [ ] Greedy Algorithms
- [ ] Advanced Dynamic Programming

---

## 🤝 Contributions

Contributions are welcome!  
Feel free to raise PRs for:
- New problems
- Optimized solutions
- Better documentation

---

## ⭐ If You Find This Useful

Give this repository a ⭐ and use it as your **DSA reference & interview prep guide**.

Happy Coding 🚀