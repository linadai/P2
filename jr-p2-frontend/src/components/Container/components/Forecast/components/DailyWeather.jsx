import styled from "styled-components";
import Temperature from "../../../../Temperature";
import WeatherIcon from "../../../../WeatherIcon";

const Wrapper = styled.div`
//background-color:red;
   
    display: flex;
    flex-direction: column;
    text-align:  center;
    & ~ & {
        margin-left: 0.5rem;
    }
`



const StyledWeatherIcon = styled(WeatherIcon)`
    width: 70px;
    height: 70px;
    color: orange;
`
const DailyWeather = ({
    day,
    weather,
    temperature
}) => {
    return (
        <Wrapper>
            <div>{day}</div>
            <StyledWeatherIcon value={weather.icon} description={weather.description} />
            <Temperature value={temperature} />
        </Wrapper>
    )
}
export default DailyWeather;