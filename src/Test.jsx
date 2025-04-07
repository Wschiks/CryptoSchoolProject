import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CoinDetail() {
    const params = useParams();
    const [coin, setCoin] = useState({});

    useEffect(() => {
        // API-aanroep met de juiste URL
        fetch(`https://api.coincap.io/v2/assets/${params.id}`)
            .then((httpResponse) => httpResponse.json())
            .then((data) => {
                setCoin(data.data); // Coin-gegevens opslaan
            });
    }, [params.id]); // Alleen opnieuw ophalen wanneer params.id verandert

    const prijs = parseFloat(coin.priceUsd).toFixed(2);

    return (

        <div>
            <h2 className='gradient-oranje-geel'>Prijs: {coin.name}</h2>
            <h2>Prijs: ${prijs}</h2>
        </div>
    );
}

export default CoinDetail;
