import { useEffect, useState } from 'react';
import { Remeras } from '../Arreglo/Arreglo';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer=()=>{

    console.log('parametros', useParams());
    
    const {tipoProducto}=useParams();

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
                if (tipoProducto === undefined) {
                    setRemeras(listado);
                    console.log('listado', listado)
                }
                else {
                    const listaFiltrada = listado.filter(item => item.categoria === tipoProducto);
                    console.log('listaFiltrada', listaFiltrada)
                    setRemeras(listaFiltrada);
                    console.log('listado', listado)
                }
            }
            catch (error) {
                console.log('Hubo un error')
            }
        }
        funcionAsincrona();
    },[tipoProducto])

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

