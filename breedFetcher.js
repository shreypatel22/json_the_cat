const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(url, function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // // console.log('body:', body); // Print the HTML for the Google homepage.

  if (body === '[]') {
    console.log('Cat not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }




});