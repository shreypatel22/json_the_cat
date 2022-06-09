const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  // This code will get information from the api using the requestion async function
  // it needs to be parsed since it is all strings
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function(error, response, body) {
    const data = JSON.parse(body);

    // When the function is called it will run the above code always.


    // Once it reaches here if there is data at index 0 (from code run above),
    // return null for the error (first paramater of the callback), and the description as desc (2nd para)
    //   if there is no data found from the above code the error would not be null (instead will be 'No Cat Found')
    //   and therefore truthy so the else statment is ran on index.js
    if (data[0]) {
      return callback(null, data[0].description);
    } else {
      return callback('No Cat Found.');
    }

  });
};

module.exports = {fetchBreedDescription};

// this is just making the function (declaring it)
// when you actually call this function since there is a callback you would need to make the callback function in the 2nd parameter
