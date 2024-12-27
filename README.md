
Here's a structured README.md file for your project:

# GadgetHaven
     Welcome to GadgetHaven, your go-to online store for the latest tech gadgets! This platform offers a sleek, user-friendly shopping experience, featuring a variety of gadgets with easy browsing, filtering, and purchasing options. GadgetHaven is built with React and Tailwind CSS, leveraging advanced React concepts to provide a dynamic, responsive, and highly interactive e-commerce platform.

Table of Contents

## Live Website Link :  https://sharmin-shopna8.surge.sh/

## Requirement Document Link 
   Visit the live website here: [GadgetHaven] (https://drive.google.com/file/d/1JcShVgr6tCdAmmpBxZdwYJUOBUMqqGim/view)

## Project Overview
 1. Technologies Used
 2. React Concepts
 3. Features
 4. Page Structure
 5. How It Works
 7. Future Enhancements
 8. Explore GadgetHaven in action here: GadgetHaven Demo

### Project Overview
GadgetHaven aims to deliver a seamless e-commerce experience for users to browse, filter, and purchase their favorite gadgets. This project emphasizes a clean and functional UI along with robust state management to create a responsive and immersive shopping experience.

### Technologies Used
1. React: For building the interactive UI and handling state.
2. React Router: For efficient navigation and page routing.
3. Context API: Manages global state (cart and wishlist) across components.
4. Tailwind CSS: Used for responsive, modern styling.
5. JavaScript (ES6+): Implements logic and interactivity.
React Concepts
6. Functional Components: Modular and reusable components for each feature and page.
7. State Management: useState for local component states and Context API for global state.
8. React Router: Provides smooth navigation across multiple pages.
9. useEffect: Handles side effects, including fetching data and triggering re-renders based on dependencies.
10. Context API and LocalStorage: Manages shared data (cart, wishlist) across components, ensuring a consistent and up-to-date view of items.
Features
11. Responsive Design: The layout adapts for desktops, tablets, and mobile devices.
12. Category Filter: Sidebar filter for quick access to product categories (e.g., Smartphones, Computers).
13. Shopping Cart: Add, remove, and sort items in the cart, with a maximum value limit of $1000.
14. Wishlist: Save products for later and easily transfer items to the cart.
15. Order Confirmation: Confirms purchases with a modal, displaying a congratulatory message.
Product Sorting and Filtering: Filter products by price and category.
16. 404 Page: Custom error page for unrecognized routes.
Page Structure

### Home Page:

Features a banner linking to the product dashboard.
Highlights popular products in a grid layout with category filters.
Dashboard:

Displays a list of products organized by categories.
Each product card has details like name, price, and an option to view more information.


### Shopping Cart:

Displays items added to the cart with options to sort and view total cost.
Limits further purchases if the total exceeds $1000.


### Wishlist:

Allows users to save items for later and move items to the cart directly.


### Statistics Page:

Shows insights into products, such as most expensive items and price-rating correlations.

### 404 Page:

Displays a custom error message for invalid or unrecognized routes.
## How It Works:

### Cart and Wishlist
 1. Add to Cart: Adds products to the cart using the Context API, with immediate updates to the cart’s total.
 2. Remove from Cart: Updates the total cost and state across all pages.
 3. Sorting by Price: Allows sorting cart items by descending price.
 4. Cart Limit: Prevents adding items if the total price exceeds $1000, with a notification to users.
 Wishlist
 5. Add to Wishlist: Save items for later with a single click.

6. Move to Cart: Transfer items from wishlist to cart, observing cart limitations.
7. Remove from Wishlist: Option to remove items individually.
Confirmation Modal
After purchasing, users see a modal confirming the transaction, with a redirect to the homepage and an empty cart for the next visit.

8. Future Enhancements
 Improved Filtering: Add multi-criteria filtering options.
 Product Reviews: Integrate a review system for user feedback.
 Pagination: Break down large product lists for faster load times.
 Enhanced Animations: Add subtle animations for a more engaging experience.


