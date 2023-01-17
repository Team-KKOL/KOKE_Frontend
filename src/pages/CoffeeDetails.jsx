import React from 'react'
import { useParams } from 'react-router-dom'

export default function CoffeeDetails() {

  let {id} = useParams();
  
  return (
    <div>CoffeeDetails</div>
  )
}
