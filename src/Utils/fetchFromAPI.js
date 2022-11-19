import axios from 'axios'
import config from '../config';

// const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '48'
  },
  headers: {
    'X-RapidAPI-Key': config.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url, page) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data.items.slice((page-1)*12, (page-1)*12 + 12);
}
