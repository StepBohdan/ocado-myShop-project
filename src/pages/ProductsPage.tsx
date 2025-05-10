import products from "../assets/production.json"
import ProductCard from "../components/ProductCard"
import { useCart } from "../context/CartContext"
import type { Product } from "../types/Product"
import "./styles/ProductsPage.scss"

export default function ProductsPage() {
  const { add } = useCart()

  return (
    <section className="products-page">
      <h1 className="products-page__title">Products</h1>

      <div className="products-page__list">
        {(products as Product[]).map((p) => (
          <ProductCard key={p.id} product={p} onAdd={() => add(p)} />
        ))}
      </div>
    </section>
  )
}
