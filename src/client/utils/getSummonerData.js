import Axios from 'axios';

/**
 * TODO: Abstract this function by creating an API wrapper and expose the direct get or post actions
 */
export const getSummonerData = summonerName => {
    return Axios.request({
        baseURL: 'https://us-central1-inspired-gift-162107.cloudfunctions.net/getSummonerMatchInfo',
        method: "POST",
        data: {summonerName}
    })
    .then(res => res)
    .catch(err => err);
};

/**
 * TODO: use this function to get the Base URL rather than providing it directly in the Axios Call
 */
const _getBaseUrl = () => {
    // Complete this function
};

/**
 * TODO: export and invoke getSummonerData()
 */
const get = () => {
    // Complete this function
};