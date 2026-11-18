# SQA 19 – Demo Web Shop Automation

## Project Overview

This project automates UI and API testing for the Demo Web Shop application as part of the SQA 19 project assignment.

The project includes:
- UI automation using Playwright with Page Object Model (POM).
- API testing using Postman.
- API collection execution using Newman.
- HTML and Allure test reports.

## Technologies Used

- JavaScript
- Node.js
- Playwright
- Postman
- Newman
- Allure Report
- Git and GitHub

## Project Structure

```text
SQA19_DemoWebShop/
│
├── api-tests/
│   ├── Demo Web Shop API Automation.postman_collection.json
│   └── package.json
│
├── ui-tests/
│   ├── pages/
│   ├── tests/
│   ├── playwright.config.js
│   ├── package.json
│   └── .env (local configuration, not committed)
│
├── .gitignore
└── README.md
```

Generated reports are stored locally and excluded from Git tracking.

## UI Automation – Playwright

### Setup

1. Install Node.js.
2. Clone this repository.
3. Open the `ui-tests` directory:

```bash
cd ui-tests
```

4. Install dependencies:

```bash
npm install
```

5. Install Playwright Chromium:

```bash
npx playwright install chromium
```

6. Create a `.env` file inside `ui-tests` and configure:

```env
TEST_EMAIL=your_registered_email
TEST_PASSWORD=your_password
```

Use your own Demo Web Shop account credentials.

### Test Scenarios

| Test ID | Scenario |
|---|---|
| Q1 | Invalid login validation |
| Q2 | Register, login and add product to cart |
| Q3 | Product search, quantity update and complete checkout |

### Run Individual Tests

From the `ui-tests` directory:

**Q1 – Invalid Login**

```bash
npm run test:q1
```

**Q2 – Register and Add Product to Cart**

```bash
npm run test:q2
```

**Q3 – Product Search and Complete Checkout**

```bash
npm run test:q3
```

**Note:** Q3 completes a checkout and creates a demo order.

### Run All UI Scenarios Sequentially

From the `ui-tests` directory:

```bash
npm run test:q1 && npm run test:q2 && npm run test:q3
```

### HTML Report

Playwright HTML report is generated after test execution.

Open it using:

```bash
npm run report
```

### Allure Report

Generate the Allure report:

```bash
npm run allure:generate
```

Open the report:

```bash
npm run allure:open
```

Screenshots are configured to be captured during test execution.

## API Testing – Postman and Newman

### API Collection

The Postman collection is located in:

```text
api-tests/Demo Web Shop API Automation.postman_collection.json
```

The collection tests the JSONPlaceholder Users API.

### API Test Scenarios

**GET – All Users**

- Verify HTTP status code 200.
- Verify response is an array.
- Verify the response array is not empty.
- Verify each user contains id, name and email.
- Save a selected user's ID and data in collection variables.

**PUT – Update User**

- Use the saved user ID dynamically.
- Generate dynamic name, email and company name.
- Update user information using a PUT request.
- Verify status code 200.
- Verify returned user ID.
- Verify phone number is not empty.
- Verify updated name, email and company name.

### Run API Tests Using Newman

From the project root:

```bash
cd api-tests
npm install
npm test
```

The Newman HTML report is generated at:

```text
api-tests/reports/api-report.html
```

## Combined UI and API Test Execution

Run all UI test scenarios followed by API tests from the project root:

```bash
(cd ui-tests && npm run test:q1 && npm run test:q2 && npm run test:q3) && (cd api-tests && npm test)
```

**Note:** Q3 completes checkout and creates a demo order. Run this combined command only when you intend to execute the complete test suite.

## GitHub Workflow

The project uses separate branches for individual questions:

- `Q1-invalid-login`
- `Q2-register-cart`
- `Q3-product-search-checkout`

Each branch is merged into `main` after completing its scenario.

## Author

SQA 19 Project – Demo Web Shop Automation and API Testing