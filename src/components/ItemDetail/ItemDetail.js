import React from 'react'
import { useState } from 'react';

export const ItemDetail = ({ remeraDetalle }) => {

    const [contador, setContadores] = useState(0);

    const incrementar=()=>{ 
            setContadores(contador+1)
        
    }

    const decrementar=()=>{
            setContadores(contador-1)
    }

    return (

        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center">
                                <img style={{ height: '400px', width: '400px' }} src={remeraDetalle.imagen} class="img-responsive mt-5 p-2 border rounded"></img>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h2 class="box-title mt-5">{remeraDetalle.nombre}</h2>
                            <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                            <h2 class="mt-5">
                                {remeraDetalle.precio}<small class="text-success">(36%off)</small>
                            </h2>
                            <button type="button" className="btn btn-primary m-1" onClick={incrementar}>+</button>
                            <span className="border rounded p-2">{contador}</span>
                            <button type="button" className="btn btn-info m-1" onClick={decrementar}>-</button>
                                <div>
                                    <button className="btn btn-success m-1" onClick={''}>Agregar al Carrito</button>
                                </div>
                            <h3 class="box-title mt-5">Importante</h3>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-check text-success"></i>Envios a domicilio a todo el pais</li>
                                <li><i class="fa fa-check text-success"></i>Descuentos por compras mayor a 10 unidades</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
