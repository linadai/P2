import { useEffect, useState } from 'react';
import { getForecastsByID } from './api/Weathers'
import Header from './components/header/header';
import styled from 'styled-components';
import Container from './components/Container/Container';
import BackgroundImage from './components/BackgroundImage';

const Wrapper = styled(BackgroundImage)`//Wrapper继承BackgroundImage的所有style
min-height: 100vh;
min-width: 100vw;
`

function App() {
  const [currentCityID, setCurrentCityID] = useState('2147714');
  const [forecasts, setForecasts] = useState([]);
  useEffect(() => {
    console.log("app-------", currentCityID);
    getForecastsByID(currentCityID).then((res) => {
      console.log("getForecasts-------", res.data);
      setForecasts(res.data);
    })
  }, [currentCityID])
  return (
    <Wrapper className="App" src="https://wallpaperaccess.com/full/2629319.png">
      <Header setCurrentCityID={setCurrentCityID}></Header>
      <Container currentCity={currentCityID} forecasts={forecasts} />
    </Wrapper>
  );
}

export default App;
