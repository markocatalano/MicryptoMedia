import React from 'react'
import { useState } from 'react'
import { db } from '../../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp } from 'firebase/firestore'
import DatePicker from 'react-date-picker'


export const Formulario = () => {

  const { productCartList, TotalProductos } = useContext(CartContext)
  const [idOrder, setIdOrder] = useState("")

  const sendOrder = (e) => {

    e.preventDefault()
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        mail: e.target[2].value
      },
      items: productCartList,
      total: TotalProductos(),
      Fecha: Date(Timestamp)
      
    }

    const queryRef = collection(db, "orders");
    addDoc(queryRef, order).then(respuesta => setIdOrder(respuesta.id))

    console.log(order)

  }


  return (
    <form className='p-4' onSubmit={sendOrder}>

      <div className='d-flex flex-column justify-content-center rounded rounded shadow p-3 mb- bg-white rounded'>
        <span className='p-2'>Formulario de Compra</span>
        <hr></hr>
        <div className="col-md-5 py-2 px-4">
          <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="col-md-5 py-2 px-4">
          <input type="text" className="form-control" placeholder="Apellido" />
        </div>
        <div className="col-md-5 py-2 px-4">
          <input type="number" className="form-control" placeholder="Telefono" />
        </div>
        <div className="col-md-5 pb-4 pt-2 px-4">
          <input type="email" className="form-control" placeholder="e-mail" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Enviar</button>
    </form>

  )
}
