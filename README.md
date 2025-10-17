# Workflow Repo for the CA

This repository contains the front-end project for the JavaScript 2 CA assignment. It includes unit tests with Vitest, end-to-end (e2e) tests with Playwright, and linting/formatting with ESLint and Prettier.

---

## Project Setup

1. **Clone the repo and install dependencies**

```bash
git clone https://github.com/AndersenIA/workflow-repo-ca/tree/workflow
cd workflow-repo-ca
npm install
```

2. **Create environment variables**

Create a .env file in the root of the project (do not commit this file).
You can use .env.example as a reference:

E2E_USERNAME=
E2E_PASSWORD=

E2E_USERNAME – the email of a registered user for e2e login testing

E2E_PASSWORD – the password of that user

3. **Run the development server**

npm run dev

This starts a local server at http://127.0.0.1:3000.

## Scripts

Script Description

- npm run dev --------------- Starts the development server
- npm run lint -------------- Runs ESLint on all JS files
- npm run format ------------ Formats JS files with Prettier
- npm run test -------------- Runs unit tests using Vitest
- npm run test:e2e ---------- Runs end-to-end tests using Playwright

## Testing

## Unit Tests (Vitest)

## isActivePath function

- Returns true when the current path matches href exactly

- Returns true for root path (/) when path is / or /index.html

- Returns true when current path includes the href

- Returns false when paths don’t match

## getUserName function

- Returns the name from the user object in storage

- Returns null if no user exists in storage

## End-to-End Tests (Playwright)

## Login

- User can successfully log in with valid credentials from .env

- User sees an error message with invalid credentials

## Navigation

- Navigates to the home page

- Waits for the venue list to load

- Clicks the first venue

- Verifies that the venue details page contains the heading “Venue details”

## Code Quality

- ESLint ensures coding standards and handles globals used in test files

- Prettier formats code consistently

- Husky runs pre-commit hooks to lint and format staged files automatically

## Notes

- Make sure .env is in .gitignore to avoid committing credentials.

- Use .env.example as a template for required environment variables.
