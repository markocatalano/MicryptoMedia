import React from 'react'
import { Link } from "react-router-dom";

export const Item = ({imagen, nombre, precio, id}) => {

 
      

    return (
        <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                <Link to={`/item/${id}`} style={{ textDecoration: 'none', color: "rgb(95, 95, 95)"}}>
                    <img className="card-img-top" src={imagen} alt="card"></img>
                    <h5 className="card-title">{nombre}</h5>
                    <h5 className="card-title">${precio}</h5>
                    <button className="btn btn-warning">Mas Detalles</button>
                </Link>
                </div>
            </div>
            
    )

}


