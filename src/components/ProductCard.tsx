import React from 'react'
import { Product } from '../interfaces/Product'

function ProductCard({ title, link, description }: Product) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{link}</div>
      <div>{description}</div>
    </div>
  )
}

export default ProductCard
