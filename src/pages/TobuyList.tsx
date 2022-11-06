import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tobuy } from '../interfaces/Tobuy'
import TobuyCard from '../components/TobuyCard'

function TobuyList() {
  const [tobuyList] = useState<Tobuy[]>([
    {
      title: 'holololo',
      link: 'halmeoni',
      description: 'ddd',
    },
  ])
  return (
    <div className="card-list">
      <div>
        <Link to="/add">+</Link>
      </div>
      {tobuyList.map((tobuy: Tobuy) => (
        <TobuyCard
          title={tobuy.title}
          link={tobuy.link}
          description={tobuy.description}
        />
      ))}
    </div>
  )
}

export default TobuyList
