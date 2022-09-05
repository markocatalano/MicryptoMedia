import { useEffect, useState } from "react";
import { Remeras } from "../Arreglo/Arreglo";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



export const ItemDetailContainer =()=>{

    console.log('remera detalle', useParams());

    const {ProductoId}=useParams();

    

    const [remera2, setRemera] = useState([]);

    const arregloRemeras=()=>{
        return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(Remeras)
                },2000)
        })
    }


    useEffect(()=>{
        const funcionAsinc= async ()=>{
            try {
                const listRemeras= await arregloRemeras()
                const listaDetalle = listRemeras.filter(item => (item.id).toString() === ProductoId);
                setRemera(listaDetalle);
                console.log('listaDetalles', listaDetalle)

            } catch (error) {
                console.log('hubo un problema')
            }
        }

        funcionAsinc();

    },[ProductoId])

    return (
        <div>
            {
                remera2.map((productosCrypto) => {

                    return (
                        <div className="p-2">
                            <ItemDetail key={productosCrypto.id} productos={productosCrypto}></ItemDetail>
                        </div>
                    )
                })
            }
        </div>
    )
}


