import React, { useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Coin from "./Coin";



function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then((res) => {
        setCoins(res.data);  
      })
      .catch(err => {
      console.log(err);
    })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div className="App">
      <div className="d-flex justify-content-between align-items-center p-2">
        <h1>Coingecko App</h1>
        <form>
          <input type="text" placeholder="search coin" className="coin_input" onChange={ handleChange}/>
        </form>
      </div>

        <Coin coins={filteredCoins}/>
      
    </div>
  );
}

export default App;
