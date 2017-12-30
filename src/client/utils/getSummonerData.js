import Axios from 'axios';

export const getSummonerData = summonerName => {
    return Axios.request({
        baseURL: 'https://us-central1-inspired-gift-162107.cloudfunctions.net/getSummonerMatchInfo',
        method: "POST",
        data: {summonerName}
    })
    .then(res => res)
    .catch(err => err);
};