import React from 'react'
import { Item } from '../Item/Item'


export const ItemList = ({remera, agregarCarrito}) => {
  return (
          <div className='p-2'>
              <Item imagen={remera.imagen} nombre={remera.nombre} precio={remera.precio} agregarCarritos={agregarCarrito}></Item>
          </div>
   
      
  )
}
