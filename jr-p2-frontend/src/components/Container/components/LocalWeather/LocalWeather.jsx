import { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../../../BackgroundImage";
import CityName from "./comonents/CityName";
import Weather from "./comonents/Weather";
import { getWeatherByID } from "../../../../api/Weathers";
const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 64px 96px;
    color: white;
`
const LocalWeather = () => {
    /**bundle.js:800 Uncaught TypeError: Cannot read properties of undefined (reading 'main')
    at LocalWeather (bundle.js:800:27) 
    react 的渲染原理会导致第一次data undefined
    */

    // const [temperature, setTemperature] = useState();
    // const [mainWeather, setMainWeather] = useState();
    // const [humidity, setHumidity] = useState();
    // const [wind, setWind] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    //1.undefined
    //2.data已经有值
    console.log(data);
    //1.执行useEffect,出现报错，避免报错，加一个loading
    //2.有没有改变？->没有-> 跳过useEffect
    useEffect(() => {
        getWeatherByID('2147714').then(({ data }) => {
            setData(data);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return (<div>Loading...</div>)
    }
    return (
        <BackgroundImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHp3kOpQFi1_7z8kLGprLgh7krWY6MGBbFwA&usqp=CAU">
            <Layout>
                <Weather
                    data={data}
                />
                <CityName cityName={data.name}></CityName>
            </Layout>
        </BackgroundImage>);
}

export default LocalWeather;