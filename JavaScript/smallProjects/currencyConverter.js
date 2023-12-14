let axios = require("axios");

const exchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get(
    `http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`
  );
  const rate = response.data.rates;
  const inr = 1 / rate[fromCurrency];
  const exchangerate = inr * rate[toCurrency];
  return exchangerate;
};

const getCountries = async (toCurrency) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/currency/${toCurrency}`
  );
  const countries = response.data.map((resp) => {
    return resp.name.common;
  });
  return countries;
};

const calculateAmount = async (fromCurrency, toCurrency, amount) => {
  let exchangeAmount = await exchangeRate(fromCurrency, toCurrency);
  let countries = await getCountries(fromCurrency);
  let exchange = (amount * exchangeAmount).toFixed(2);

  return `${amount} ${fromCurrency} is worth ${exchange} ${toCurrency} and can be used in all these contries : ${countries}`;
};

calculateAmount("USD", "INR", 1).then((message) => {
  console.log(message);
});
