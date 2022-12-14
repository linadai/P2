const WeatherIcon = ({ value, description, className }) => {
    return (
        <img className={className} alt={description} src={`https://openweathermap.org/img/wn/${value}@2x.png`}></img>
    );
}

export default WeatherIcon;