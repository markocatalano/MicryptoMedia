import React from 'react'
import { useState } from 'react';

export const Item = ({imagen, nombre, precio, agregarCarrito}) => {

    const [contadores, setContadores] = useState(0);

    const incrementar=()=>{ 
            setContadores(contadores+1)
        
    }

    const decrementar=()=>{
            setContadores(contadores-1)
    }


  return (
      <div>
          <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={imagen} alt="Card image cap"></img>
              <div className="card-body">
                  <h5 className="card-title">{nombre}</h5>
                  <h5 className="card-title">{precio}</h5>
                  <button type="button" className="btn btn-primary m-1" onClick={incrementar}>+</button>
                  <span className="border rounded p-2">{contadores}</span>
                  <button type="button" className="btn btn-info m-1" onClick={decrementar}>-</button>
                 <div>
                        <button className="btn btn-success m-1" onClick={agregarCarrito}>Agregar al Carrito</button>
                </div>
              </div>
          </div>
      </div>
  )

}