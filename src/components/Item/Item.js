import React from 'react'
import { useState } from 'react';
import { ItemCount } from '../Contador/ItemCount';
import { Link } from "react-router-dom";

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
        <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                <Link to={`/item/${id}`}>
                    <img className="card-img-top" src={imagen} alt="card"></img>
                </Link>
                    <h5 className="card-title">{nombre}</h5>
                    <h5 className="card-title">{precio}</h5>
                    <ItemCount stock={10} inicial={1} agregarCarrito={agregar} id={id}></ItemCount>  
                </div>
            </div>
            
    )

}


