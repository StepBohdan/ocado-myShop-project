

# 🛒 Ocado MyShop Project (Bohdan_Stepanenko_Web_Wrocław)

**Ocado MyShop** is a lightweight application built with **React + Vite**.  
It allows users to browse products, manage a cart, and place an order with a clear.

This project was created as part of a recruitment task. It emphasizes clarity, state separation, modern practices (hooks, Context API), and production-aware deployment ([GitHub Pages](https://stepbohdan.github.io/ocado-myShop-project/)).

---

## 📌 What does it do?

- Displays a list of products with name and price
- Allows users to add/remove products to/from the cart
- Lets users proceed to checkout and see a summary of their cart
- After confirmation, the user is redirected to a **static HTML confirmation page** with:
  - A message confirming order placement
  - A detailed summary of what was ordered
  - A link back to the store to start a new order

---
## 🤔 Why this structure?

### ✅ Global cart state via `Context + useReducer`

The cart is stored using React Context + Reducer pattern because:

- It centralizes all state logic in one place
- It supports complex actions (`ADD`, `INC`, `DEC`, `REMOVE`, `CLEAR`)
- Reducers make the app easier to scale and test

### ✅ Persistence with `localStorage`

The cart and order confirmation are stored in `localStorage`, allowing:

- Data to survive refreshes
- Smooth transition from SPA to static confirmation page

### ✅ Static confirmation page

The order confirmation page is outside the React app (`public/order-confirmation.html`), and I chose this because:

- It shows that I'm able to handle cross-boundary communication using `localStorage`
- It simulates a real-world case where checkout/confirmation is sometimes handled by a separate system

### ✅ Clear separation of responsibilities

The application is divided into sections:

- `src/components/` – reusable UI components such as `CartItem`, `Price`, `ProductCard`
- `src/pages/` – page-level views: `ProductsPage`, `CartPage`, and `CheckoutPage`
- `src/context/CartContext.tsx` – centralized state and general logic for the cart
- `src/styles/` – modular SCSS styling for layout, components, and responsive design
- `public/` – static assets and standalone HTML files

---

## 💻 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [SCSS (Sass)](https://sass-lang.com/)

---

## 🚀 How to run the app locally

### 1. Clone the repository
```bash
git clone https://github.com/StepBohdan/ocado-myShop-project.git
```
### 2. Change directory 
```bash
cd ocado-myShop-project
```

### 3. Install dependencies
```bash
npm install
```
### 4. Run the development server
```bash
npm run dev
```
The server will be availiable on:
http://localhost:5173/

### ! Build for production
```bash
npm run build
npm run preview
```

### 📌 Conclusion
This project demonstrates ability to:

1. Structure and isolate application logic

2. Use modern React APIs efficiently (Context, Hooks, Reducer)

3. Work around SPA limitations

4. Build hybrid applications (SPA + static HTML)

The project is optimized for clarity, reusability, and clean code.

**I hope my understanding of the code is similar to what you're looking for.** 😃

### 👤 Author
[Bohdan Stepepanenko](https://github.com/StepBohdan)
