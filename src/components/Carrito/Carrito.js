import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Carrito.css'

export const Carrito = () => {

  const {productCartList, deleteProduct, clear, TotalProductos} = useContext(CartContext)  

 

  return (
    <div className="container mt-5 p-3 rounded cart" >
      <div className="row no-gutters">
        <div className="col">
          <div className="product-details mr-2">
            <Link to='/' style={{ textDecoration: 'none', color: "rgb(95, 95, 95)" }}>
              <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Volver</span>
              </div>
            </Link>
            <hr />
            {
              productCartList.map(item => (
                <div key={item.id}>
                  <div className="d-flex justify-content-between align-items-center mt-2 p-1 items rounded shadow p-2 mb- bg-white rounded">
                    <div className="d-flex flex-row"><img className="rounded" src={item.imagen} alt="" width="150" />
                      <div className="mt-5"><span className="font-weight-bold d-block m-3">{item.nombre}</span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center"><span className="d-block m-3">Qty: {item.quantity}</span><span className="d-block m-3 font-weight-bold">Subtotal: ${parseInt(item.precio) * (item.quantity)}</span><button className="btn btn-warning m-2" onClick={() => deleteProduct(item.id)}>Eliminar</button></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      

      {

        productCartList.length === 0 ?
          <p>Carrito Vacio</p>
          :
          <div className="container mt-2 px-2 rounded cart" >
            <div className="d-flex justify-content-end align-items-end mt-2 p-2 items rounded shadow p-3 mb- bg-white rounded">
              <span>Total: ${TotalProductos()}</span>
            </div>
            <button onClick={() => clear()} className="btn btn-warning mt-3">Vaciar Carrito</button>
          </div>
      }
    </div>


  ) 
}

