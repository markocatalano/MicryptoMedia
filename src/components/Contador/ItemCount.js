
import { useState } from "react"




export const ItemCount=({stock, inicial, agregarCarrito, imagen, nombre})=>{

    const [contador, setContador] = useState(inicial);

    const incrementar=()=>{ 
        if (contador<stock){
            setContador(contador+1)
            
        }
    }

    const decrementar=()=>{
        if (contador>0){
            setContador(contador-1)
        }
    }

    return(
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={imagen} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <button type="button" className="btn btn-primary m-1" onClick={incrementar}>+</button>
                    <span className="border rounded p-2">{contador}</span>
                    <button type="button" className="btn btn-info m-1" onClick={decrementar}>-</button>
                    <div id="botonComprar">
                        <button className="btn btn-success m-1" onClick={() => (agregarCarrito(contador)) }>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}