import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CoinDetail() {
    const { id } = useParams();  // Haal de coin ID op uit de URL-params
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        // API-aanroep met de juiste URL voor de specifieke coin
        fetch(`https://rest.coincap.io/v3/assets/${id}?apiKey=b9b68c406308110830606e84a97cf1c8a1a1fe30ef4de74cb5d51af9b0137573`)

            .then((httpResponse) => httpResponse.json())
            .then((data) => {
                setCoin(data.data);  // Gegevens instellen
            })

    }, [id]);


    if (!coin) {
        return <h1 className="text-amber-500">⚠️PANIEK⚠️</h1>;
    }


    const prijs = parseFloat(coin.priceUsd).toFixed(2);

    return (
        <div>
            <h2 className='gradient-oranje-geel'>Coin: {coin.name}</h2>
            <h3>Prijs: ${prijs}</h3>
            <h3>Symbol: {coin.symbol}</h3>
            <h3>Rank: {coin.rank}</h3>

            <p>Marktkapitalisatie: ${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
            <p>Volume (24h): ${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</p>
            <p>Supply {parseFloat(coin.supply).toFixed(0)}</p>
        </div>
    );
}

export default CoinDetail;
