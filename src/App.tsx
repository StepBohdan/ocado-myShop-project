import { BrowserRouter  as Router, Routes, Route, NavLink } from "react-router-dom"
import { CartProvider, useCart } from "./context/CartContext"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage.tsx"
import CheckoutPage from "./pages/CheckoutPage.tsx"
import Cart from "./assets/cart.svg?react"
import "./App.scss"



function Navbar() {
  const { totalQty } = useCart()   

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          myShop
        </NavLink>
        <div className="navbar__links">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/cart">
          <Cart  style={{ width: 15, height: 15 }}/>
          {totalQty > 0 && <span className="navbar__badge">{totalQty}</span>}
          </NavLink>  
        </div>
        
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Router basename="/ocado-myShop-project">
        <Navbar />
        <main className="page">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  )
}
