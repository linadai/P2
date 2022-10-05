
import { useEffect, useState } from "react";
import { getWeatherByID } from "../../../../api/Weathers";
import Section from "../../../Section";
import CityWeather from "./components/CityWeather";

const OtherCities = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState();
	useEffect(() => {
		getWeatherByID(['2147714', '2174003', '2063523'].join()).then(({ data }) => {
			setData(data);
			setLoading(false);
		})
	}, [])
	if (loading) {
		return (<div>Loading...</div>)
	}
	return (
		<Section title="Other Cities">
			{data && data.list.map(({ id, name, main: { temp }, weather: [weather] }) => (
				<CityWeather
					key={id}
					name={name}
					temperature={temp}
					weather={weather} />
			))}
		</Section>
	);
}

export default OtherCities;