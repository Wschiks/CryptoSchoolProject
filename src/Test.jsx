import React, { useState, useEffect } from "react";





const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCryptos(data.data);
      });
  }, []);

  return (
    <div>
      <h1>Cryptocurrencies</h1>
      <ul>
        {cryptos.map(({ id, name, symbol, priceUsd }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>Symbool: {symbol}</p>
            <p>Prijs (USD): {priceUsd}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
