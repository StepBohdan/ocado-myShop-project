import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import Price from "../components/Price"
import "./styles/CheckoutPage.scss"

export default function CheckoutPage() {
  const { items, clear, totalCents } = useCart()

  const main = Math.floor(totalCents / 100)
  const fractional = totalCents % 100

  function placeOrder() {
    localStorage.setItem("order", JSON.stringify(items))
    clear()

    window.location.replace(`${import.meta.env.BASE_URL}order-confirmation.html`)
  }



  return (
    <section className="checkout-page">
      <h1 className="checkout-page__title">Checkout</h1>

      <div className="checkout-page__table">
   
        <header className="checkout-page__head">
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
        </header>

        {items.map((item) => (
          <div key={item.id} className="checkout-page__row">
            <span>{item.name}</span>
            <span>{item.qty}</span>
            <span>
              <Price
                main={item.price.main * item.qty}
                fractional={item.price.fractional * item.qty}
              />
            </span>
          </div>
        ))}
       

        <footer className="checkout-page__foot">
          <span>Total:</span>
          <Price main={main} fractional={fractional} />
        </footer>
      </div>

      <div className="checkout-page__actions">
        <Link to="/cart" className="btn">
          ← Back to cart
        </Link>
        <button className="btn btn--accent" onClick={placeOrder}>
          Złóż Zamówienie
        </button>
      </div>
    </section>
  )
}
