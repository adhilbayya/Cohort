const url = 'https://restcountries.com/v3.1/all';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    data.forEach(country => {
      const name = country.name.common;
      console.log('Country Name:', name);
      // You can access other country information here as needed
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });