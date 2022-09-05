import React from 'react'
import { useState } from 'react';

export const ItemDetail = ({ productos }) => {

    const [contador, setContadores] = useState(0);

    const incrementar=()=>{ 
            setContadores(contador+1)
        
    }

    const decrementar=()=>{
            setContadores(contador-1)
    }

    return (

        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center">
                                <img style={{ height: '400px', width: '400px' }} src={productos.imagen} className="img-responsive mt-5 p-2 border rounded"></img>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h2 className="box-title mt-5">{productos.nombre}</h2>
                            <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                            <h2 className="mt-5">
                                {productos.precio}<small className="text-success">(36%off)</small>
                            </h2>
                            <button type="button" className="btn btn-primary m-1" onClick={incrementar}>+</button>
                            <span className="border rounded p-2">{contador}</span>
                            <button type="button" className="btn btn-info m-1" onClick={decrementar}>-</button>
                                <div>
                                    <button className="btn btn-success m-1">Agregar al Carrito</button>
                                </div>
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
