import {createContext, useContext, useEffect, useMemo, useReducer} from "react"
import type {ReactNode} from "react";
import type {Product} from "../types/Product"
import type {CartItem} from "../types/CartItem"

const STORAGE_KEY = "cart"

function toCents({ main, fractional }: Product["price"]) {
  return main * 100 + fractional
}


// storage
type State = CartItem[]


// actions
type Action = 
| { type: "ADD"; product: Product } 
| { type: "INC"; id: number } 
| { type: "DEC"; id: number } 
| { type: "REMOVE"; id: number } 
| { type: "CLEAR" }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const idx = state.findIndex((i) => i.id === action.product.id)
      if (idx >= 0) {
        const copy = [...state]
        copy[idx].qty += 1
        return copy
      }
      return [...state, { ...action.product, qty: 1 }]
    }

    case "INC":
      return state.map((item) => item.id === action.id ? { ...item, qty: item.qty + 1 } : item)

    case "DEC":
      return state.map((item) => item.id === action.id ? { ...item, qty: Math.max(1, item.qty - 1) } : item).filter((id) => id.qty > 0)

    case "REMOVE":
      return state.filter((item) => item.id !== action.id)

    case "CLEAR":
      return []

    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  totalQty: number
  totalCents: number
  add: (p: Product) => void
  inc: (id: number) => void
  dec: (id: number) => void
  remove: (id: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)



// cart-provider
function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, [], (): State => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? (JSON.parse(raw) as State) : []
      } catch {
        return []
      }
    },
  )

  // set items
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])




  // quantity of items
  const totalQty = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items],
  )

  const totalCents = useMemo( () => items.reduce((sum, i) => sum + toCents(i.price) * i.qty, 0,), [items])

  // export items
  const value: CartContextValue = {
    items,
    totalQty,
    totalCents,
    add: (p) => dispatch({ type: "ADD", product: p }),
    inc: (id) => dispatch({ type: "INC", id }),
    dec: (id) => dispatch({ type: "DEC", id }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    clear: () => dispatch({ type: "CLEAR" }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


// custom hook
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within <CartProvider>")
  }
  return ctx
}

export { CartProvider }
