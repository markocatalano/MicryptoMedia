import React, { useEffect, useState } from 'react'
import {collection, getDocs, doc, getDoc} from "firebase/firestore"
import { db } from '../../utils/firebase'


export const PaginaFirebase = () => {
    const [arregloProductos, setArregloProductos] = useState([]);


/*     //Metodo para obtener un listado o una coleccion:
    useEffect(()=>{
        const getData = async()=>{
            //consulta o referencia a la base de datos:
            const query = collection(db, "items");
            const respuesta= await getDocs(query);
            const docs = respuesta.docs;
            //console.log("doc info", docs[0].data())
            //console.log("doc id", docs[0].id)
            const data= docs.map(doc=>{return {...doc.data(), id: doc.id}})
            setArregloProductos(data)
        }
        getData()
    }, []) */

    //Metodo para obtener un documento:
    useEffect(()=>{
        const getDocumento = async()=>{
            //consulta o referencia a la base de datos:
            const query = doc(db, "items","E0jH71xz6T60Q3Cz9DHi");
            const respuesta= await getDoc(query);
            const documento= {
                ...respuesta.data(),
                id: respuesta.id
            }
            console.log("Producto", documento)
            //setArregloProductos(data)
        }
        getDocumento()
    }, [])


  return (
    <div>PaginaFirebase</div>
  )
}
