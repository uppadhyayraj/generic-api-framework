# Generic API Framework

This project is a generic API testing framework built using Playwright. It provides a base class for making API requests and specific classes for interacting with user-related endpoints.


## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running Tests

To run the tests, use the following command:
```sh
npx playwright test
```
## Configuration
The Playwright configuration is located in playwright.config.ts. You can update the baseURL and other settings as needed.

## Logging
Logging is handled using pino. The logger configuration can be found in utils/logger.ts.


## License
This project is licensed under the ISC License.
