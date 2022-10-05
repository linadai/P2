import { useState } from "react";
import styled from "styled-components";
import Section from "../../../Section";
import DailyWeather from "./components/DailyWeather";

const Layout = styled.div`
    display:flex;
    margin-top: 2rem;

`


const Forecast = () => {
    const [forecasts, setForecasts] = useState([
        { id: "MON", day: "MON", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "TUE", day: "TUE", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "WED", day: "WED", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "THU", day: "THU", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "FRI", day: "FRI", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" }
    ])
    return (
        <Section title="Forecast" >
            <Layout>
                {
                    forecasts.map(({ id, day, weather, temperature }) =>
                    (<DailyWeather
                        key={id}
                        day={day}
                        weather={weather}
                        temperature={temperature} />)
                    )
                }
            </Layout>
        </Section>
    );
}

export default Forecast;