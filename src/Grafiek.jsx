import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from 'recharts';

const Grafiek = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets")
            .then((httpResponse) => httpResponse.json())
            .then((data) => {
                let assets = data.data.map((coin) => ({
                    id: coin.id, // Unieke id
                    value: parseFloat(coin.marketCapUsd), // PieChart verwacht "value"
                    label: coin.name, // PieChart verwacht "label"
                }));

                // Totale marktwaarde berekenen
                const totalMarketCap = assets.reduce((sum, coin) => sum + coin.value, 0);
                const threshold = totalMarketCap * 0.02; // 2%

                let smallCoins = [];
                let filteredAssets = assets.filter((coin) => {
                    if (coin.value < threshold) {
                        smallCoins.push(coin);
                        return false;
                    }
                    return true;
                });

                // "Overig" toevoegen als er kleine coins zijn
                if (smallCoins.length > 0) {
                    const otherTotal = smallCoins.reduce((sum, coin) => sum + coin.value, 0);
                    filteredAssets.push({ id: "overig", label: "Overig", value: otherTotal });
                }

                setCryptoData(filteredAssets);
            })
    }, []);

    // Optionele kleur voor de verschillende pie-segmenten
    const COLORS = [
        '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#8A2BE2', '#A52A2A', '#D2691E'
    ];

    // Functie om het percentage te berekenen
    const calculatePercentage = (value) => {
        const totalMarketCap = cryptoData.reduce((sum, coin) => sum + coin.value, 0);
        return ((value / totalMarketCap) * 100).toFixed(2);
    };

    return (
        <div>
            <PieChart width={500} height={400}>
                <Pie
                    data={cryptoData}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    labelLine={false} // Verwijder de pijlen
                    label={(entry) => `${entry.label}: ${calculatePercentage(entry.value)}%`} // Toon percentage
                >
                    {cryptoData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default Grafiek;
