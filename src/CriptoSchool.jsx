import {useState, useEffect} from "react";
import {Route, Routes, Link} from "react-router-dom";

function MuntComponent() {
    const [coins, setCoins] = useState([]);
    const [sortOption, setSortOption] = useState("top"); // useState("price-up") standaard sort

    useEffect(() => {   // 1x uitvoeren bij laden
        fetch("https://api.coincap.io/v2/assets") // API ophalen
            .then((httpResponse) => httpResponse.json()) // JSON omzetten
            .then((data) => {
                setCoins(data.data); // Opslaan in coins state
            });
    }, []);

    const getSortedCoins = () => {
        return [...coins].sort((a, b) => {
            if (sortOption === "price-low") return a.priceUsd - b.priceUsd;
            if (sortOption === "price-up") return b.priceUsd - a.priceUsd;
            if (sortOption === "name-low") return a.name.localeCompare(b.name);
            if (sortOption === "name-up") return b.name.localeCompare(a.name);
            if (sortOption === "top") return a.rank - b.rank;

            return 0;
        });
    };

    return (
        <>
            <div>


                <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                    <option value="price-low">Prijs: Laag → Hoog</option>
                    <option value="price-up">Prijs: Hoog → Laag</option>
                    <option value="name-low">Naam: A → Z</option>
                    <option value="name-up">Naam: Z → A</option>
                    <option value="top">Naam: top</option>
                </select>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {getSortedCoins().map((coin) => {
                        const percentChange = parseFloat(coin.changePercent24Hr).toFixed(2);
                        const percentChangeClass = percentChange > 0 ? 'text-green-500' : 'text-red-500';

                        const prijs = parseFloat(coin.priceUsd).toFixed(2);

                        return (
                            <div
                                key={coin.id}
                                className="relative p-6 h-full rounded-xl overflow-hidden"
                                style={{
                                    border: '4px solid transparent',
                                    borderRadius: '20px',
                                    background: `linear-gradient(to right, #090400, #090400), linear-gradient(161deg, rgba(255,223,86,1) 0%, rgba(255,135,53,1) 20%, rgba(9,4,0,1) 50%, rgba(255,135,53,1) 80%, rgba(255,223,86,1) 100%)`, // Jouw kleuren
                                    backgroundClip: 'padding-box, border-box',
                                    backgroundOrigin: 'padding-box, border-box',
                                }}
                            >
                                <h2 className="gradient-oranje-geel">
                                    <Link to={`/coin/${coin.id}`} className="text-xl font-bold">
                                        {coin.name}
                                    </Link>
                                </h2>

                                <h2>Prijs: ${prijs}</h2>
                                <h2 className={percentChangeClass}>{percentChange}%</h2>
                            </div>


                        );
                    })}
                </div>


            </div>
        </>
    )
        ;
}

export default MuntComponent;
