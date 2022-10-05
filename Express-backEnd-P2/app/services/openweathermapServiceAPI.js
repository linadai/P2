

const { default: axios } = require('axios')
const openweathermapConfig = require('../config/openweathermap')
const { default: OpenWeatherMap } = require('./OpenWeatherMap');
//const axios = require('axios').default;
exports.getWeather = () => {

    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${openweathermapConfig.apikey}`);
}

const get = ({ path, params }) => axios.get(`https://api.openweathermap.org/data/2.5${path}`, {
    params: {
        units: 'metric',
        appid: openweathermapConfig.apikey,
        ...params
    }
})
exports.getCityWeather = (id) => {
    console.log("getCityWeather//////", id);
    return get({ path: '/weather', params: { id, } })
}
exports.getCityWeathers = (ids) => {
    return get({ path: '/group', params: { id: ids } })
}
// exports.getCityWeather = (id) => {
//     return OpenWeatherMap.get('/weather', { params: { id, } });
// }
// exports.getCityWeathers = (ids) => {
//     return OpenWeatherMap.get('/group', { params: { id: ids.join() } });
// }

