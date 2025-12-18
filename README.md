# Sauce_Demo_Cypress
Automation Testing with Cypress

# Cypress Automation Testing Framework

## Overview

This repository contains a **Cypress-based Automation Testing Framework** designed to demonstrate **professional UI testing and End-to-End (E2E) testing practices** for modern web applications.

The project is built as a **QA Automation portfolio** to showcase:

* Structured and maintainable test automation
* Realistic E2E business flows
* Industry best practices commonly expected in QA Automation roles

---

## Testing Scope

The framework covers the following testing areas:

* **UI Testing**

  * Element visibility and validation
  * Text and content verification
  * Navigation and routing validation

* **End-to-End (E2E) Testing**

  * User authentication (login)
  * Product selection and cart management
  * Checkout and order completion flow

* **Test Coverage**

  * Positive scenarios
  * Negative scenarios and validation errors

**System Under Test (SUT):**
Sauce Demo (Public Demo Application)
[https://www.saucedemo.com](https://www.saucedemo.com)

---

## Technology Stack

* **Cypress** – End-to-End Test Automation Framework
* **JavaScript (ES6+)**
* **Node.js**
* **Git / GitHub**

---

## Project Structure

```bash
cypress/
 ├── e2e/
 │    ├── checkout_flow.cy.js        # Authentication test cases
 │    └── login_flow.cy.js     # End-to-End checkout flow
 │
 ├── support/
 │    ├── commands.js        # Reusable custom commands
 │    └── e2e.js             # Global hooks & exception handling
 │
 ├── fixtures/
 │    └── exanoke.json         # Test data management

cypress.config.js
package.json
```

---

## Test Execution

### Install Dependencies

```bash
npm install
```

### Open Cypress Test Runner (Interactive Mode)

```bash
npx cypress open
```

### Run Tests (Headless Mode)

```bash
npx cypress run
```

---

## Sample End-to-End Scenario

```text
1. User accesses the application
2. User logs in with valid credentials
3. User adds a product to the shopping cart
4. User reviews the cart
5. User proceeds to checkout
6. User enters shipping information
7. User completes the purchase
8. User receives order confirmation
```

This scenario represents a **realistic business flow** commonly automated in e-commerce platforms.

---

## Exception Handling Strategy

Certain React runtime errors may occur **only during automated execution** due to Cypress script injection.

The framework includes a **controlled exception handler** to prevent false-negative test failures:

```js
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Minified React error')) {
    return false
  }
})
```

> These errors are verified to not occur in normal browser sessions and do not impact real user behavior.

---

## Quality & Best Practices

* Clear separation between UI tests and E2E flows
* No usage of arbitrary waits (`cy.wait()`)
* Stable and maintainable selectors
* Reusable test data and commands
* Environment-based configuration
* Readable, scalable test structure

---

## Purpose of This Project

This repository is intended to:

* Demonstrate hands-on experience in **QA Automation Engineering**
* Showcase the ability to design and maintain a scalable automation framework
* Serve as a technical portfolio for QA / SDET roles

---

## Author

**Automation QA Engineer**
GitHub: *https://github.com/yusufwp*

---

## Feedback & Contribution

Feedback and suggestions are welcome.
Please feel free to open an **issue** or submit a **pull request**.

---
