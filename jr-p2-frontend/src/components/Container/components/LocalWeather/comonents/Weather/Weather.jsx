import { useState } from "react";
import styled from "styled-components";
import Temperature from "../../../../../Temperature";
import WeatherItem from "./components/WeatherItem";

const Wrapper = styled.div`
text-align: center;
`
const StyledTemperature = styled(Temperature)`//把css变成一个class，通过className传递给span
    color: white;
    font-size: 5rem;
`
const MainWeather = styled.div`
    color: rbga(255, 255, 255, 0.7);
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 5px;
    margin-top: 0.25rem;
`
const VerticalDiver = styled.div`
    margin: 0 2rem;
    width: 2px;
    background-color: rgb(255, 255, 255, 0.7); 
`
const HumidityAndWind = styled.div`
    display: flex;
    margin-top: 3rem;
    color: rgba(255, 255, 255, 0.7);
`

const Weather = ({
    data
}) => {
    return (
        <Wrapper>
            <StyledTemperature value={data.main.temp} />
            <MainWeather>{data.weather[0].main}</MainWeather>
            <HumidityAndWind>
                <WeatherItem title="HUMIDITY" child={`${data.main.humidity}%`}>WeatherItem</WeatherItem>
                <VerticalDiver />
                <WeatherItem title="WIND" child={`${data.wind.speed}K/M`}> WeatherItem</WeatherItem >
            </HumidityAndWind >
        </Wrapper >
    );
}

export default Weather;