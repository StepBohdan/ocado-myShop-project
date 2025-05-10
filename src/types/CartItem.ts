import type { Product } from "./Product"

/**
 * Позиция в корзине:
 * — наследует все поля Product,  
 * — добавляет количество (qty).
 *
 * Это упрощает рендеринг: CartItem уже содержит name, image, slug и т. д.
 */
export interface CartItem extends Product {
  /** Количество единиц данного товара в корзине */
  qty: number
}
