import React from 'react'
import { Item } from '../Item/Item'
import { Link } from 'react-router-dom'


export const ItemList = ({remera}) => {
  return (

      <div className='p-2'>
        <Item imagen={remera.imagen} nombre={remera.nombre} precio={remera.precio} id={remera.id}></Item>
      </div>
    
   
      
  )
}
