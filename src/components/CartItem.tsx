import type { CartItem as TCartItem } from "../types/CartItem"
import Price from "./Price"
import "./styles/CartItem.scss"


type Props = {
  item: TCartItem
  onInc: (id: number) => void
  onDec: (id: number) => void
  onRemove: (id: number) => void
}

export default function CartItem({ item, onInc, onDec, onRemove }: Props) {

  

  return (
    
    <li className="cart-item">
  
      <div className="cart-item__content">
      
        <h4 className="cart-item__title">{item.name}</h4>

        <footer className="cart-item__footer">
          <div className="cart-item__qty-controls">
            <button onClick={() => onDec(item.id)}>
             -
            </button>
            <span>{item.qty}</span>
            <button onClick={() => onInc(item.id)}>
             +
            </button>
            <Price
            main={item.price.main * item.qty}
            fractional={item.price.fractional * item.qty}
          />
          </div>

          
        </footer>
      </div>

      <button
        className="cart-item__remove"
        aria-label="Remove item"
        onClick={() => onRemove(item.id)}
      >
       X
      </button>
    </li>
  )
}
