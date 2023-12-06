let axios = require('axios')

const exchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get(`http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1`)
    const rate = response.data.rates;
    const inr = 1/rate[fromCurrency]
    const exchangerate = inr * rate[toCurrency]
    return exchangerate;
}

const getCountries = async (toCurrency) => {
    const response = await axios.get(`https://restcountries.com/v3.1/currency/${toCurrency}`)
    console.log(response.data.name)
}

getCountries("india")

