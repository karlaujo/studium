import axios from 'axios'

// const axios = require("axios");

const BASE_URL = "https://stoicquotesapi.com/v1/api/quotes";

export const getQuote = async () => {
    const { data } = await axios.get(BASE_URL);
    let x = Math.floor(Math.random() * 10) + 1;
    return data.data[x].body;
}
