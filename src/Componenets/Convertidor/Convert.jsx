import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function CurrencyConverter() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        setExchangeRate(response.data.rates[targetCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const convertCurrency = () => {
    return amount * exchangeRate;
  };

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <div>
        <label htmlFor="base-currency">Base Currency:</label>
        <select id="base-currency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="INR">INR</option>
          <option value="MXN">MXN</option>
        </select>
      </div>
      <div>
        <label htmlFor="target-currency">Target Currency:</label>
        <select id="target-currency" value={targetCurrency} onChange={handleTargetCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="INR">INR</option>
          <option value="MXN">MXN</option>
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <div>
        {exchangeRate && (
          <p>{amount} {baseCurrency} equals {convertCurrency()} {targetCurrency}</p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
