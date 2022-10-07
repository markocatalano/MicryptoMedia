import React from 'react'
import { useState } from 'react'
import { db } from '../../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'


export const Formulario = () => {

  const { productCartList, TotalProductos } = useContext(CartContext)
  const [idOrder, setIdOrder] = useState("")

  const sendOrder = (e) => {
    e.preventDefault()

    if (isNaN(e.target[0].value) === false) {
      alert('ingrese un nombre que contenga solo letras')

    }
    else if (isNaN(e.target[1].value) === false) {
      alert('ingrese un apellido que contenga solo letras')
    }
    else if (e.target[2].value.length !== 10) {
      alert('Ingrese un telefono que tenga 10 digitos')
    }
    else {

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

      Swal.fire({
        icon: 'success',
        title: `Felicitaciones ${order.buyer.name} tu compra se realizo con exito`,
        text: ` Nº de Orden: ${order.items[0].id}`,
      })
    }

  }


  return (
    <form className='p-4 formulario' onSubmit={sendOrder}>
      <div className='d-flex flex-column justify-content-center rounded rounded shadow p-3 mb- bg-white rounded'>
        <span className='p-2'>Formulario de Compra</span>
        <hr></hr>
        <div className="col-md-5 py-2 px-4">
          <input type="text" required className="form-control" placeholder="Nombre" />
        </div>
        <div className="col-md-5 py-2 px-4">
          <input type="text" required className="form-control" placeholder="Apellido" />
        </div>
        <div className="col-md-5 py-2 px-4">
          <input type="number" required className="form-control" placeholder="Telefono" />
        </div>
        <div className="col-md-5 pb-4 pt-2 px-4">
          <input type="email" required className="form-control" placeholder="e-mail" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Enviar</button>
    </form>

  )
}
