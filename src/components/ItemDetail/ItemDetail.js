import React, { useContext } from 'react'
import { ItemCount } from '../Contador/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({ producto }) => {

    const {addProduct} = useContext(CartContext);


    const [productosAlCarrito, setProductosAlCarrito] = useState(0)

    const agregar=(productosPorComprar)=>{

        const newProduct={...producto, quantity: productosPorComprar}
        console.log('newProduct', newProduct)
        addProduct(newProduct)

        setProductosAlCarrito(productosPorComprar)

        console.log ("ProductosAgregadosItemDetail: ", productosPorComprar)

    }

    
    return (

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center">
                                <img style={{ height: '400px', width: '400px' }} src={producto.imagen} className="img-responsive mt-5 p-2 border rounded"></img>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h2 className="box-title mt-5">{producto.nombre}</h2>
                            <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                            <h2 className="mt-5">
                                {producto.precio}<small className="text-success">(36%off)</small>
                            </h2>
                            {
                                productosAlCarrito === 0 ?

                                    <ItemCount stock={producto.stock} inicial={1} agregarCarrito={agregar}></ItemCount>
                                    :
                                    <div>
                                    <Link to='/Carrito' >
                                        <button className="btn btn-success m-1">Finalizar Compra</button>
                                    </Link>
                                    <Link to='/' >
                                    <button className="btn btn-success m-1">Seguir Comprando</button>
                                    </Link>
                                    </div>      
                                    
                            }

                            <h3 className="box-title mt-5">Importante</h3>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-check text-success"></i>Envios a domicilio a todo el pais</li>
                                <li><i className="fa fa-check text-success"></i>Descuentos por compras mayor a 10 unidades</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
