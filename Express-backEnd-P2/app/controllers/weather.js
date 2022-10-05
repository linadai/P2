

//import {getWeather} from '../services/openweathermapServiceAPI'

const openweathermapServiceAPI = require('../services/openweathermapServiceAPI')

//GET ALL
exports.index = async (req, res) => {
    const result = await openweathermapServiceAPI.getWeather()

    const weatherList = result.data.list;
    const noonList = weatherList.filter(element => {
        return element.dt_txt.includes("12:00:00");
    });
    //console.log(noonList);
    //noonList.forEach((item)=>{console.log(item.dt_txt)});
    res.send(noonList);
}
//POST
exports.store = (req, res) => { }

//PUT
exports.update = (req, res) => { }

//GET ONE
exports.show = async (req, res) => {
    let result = '';
    console.log("req.params.id", req.params.id);
    if (!req.params.id.includes(',')) {
        result = await openweathermapServiceAPI.getCityWeather(req.params.id);
    } else {
        result = await openweathermapServiceAPI.getCityWeathers(req.params.id);
    }

    console.log("getCityWeather=----", result.data);
    res.send(result.data);
}
//DELETE
exports.delete = (req, res) => { }