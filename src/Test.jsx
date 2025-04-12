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
        <div className="bg-[#131313] p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#FFDF56] to-[#FF8A43] bg-clip-text text-center mb-6">
                {coin.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF8A43]  ">
                    <h3 className="font-semibold text-lg text-[#131313]">Prijs:</h3>
                    <p className="text-xl text-[#FF8A43]">${prijs}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF8A43]  ">
                    <h3 className="font-semibold text-lg text-[#131313]">Symbol:</h3>
                    <p className="text-xl text-[#FF8A43]">{coin.symbol}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF8A43]  ">
                    <h3 className="font-semibold text-lg text-[#131313]">Rank:</h3>
                    <p className="text-xl text-[#FF8A43]">{coin.rank}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF8A43]  ">
                    <h3 className="font-semibold text-lg text-[#131313]">Marktkapitalisatie:</h3>
                    <p className="text-xl text-[#FF8A43]">${parseFloat(coin.marketCapUsd).toFixed(2)}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF8A43]  ">
                    <h3 className="font-semibold text-lg text-[#131313]">Volume (24h):</h3>
                    <p className="text-xl text-[#FF8A43]">${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF8A43]  ">
                    <h3 className="font-semibold text-lg text-[#131313]">Supply:</h3>
                    <p className="text-xl text-[#FF8A43]">{parseFloat(coin.supply).toFixed(0)}</p>
                </div>
            </div>
        </div>
    );



}

export default CoinDetail;
