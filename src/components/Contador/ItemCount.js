
import { useState } from "react"


export const ItemCount=({stock, inicial, agregarCarrito})=>{


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


    return (
        <div>

            <button type="button" className="btn btn-primary m-1" onClick={incrementar}>+</button>
            <span className="border rounded p-2">{contador}</span>
            <button type="button" className="btn btn-info m-1" onClick={decrementar}>-</button>
            <button className="btn btn-success m-1" onClick={() => agregarCarrito(contador)}>Agregar al Carrito</button>

        </div>

    )
}