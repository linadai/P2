import styled from "styled-components";
import Section from "../../../Section";
import DailyWeather from "./components/DailyWeather";

const Layout = styled.div`
    display:flex;
    margin-top: 2rem;

`
const Forecast = ({ forecasts }) => {
    const WeekDay = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
    // const [forecasts, setForecasts] = useState([
    //     { id: "MON", day: "MON", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
    //     { id: "TUE", day: "TUE", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
    //     { id: "WED", day: "WED", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
    //     { id: "THU", day: "THU", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
    //     { id: "FRI", day: "FRI", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" }
    // ])
    return (
        <Section title="Forecast" >
            <Layout>
                {
                    forecasts.map(({ dt_txt, main: { temp }, weather: [weather] }) =>
                    (<DailyWeather
                        key={new Date(dt_txt).getDay()}
                        day={WeekDay[new Date(dt_txt).getDay()]}
                        weather={weather}
                        temperature={temp} />)
                    )
                }
            </Layout>
        </Section>
    );
}

export default Forecast;