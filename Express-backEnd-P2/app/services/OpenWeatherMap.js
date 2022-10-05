const { default: axios } = require('axios')
const openweathermapConfig = require('../config/openweathermap')

exports.OpenWeatherMap = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        units: 'metric',
        appid: openweathermapConfig.apikey,
    }
})
