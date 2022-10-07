import React, { useContext } from 'react'
import { ItemCount } from '../Contador/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({ producto }) => {

    const { addProduct, isInCard } = useContext(CartContext);


    const [productosAlCarrito, setProductosAlCarrito] = useState(0)

    const agregar = (productosPorComprar) => {

        const newProduct = { ...producto, quantity: productosPorComprar }
        console.log('newProduct', newProduct)
        addProduct(newProduct)
        isInCard(newProduct)


        setProductosAlCarrito(productosPorComprar)

        console.log("ProductosAgregadosItemDetail: ", productosPorComprar)

    }


    return (

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center">
                                <img style={{ height: '400px', width: '400px' }} alt="" src={producto.imagen} className="img-responsive mt-5 p-2 border rounded"></img>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h2 className="box-title mt-5 mb-3">{producto.nombre}</h2>
                            <form>
                                <p className='border rounded mx-4'>Talles Disponibles</p>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">XS</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">S</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" checked />
                                    <label className="form-check-label" for="inlineRadio3">M</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                                    <label className="form-check-label" for="inlineRadio4">L</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" disabled />
                                    <label className="form-check-label" for="inlineRadio5">XL(SIN STOCK)</label>
                                </div>
                            </form>
                            <h2 className="mt-3">
                                ${producto.precio}<small className="text-success">(36%off)</small>
                            </h2>
                            {
                                productosAlCarrito === 0 ?

                                    <ItemCount stock={producto.stock} inicial={1} agregarCarrito={agregar}></ItemCount>
                                    :
                                    <div>
                                        <Link to='/Carrito' >
                                            <button className="btn btn-warning m-1">Carrito de Compras</button>
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
