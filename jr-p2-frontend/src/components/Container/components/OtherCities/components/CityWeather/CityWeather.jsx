import styled from 'styled-components';
import Temperature from '../../../../../Temperature';
import WeatherIcon from '../../../../../WeatherIcon';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    /* & ~ & {
        margin-top: 0.5rem;
        } */
`
const CityName = styled.div`
    width: 100px;
    margin-right: 1rem;
`
const StyledTemperature = styled(Temperature)`
    width: 3rem;  
`
const StyledWeatherIcon = styled(WeatherIcon)`
    width: 50px ;
    height: 50px;
`

const CityWeather = ({
    name,
    temperature,
    weather
}) => {
    return (
        <Wrapper>
            <CityName>{name}</CityName>
            <StyledTemperature value={temperature}></StyledTemperature>
            <StyledWeatherIcon value={weather.icon} description={weather.description}>WeatherIcon</StyledWeatherIcon>
        </Wrapper>
    );
}

export default CityWeather;