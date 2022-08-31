import { useEffect, useState } from "react";
import { Remeras } from "../Arreglo/Arreglo";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer =()=>{

    const [remera2, setRemera] = useState([]);

    const arregloRemeras=()=>{
        return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(Remeras[0])
                },2000)
        })
    }


    useEffect(()=>{
        const funcionAsinc= async ()=>{
            try {
                const listRemeras= await arregloRemeras()
                setRemera(listRemeras);
                console.log(listRemeras)
            } catch (error) {
                console.log('hubo un problema')
            }
        }

        funcionAsinc();

    })

    return(
        <div className='d-flex flex-row m-5'>

            <ItemDetail remeraDetalle={remera2}></ItemDetail>

        </div>
    )


}

