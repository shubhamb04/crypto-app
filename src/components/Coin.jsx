import React from "react";
import millify from "millify";

const Coin = ({ coins, loading }) => {

  if (loading) {
    return (
      <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>
    )
  }
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Coins</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">24Hrs Change</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <th scope="row"><img
                  src={coin.image}
                  alt="coin symbol"
                  className="coin-img"
                ></img></th>
              <td className="d-flex justify-content-between">
                <h6 className="">{coin.name}</h6>
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
              
              <td>${millify(coin.total_volume.toLocaleString())}Bn</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
