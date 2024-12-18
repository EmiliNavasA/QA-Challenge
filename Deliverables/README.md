# QA Challenge - Backend & Frontend Testing

This repository contains the results of the tests performed on both the backend and frontend of the application. Below is the information about the tests performed, the tools used, and the instructions for running the tests.

## Backend Tests

The backend tests were conducted using **Postman**. You can access the Postman collection with tests related to user authentication, order management, and product management through the following link:

[Postman Collection](https://winter-shuttle-593463.postman.co/workspace/Qa-Challenge~02cbfcc7-1339-4476-8abd-729f05ab1262/collection/29713783-ca7128d3-609c-4d0c-bf19-c2403131597c?action=share&creator=29713783)

- **Access the Postman Collection**  
  This collection includes tests to validate CRUD (Create, Read, Update, Delete) operations on the API endpoints, ensuring that data is handled correctly.

## Frontend Testing with Cypress

For frontend testing, **Cypress** was used to validate the user interface. The tests included:

- Interacting with forms
- Validating data inputs
- Checking the UI response across different screen sizes and devices

## API Testing (Orders and Products)

In addition to backend and frontend testing, integration tests were performed on the **Orders** and **Products** APIs. These tests ensured that data was correctly transferred between the backend and frontend.

## Instructions for Running the Tests

### Backend (Postman):

1. Click on the following link to access the **Postman** collection and run the backend tests.
2. Make sure you have a properly configured **Postman** environment to run the API tests.

### Frontend (Cypress):

1. Ensure that **Cypress** is installed in your project.
2. To open Cypress and run the frontend tests, use the following command:
   ```bash
   npx cypress open
   ```

## Requirements

- **Node.js** (for running frontend tests)
- **Postman** (optional, only for backend testing)
- **Cypress** (for frontend testing)

