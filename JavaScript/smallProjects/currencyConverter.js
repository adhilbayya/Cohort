// let axios = require("axios");

// const exchangeRate = async (fromCurrency, toCurrency) => {
//   const response = await axios.get(
//     `http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`
//   );
//   const rate = response.data.rates;
//   const inr = 1 / rate[fromCurrency];
//   const exchangerate = inr * rate[toCurrency];

//   if (isNaN(exchangerate)) {
//     throw new Error(`${fromCurrency} and ${toCurrency} is not a currency`);
//   }
//   return exchangerate;
// };

// const getCountries = async (toCurrency) => {
//   const response = await axios.get(
//     `https://restcountries.com/v3.1/currency/${toCurrency}`
//   );
//   const countries = response.data.map((resp) => {
//     return resp.name.common;
//   });
//   return countries;
// };

// const calculateAmount = async (fromCurrency, toCurrency, amount) => {
//   let exchangeAmount = await exchangeRate(fromCurrency, toCurrency);
//   let countries = await getCountries(fromCurrency);
//   let exchange = (amount * exchangeAmount).toFixed(2);

//   return `${amount} ${fromCurrency} is worth ${exchange} ${toCurrency} and can be used in all these contries : ${countries}`;
// };

// calculateAmount("USD", "INR", 1)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

import fetch from "node-fetch";

export const exchageRate = async (fromCurrency, toCurrency) => {
  const response = await fetch(
    `http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`
  );
  const data = await response.json();
  let rate = data.rates;
  let inr = 1 / rate[fromCurrency];
  let value = inr * rate[toCurrency];

  return value;
};

export const getCountries = async (toCurrency) => {
  let countries = await fetch(
    `https://restcountries.com/v3.1/currency/${toCurrency}`
  );
  let data = await countries.json();
  let country = data.map((resp) => {
    return resp.name.common;
  });
  return country;
};

export const getValues = async (fromCurrency, toCurrency, value) => {
  let countries = await getCountries(toCurrency);
  let exchangeValue = await exchageRate(fromCurrency, toCurrency);
  let exchange = (value * exchangeValue).toFixed(2);

  return `${value} ${fromCurrency} is worth ${exchange} ${toCurrency} and these can be spent in ${countries}`;
};
