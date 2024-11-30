# eA-Zy - everything A to Z for you

This is an e-commerce web application built with React, Redux Toolkit, and CSV file importing. The project allows users to browse products, add them to the cart, and complete purchases. Product data is imported via CSV files, and the application uses Redux Toolkit for state management.

## Features

- **CSV Importing**: Product data is imported using CSV files for easy data management.
- **User Login**: Users can log in to manage their account and view order history.
- **Redux Toolkit**: Utilized for state management to handle the cart and product listings.
- **Responsive Design**: The app is designed to work on both desktop and mobile devices.
- **Product Listing**: Displays products in a cards view sorted alphabetically when not logged in.
- **Product Listing**: Displays products from categories that the user has not purchased under Explore New and products from categories that the user has purchased from under What you love sorted alphabetically when logged in.
- **Shopping Cart**: Users can addproducts to  their cart and then checkout.
- **Order History**: Users can view a list of their previous orders in the orders section.

## Implemtation Logic
### 1. **CSV Importing**
- **Purpose**: Load product data dynamically from a CSV file.
- **Implementation**:
  - Parsed CSV files using a library  `papaparse` .
  - Dispatch the product data to the Redux store to make it accessible throughout the app.

---

### 2. **User Authentication**
- **Purpose**: Allow users to log in and access personalized features.
- **Implementation**:
  - Create a Redux slice for authentication to manage user state.
  - Store user details (e.g., ID,Name) in Redux .
  - Implement a basic or API & Interface login flow for credential validation.
  - Logout functionality clears user state.

---

### 3. **Product Listing**
- **Purpose**: Display products and Personalized product display based on previus ordery.
- **Implementation**:
  - Fetch product data from the Redux store .
  - Render products in a grid using a reusable product card component.
  - Apply product displaying condion by dispatching actions to update the product list dynamically.

---

### 4. **Shopping Cart**
- **Purpose**: View the user's selected products.
- **Implementation**:
  - Use Redux to store cart state, including items.
  - Provide a UI to view and checkout the cart.

---

### 6. **Order History**
- **Purpose**: Display a list of previous orders for logged-in users.
- **Implementation**:
  - Store order data in the Redux store or fetch it from teh CSV.
  - Render an orders list showing order ID, productName, Category.

---

### 7. **State Management (Redux Toolkit)**
- **Purpose**: Centralize and manage application state effectively.
- **Implementation**:
  - Use Redux Toolkit slices for features like products, cart, authentication, and orders.
  - Define actions and reducers to handle state updates.
  - Use selectors to efficiently retrieve state in components.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dharanidharan9791/E-Commerce.git
2. View live in github pages:
   https://dharanidharan9791.github.io/E-Commerce/