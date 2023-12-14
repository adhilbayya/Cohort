// const url = 'https://restcountries.com/v3.1/all';

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     data.forEach(country => {
//       const name = country.currencies;
//       console.log('Country Name:', name);
//       // You can access other country information here as needed
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    // Check if the response status is okay (status code 200)
    if (response.ok) {
      // Parse the response JSON data
      return response.json();
    } else {
      throw new Error("Failed to fetch data");
    }
  })
  .then((data) => {
    // Extract only the country names from the response
    const countryNames = data.map((country) => country.name.common);

    // Log the array of country names
    console.log(countryNames);

    // You can further process or use 'countryNames' array here
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
