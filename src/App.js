import React, { useState, useEffect } from "react";
import Coin from "./components/Coin";

import Axios from "axios";

function App() {

  const [ listofCoins, setListOfCoins ] = useState([]);
  
  const [ searchWord, setSearchWord ] = useState("");


  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then((response) =>  {
        setListOfCoins(response.data.coins);
      });
  }, [])

  const filteredCoins = listofCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <>
    <div className="header">
      <input type="text"
      placeholder="enter a crypto"
      onChange={(event) => {
        setSearchWord(event.target.value);
      }}
      />
    </div>
    <div className="main">
     {filteredCoins.map((coin) => {
       return <Coin 
              name={coin.name}
              icon={coin.icon} 
              price={coin.price} 
              symbol={coin.symbol} 
              cap={coin.marketCap} 
              volume={coin.volume} 
              />
     })}
    </div>
    </>
  );
}

export default App;
