import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const CartWidget=()=>{


const {getTotalProducts}=useContext(CartContext);

    return(
        <>
        <img style={{margin: '10px'}} src="../.././carrito.png" alt="" width="35" height="30" className="d-inline-block align-text-top"/>{getTotalProducts()}<img/>
        </>
    )
}

export default CartWidget
