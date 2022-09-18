import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

//desafio aca reeemplazar promesas por Paginafirebase para llamar un documento, y en vez de pasar un id fijo, paso el id que solicita el usuario cuando aprieta. 
export const ItemDetailContainer =()=>{

    console.log('remera detalle', useParams());

    const {ProductoId}=useParams();

    const [remera2, setRemera] = useState([]);


    useEffect(() => {
        const getDocumento = async () => {
            try {
                //consulta o referencia a la base de datos:
                const query = doc(db, "items", ProductoId);
                const respuesta = await getDoc(query);
                const documento = {
                    ...respuesta.data(),
                    id: respuesta.id
                }
                console.log("Producto", documento)
                setRemera(documento)

            } catch (error) {
                console.log('hubo un problema')

            }
        }
        getDocumento()
    }, [ProductoId])


    return (
        <div className="p-2" key={remera2.id}>
            <ItemDetail key={remera2.id} producto={remera2}></ItemDetail>
        </div>
        )


 
     
}


