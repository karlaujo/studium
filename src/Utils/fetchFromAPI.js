import axios from 'axios'

// const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '48'
  },
  headers: {
    'X-RapidAPI-Key': "be7c418c50msha1e43daba45b312p16a697jsn6771e5be6f14",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url, page) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data.items.slice((page-1)*12, (page-1)*12 + 12);
}
