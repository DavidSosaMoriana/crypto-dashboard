import { useState } from 'react'
import ExchangeRate from './ExchangeRate'
import axios from 'axios'

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
  const [amount, setAmount] = useState(1)

  const convert = () => {
    
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      interval: '5min',
      function: 'TIME_SERIES_INTRADAY',
      symbol: 'MSFT',
      datatype: 'json',
      output_size: 'compact'
    },
    headers: {
      'X-RapidAPI-Key': '159cb5e053msh672957000ceedfcp172c5cjsn3c838498df74',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  }

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
           <tr>
              <td>Primary Currency:</td>
               <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select 
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                  </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
               <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                  </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-btn" onClick={convert}>Convert</button>
      </div>
     

      <ExchangeRate />
    </div>
  )
}

export default CurrencyConverter