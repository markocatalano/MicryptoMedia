import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {


    const { getTotalProducts } = useContext(CartContext);

    return (
        <div>
            <img style={{ margin: '10px' }} src="../.././carrito.png" alt="" width="35" height="30" className="d-inline-block align-text-top" /><img />
            <span className="badge badge-light">{getTotalProducts()}</span>
        </div>

    )
}

export default CartWidget
