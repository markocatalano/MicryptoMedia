import { useEffect, useState } from 'react';
import media from '../.././assets/media.jpg';
import { Remeras } from '../Arreglo/Arreglo';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer=(props)=>{

    const [remeras, setRemeras] = useState([]);

    const listadoRemeras =()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(Remeras)
            }, 2000);
                
        })
    }

    useEffect(()=>{
        const funcionAsincrona= async()=>{
            try {
                const listado = await listadoRemeras()
                setRemeras(listado);
                console.log('listado', listado)
            }
            catch (error) {
                console.log('Hubo un error')
            }
        }
        funcionAsincrona();
    },[])

    return(
        <div className='d-flex flex-row m-5'>
            {
                remeras.map((remeraCrypto)=>{
                    return(
                            <ItemList remera={remeraCrypto}></ItemList>    
                    )
                })
            }
        </div>
    )
}

