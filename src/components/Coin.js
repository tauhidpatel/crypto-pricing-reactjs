import React from "react";

const Coin = ({ name, icon, price, symbol, cap, volume }) => {
    return (
        <div className="coin--cointainer">
        <img src={icon} />
        <h3>{name}</h3>
        <h3>Price: {price}</h3>
        <h3>Symbol: {symbol}</h3>
        <h3>Cap: {cap}</h3>
        <h3>Volume: {volume}</h3>
        </div>
    )
};

export default Coin;