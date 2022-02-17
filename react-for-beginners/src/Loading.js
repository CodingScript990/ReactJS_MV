import { useEffect, useState } from "react";

// Loading function
function Loading() {
  // loading State value
  const [loading, setLoading] = useState(true);
  // coins Array State value
  const [coins, setCoins] = useState([]);
  // Effect API request
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // rendering
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default Loading;
