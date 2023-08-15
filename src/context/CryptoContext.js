import { createContext, useState } from "react";

//Создаем context object crypto
export const CryptoContext=createContext({})

//Создание компонента provider 
export const CryptoProvder=({children})=>{
const [cryptoData,setCryptoData]=useState();

const getCryptoData = async()=>{
    try {
        const data = await fetch(``)
    } catch (error) {
        console.log(error)
    }
}
    return(
        <CryptoContext.Provider value={{  }}>
            {children}    
        </CryptoContext.Provider>

    )
}
