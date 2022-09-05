import React from 'react'
import { useState } from 'react';
import { ItemCount } from '../Contador/ItemCount';

export const Item = ({imagen, nombre, precio, id}) => {

 
    const [stockRenovado, setStockRenovado] = useState(0)

        const agregar=(productosAlCarrito)=>{
            
            if (productosAlCarrito === 10) {

                setStockRenovado(stockRenovado + 1)
                console.log('stock2', stockRenovado)

                if (stockRenovado === 1) {
                    console.log("no hay stock")
                }
            }
            else {
                setStockRenovado(productosAlCarrito-10)
                console.log("stock final", stockRenovado)
            }
            console.log('funcion agregar', productosAlCarrito);

        }
      

    return (
            <ItemCount stock={10} inicial={1} agregarCarrito={agregar} imagen={imagen} nombre={nombre} precio={precio} id={id}></ItemCount>
        
    )

}


