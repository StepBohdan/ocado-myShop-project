import type { Product } from "../types/Product";
import Price from "./Price"
import "./styles/ProductCard.scss"
import Cart from "../assets/cart.svg?react"


type Props = { product: Product; onAdd: (id: number) => void }

export default function ProductCard({ product, onAdd }: Props) {
  return (
    <li className="product-card">
        <h3 className="product-card__title">{product.name} -</h3>

      <footer className="product-card__footer">
        <Price {...product.price} />
   
        <button
          className="product-card__add-btn"
          onClick={() => onAdd(product.id)}>
          <Cart style={{ width: 12, height: 12 }}/>
        </button>
      </footer>
    </li>
  )
 
}
