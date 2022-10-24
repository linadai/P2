import axios from "axios"

export const getForecastsByID = (id) => {
    return axios.get(`http://localhost:8000/api/v1/forecasts/${id}`);
};
export const getWeatherByID = (id) => {
    return axios.get(`http://localhost:8000/api/v1/weathers/${id}`);
};

export const getCities = async () => {
    return await axios.get('http://localhost:8000/api/v1/cities');
}