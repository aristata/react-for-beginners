import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [budget, setBudget] = useState(0);
  const [amountOfCoins, setAmountOfCoins] = useState("0");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => {
        return response.json();
      })
      .then(json => {
        setCoins(json.slice(0, 20));
        setLoading(false);
      });
  }, []); // 아무것도 주시하고 있지 않으면 (= 빈 배열이면) 이 코드는 한 번만 작동한다
  
  const handleSelect = (e) => {
    const selectedCoin = coins[e.target.value];
    setSelectedCoin(selectedCoin);
  }
  
  const handleInput = (e) => {
    setBudget(parseFloat(e.target.value));
  }
  
  useEffect(() => {
    if (!!selectedCoin && !!budget) {
      const coinPrice = selectedCoin.quotes.USD.price;
      const amountOfCoinsYouCanBuy = (budget / coinPrice).toFixed(4);
      setAmountOfCoins(amountOfCoinsYouCanBuy);
    }
  }, [selectedCoin, budget])
  
  return (
    <>
      <div>
        <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <div>
            <select onChange={handleSelect}>
              <option key={"default"}>select coin!</option>
              {coins.map((coin, index) => {
                return (
                  <option key={index} value={index}>
                    {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                  </option>
                )
              })}
            </select>
            <div>
              <label htmlFor={"moneyInput"}>My Budget: </label>
              <input id={"moneyInput"} type={"number"} onChange={handleInput} value={budget}/>
              <span> USD</span>
            </div>
            <div>
              <span>You can buy: {amountOfCoins} {selectedCoin.symbol}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
