import { createContext, useState } from "react";



export const CartContext= createContext();

export const CartProvider = ({children})=>{ 

    const [productCartList, setProductCartList] = useState([]);
    

    const addProduct = (product) => {
        const cart = productCartList.find(e => e.id === product.id)
        if (cart !== undefined) {
            console.log('cart', cart)
            cart.quantity = (cart.quantity + product.quantity)
            console.log('cart cantidad', cart)
        }
        else {
            const newList = [...productCartList, product];
            console.log('newlist', newList)
            setProductCartList(newList)
        }
    }

    const deleteProduct =(id)=>{
        const newList2= productCartList.filter(element=>element.id!==id)
        setProductCartList(newList2)
    }

    const clear=()=>{
        const newList3=[]
        setProductCartList(newList3)
    }

    const isInCard=(newProduct)=>{
        const itemRepetido=productCartList.some(e=>e.id===newProduct.id)
        return(
            console.log("ITEM REPETIDO:", itemRepetido)
        )
    }


    const TotalProductos = ()=>{
        const totalProductos = productCartList.reduce((acc,item)=>acc + (item.quantity*item.precio), 0)
        if (totalProductos!==0){
        return (
            totalProductos
        )
        }
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity, 0)
        if (totalProducts!==0){
        return (
            totalProducts
        )
        }
    }



    return(
        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clear, getTotalProducts, TotalProductos, isInCard}}>
            {children}
        </CartContext.Provider>
    )
} 