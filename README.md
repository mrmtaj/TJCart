# TJCart

A react-based e-commerce application.

![TJCart Home Page](./home_page.png)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher recommended)
- mpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/TJCart.git
    cd TJCart
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    - Copy `.env.example` to `.env`:
      ```bash
      cp .env.example .env
      ```
      (Or on Windows: `copy .env.example .env`)
    - Open `.env` and populate the values (e.g., your API keys).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) (or the port specified in your console) to view it in your browser.

The page will reload when you make changes.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.

## Technologies

- React
- React Router
- Context API & Redux (for state management)
- Bootstrap (for styling)
