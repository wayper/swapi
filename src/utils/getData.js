const axios = require('axios');

async function getData(url) {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getData;
