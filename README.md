# Frontend for Product Search Application

## Overview

This is the frontend application for the Product Search Application. It is built using React.js and styled to be fully responsive with a mobile-first design approach.

## Features

- Search for products by name
- Filter products by brand, category, and price range
- Sort products by price and date added
- Pagination for efficient loading of products
- User authentication using Google and Email/Password via Firebase

## Setup

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/yourusername/product-search-frontend.git
    cd product-search-frontend
    ```

2.  Install dependencies:
    npm install

3.  Set up environment variables:

Create a .env file in the root directory.
Add your Firebase configuration:
Copy code
VITE_apiKey=""
VITE_authDomain=""
VITE_projectId=""
VITE_storageBucket=""
VITE_messagingSenderId=""
VITE_appId=""

VITE_IMGBB_API_KEY=""

VITE_API_URL=http://localhost:9000

4.  Start the server:
    npm run dev
5.  Open your browser and navigate to http://localhost:9000 to view the application.
