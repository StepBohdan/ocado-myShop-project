/** Денежная величина в формате 12,34 zł */
export interface Price {
  /** Целая часть, например 12 */
  main: number
  /** Дробная часть, например 34 ( → ".34") */
  fractional: number
  /** ISO-4217 кодификация валюты (по умолчанию PLN) */
  currency: string
}

/** Единица каталога (отображается в ProductCard) */
export interface Product {
  /** Уникальный идентификатор (UUID, Snowflake и т. д.) */
  id: number
  /** Маркетинговое название */
  name: string
 
  /** Цена за единицу товара */
  price: Price
}
