import { useState } from 'react'
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
