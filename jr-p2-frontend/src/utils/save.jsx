const Forecast = () => {
    const [forecasts, setForecasts] = useState([
        { id: "MON", day: "MON", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "TUE", day: "TUE", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "WED", day: "WED", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "THU", day: "THU", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" },
        { id: "FRI", day: "FRI", weather: { icon: '04d', description: 'Cloud' }, temperature: "25" }
    ])
    return (
        <Section title="Forecast">
            <Layout>
                {
                    forecasts.map(({ day, weather, temperature }) => {
                        <DailyWeather
                            day={day}
                            weather={weather}
                            temperature={temperature} />
                    })
                }
            </Layout>
        </Section>
    );
}
///////
const OtherCities = () => {
    const [weathers, setWeathers] = useState([
        { id: "MELBOURNE", name: "Melbourne", temperature: "21", weather: { icon: '04d', description: 'Cloud' } },
        { id: "SYDNEY", name: "Sydney", temperature: "24", weather: { icon: '01n', description: 'Rain' } },
        { id: "PERTH", name: "Perth", temperature: "34", weather: { icon: '01d', description: 'Clear' } }
    ])
    return (
        <Section title="Other Cities">
            {/* {weathers.map(({weather}) => (  直接将weather解构*/}
            {weathers.map(({ name, temperature, weather }) => (
                <div>nnnn</div>
                // <CityWeather
                // 	name={name}
                // 	temperature={temperature}
                // 	weather={weather} />
            ))}
        </Section>
    );
}

export default OtherCities;