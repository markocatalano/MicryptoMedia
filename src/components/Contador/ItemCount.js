
import { useState } from "react"
import { Link } from "react-router-dom";

export const ItemCount=({stock, inicial, agregarCarrito, imagen, nombre, precio, id})=>{


    const [contador, setContador] = useState(stock==0 ? inicial==0 : inicial);

    const incrementar=()=>{ 
        if (contador<stock){
            setContador(contador+1)
            
        }
    }

    const decrementar=()=>{
        if (contador>1){
            setContador(contador-1)
        }
    }


    return(
        
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                <Link to={`/item/${id}`}>
                    <img className="card-img-top" src={imagen} alt="Card image cap"></img>
                </Link>
                    <h5 className="card-title">{nombre}</h5>
                    <h5 className="card-title">{precio}</h5>
                    <button type="button" className="btn btn-primary m-1" onClick={incrementar}>+</button>
                    <span className="border rounded p-2">{contador}</span>
                    <button type="button" className="btn btn-info m-1" onClick={decrementar}>-</button>
                    <button className="btn btn-success m-1" onClick={() => (agregarCarrito(contador))}>Agregar al Carrito</button>
                </div>
            </div>
       
    )
}