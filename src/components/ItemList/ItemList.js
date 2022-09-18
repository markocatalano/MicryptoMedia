import React from 'react'
import { Item } from '../Item/Item'



export const ItemList = ({remera}) => {
  return (
      <div className='p-2'>
        <Item imagen={remera.imagen} nombre={remera.nombre} precio={remera.precio} id={remera.id} stock={remera.stock}></Item>
      </div>
    
  )
}
