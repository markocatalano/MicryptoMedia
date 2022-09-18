import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';


export const ItemListContainer=()=>{

    console.log('parametros', useParams());
    
    const {tipoProducto}=useParams();

    const [remeras, setRemeras] = useState([]);


    useEffect(()=>{
        const getData = async()=>{
            try{
            let queryRef=""

            if (tipoProducto === undefined) {
                 queryRef = collection(db, "items");
            }
            else {
                queryRef = query(collection(db, "items"),where("categoria", "==",tipoProducto))
            }
            //consulta o referencia a la base de datos:
            const respuesta= await getDocs(queryRef);
            const docs = respuesta.docs;
            const data= docs.map(doc=>{return {...doc.data(), id: doc.id}})
            setRemeras(data)
            
        } catch(error){
            console.log(error)
        }}
        getData()
    }, [tipoProducto])

    console.log("productos",remeras)
        
    return(
            <div className="d-flex flex-wrap my-4 mx-5">
                {
                    remeras.map((remeraCrypto) => {
                        
                        return (
                            <ItemList key={remeraCrypto.id} remera={remeraCrypto}></ItemList>
                        )
                    })
                }
            </div>
       
    )
}

