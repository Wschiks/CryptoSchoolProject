import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MuntComponent({ addToFavorites, favorites }) {
    const [coins, setCoins] = useState([]);
    const [sortOption, setSortOption] = useState("top");
    const [searchTerm, setSearchTerm] = useState("");

    // Haal de coins op bij het laden van de component
    useEffect(() => {
        fetch("https://rest.coincap.io/v3/assets?apiKey=b9b68c406308110830606e84a97cf1c8a1a1fe30ef4de74cb5d51af9b0137573")
            .then((res) => res.json())
            .then((data) => {
                setCoins(data.data); // Zet de opgehaalde coins in de state
            });
    }, []);

    // Zoek en sorteer de coins
    const getSortedCoins = () => {
        let filtered = coins;

        if (searchTerm) {
            filtered = filtered.filter((coin) =>
                coin.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return [...filtered].sort((a, b) => {
            if (sortOption === "price-low") return a.priceUsd - b.priceUsd;
            if (sortOption === "price-up") return b.priceUsd - a.priceUsd;
            if (sortOption === "name-low") return a.name.localeCompare(b.name);
            if (sortOption === "name-up") return b.name.localeCompare(a.name);
            if (sortOption === "top") return a.rank - b.rank;
            return 0;
        });
    };

    return (
        <div className="p-4">
            {/* Zoekbalk */}
            <input
                type="text"
                placeholder="Zoek een coin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 p-2 border rounded w-full"
            />

            <select
                onChange={(e) => setSortOption(e.target.value)}
                value={sortOption}
                className="mb-4 p-2 border rounded w-full"
            >
                <option value="price-low">Prijs: Laag → Hoog</option>
                <option value="price-up">Prijs: Hoog → Laag</option>
                <option value="name-low">Naam: A → Z</option>
                <option value="name-up">Naam: Z → A</option>
                <option value="top">Top</option>
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
                                background: `linear-gradient(to right, #090400, #090400), linear-gradient(161deg, rgba(255,223,86,1) 0%, rgba(255,135,53,1) 20%, rgba(9,4,0,1) 50%, rgba(255,135,53,1) 80%, rgba(255,223,86,1) 100%)`,
                                backgroundClip: 'padding-box, border-box',
                                backgroundOrigin: 'padding-box, border-box',
                            }}
                        >
                            <h2 className="gradient-oranje-geel">
                                <Link to={`/coin/${coin.id}`} className="text-xl linkie font-bold">
                                    {coin.name}
                                </Link>
                            </h2>
                            <h2>Prijs: ${prijs}</h2>
                            <h2 className={percentChangeClass}>{percentChange}%</h2>
                            <button
                                onClick={() => addToFavorites(coin)} // voegt toe aan de fav in app.jsx
                                className="text-2xl transition-transform duration-200 hover:scale-125"
                            >
                                {favorites.includes(coin.id) ? (
                                    <span className="text-yellow-400">★</span>
                                ) : (
                                    <span className="text-gray-400">☆</span>
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MuntComponent;
