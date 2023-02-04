import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../interfaces/Product'
import ProductCard from '../components/ProductCard'

function ProductList() {
  const [productList] = useState<Product[]>([
    {
      id: 'abcd',
      title: 'holololo',
      link: 'halmeoni',
      description: 'ddd',
      createdAt: '2023-01-23T12:22:57.326Z',
    },
  ])
  return (
    <div className="card-list">
      <div>
        <Link to="/add">+</Link>
      </div>
      {productList.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          link={product.link}
          createdAt={product.createdAt}
          description={product.description}
        />
      ))}
    </div>
  )
}

export default ProductList
