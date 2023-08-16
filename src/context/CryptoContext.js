import { createContext, useLayoutEffect, useState } from "react";

//Создаем context object crypto
export const CryptoContext = createContext({});

//Создание компонента provider
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();

  const getCryptoData = async () => {
    try {
      const res = await fetch(
        `https://api.coincap.io/v2/assets?limit=150` // Добавлен протокол "https://"
      )
      //https://assets.coincap.io/assets/icons/{symbol}@2x.png
      const data= await res.json()
      console.log(data.data);
      setCryptoData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, []);
  return (
    <CryptoContext.Provider value={{ cryptoData }}>
      {children}
    </CryptoContext.Provider>
  );
};
