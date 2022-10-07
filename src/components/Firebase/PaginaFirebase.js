import React, { useEffect } from 'react'
import {doc, getDoc } from "firebase/firestore"
import { db } from '../../utils/firebase'


export const PaginaFirebase = () => {

    //Metodo para obtener un documento:
    useEffect(() => {
        const getDocumento = async () => {
            const query = doc(db, "items", "E0jH71xz6T60Q3Cz9DHi");
            const respuesta = await getDoc(query);
            const documento = {
                ...respuesta.data(),
                id: respuesta.id
            }
            console.log("Producto", documento)
        }
        getDocumento()
    }, [])


    return (
        <div>PaginaFirebase</div>
    )
}
