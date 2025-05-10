import { Link, useNavigate } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useCart } from "../context/CartContext"
import Price from "../components/Price"
import "./styles/CartPage.scss"

export default function CartPage() {
  const { items, inc, dec, remove, totalCents } = useCart()
  const navigate = useNavigate()

  
  const main = Math.floor(totalCents / 100)
  const fractional = totalCents % 100

  if (items.length === 0) {
    return (
      <section className="cart-page cart-page--empty">
        <h1 className="cart-page__title">Your cart is empty 🛒</h1>
        <Link to="/" className="btn btn--accent">
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <h1 className="cart-page__title">Cart</h1>

      <ul className="cart-page__list">
        {items.map((item : any) => (
          <CartItem
            key={item.id}
            item={item}
            onInc={inc}
            onDec={dec}
            onRemove={remove}
          />
        ))}
      </ul>

      <footer className="cart-page__summary">
        <div className="cart-page__total">
          <span>Total:</span>
          <Price main={main} fractional={fractional} />
        </div>
        <button className="btn btn--accent" onClick={() => navigate("/checkout")}>
          Checkout →
        </button>
      </footer>
    </section>
  )
}
