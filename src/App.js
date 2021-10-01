import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
// import CoinsTable from "./components/CoinsTable"

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        //make an api call
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        setCoins(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoins();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  //limiting display coins per page
  const lastCoinIndex = currentPage * coinsPerPage;
  const firstCoinIndex = lastCoinIndex - coinsPerPage;
  const currentCoins = filteredCoins.slice(firstCoinIndex, lastCoinIndex);

  //handleClick for pagination
  const handleClick = (pageNumber) => {
    if (pageNumber === "previous") {
      setCurrentPage(currentPage - 1);
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid text-center">
      <Navbar handleChange={handleChange} />
      {/* <CoinsTable coins={filteredCoins}/> */}
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={filteredCoins.length}
        paginate={handleClick}
      />
      <Coin coins={currentCoins} loading={loading} />
    </div>
  );
}

export default App;
