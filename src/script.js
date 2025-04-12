import { useState } from "react";

function Star() {
    const [isYellow, setIsYellow] = useState(false);
    return (
        <h1
            id="star"
            onClick={() => setIsYellow(!isYellow)}
            className={`cursor-pointer text-2xl ${isYellow ? "text-yellow-400" : "text-gray-400"}`}
        >
            ★
        </h1>
    );
}

export default Star;
