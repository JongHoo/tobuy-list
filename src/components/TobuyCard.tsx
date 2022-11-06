import React from 'react'
import { Tobuy } from '../interfaces/Tobuy'

function TobuyCard({ title, link, description }: Tobuy) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{link}</div>
      <div>{description}</div>
    </div>
  )
}

export default TobuyCard
