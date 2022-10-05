import { useEffect, useState } from 'react';
import { getWeathers } from './api/Weathers'
import Header from './components/header/header';
import styled from 'styled-components';
import Container from './components/Container/Container';
import BackgroundImage from './components/BackgroundImage';

const Wrapper = styled(BackgroundImage)`//Wrapper继承BackgroundImage的所有style
min-height: 100vh;
min-width: 100vw;

`

function App() {
  console.log("----App---");
  const [data, setData] = useState('');
  const [array, setArray] = useState([]);
  useEffect(() => {
    getWeathers().then((res) => {
      console.log("----222---", res.data)
      setData(JSON.stringify(res.data));
      setArray(res.data);
      console.log("-------", array);
    })
  }, [])

  useEffect(() => {
    console.log('array refresh', array);
  }, [array])
  return (
    <Wrapper className="App" src="https://wallpaperaccess.com/full/2629319.png">
      <Header></Header>
      <Container />
    </Wrapper>
  );
}

export default App;
