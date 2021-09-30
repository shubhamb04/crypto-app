import React from "react";

const Coin = (props) => {
  const coins = props.coins;
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coins</th>
            <th scope="col">Price</th>
            <th scope="col">24Hrs Change</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td className="d-flex align-content-start justify-content-around">
                <img
                  src={coin.image}
                  alt="coin symbol"
                  className="coin-img"
                ></img>
                <h6>{coin.name}</h6>
                <p className="text-uppercase">{coin.symbol}</p>
              </td>
              <td className="text-info">${coin.current_price}</td>
              
                {coin.price_change_percentage_24h < 0 ? (
                  <td className="text-danger">
                  
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                ) : (
                  <td className="text-success">
                   
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                )}
              
              <td>${coin.total_volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
