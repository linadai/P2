import styled from 'styled-components';
import Forecast from './components/Forecast';
import LocalWeather from './components/LocalWeather';
import OtherCities from './components/OtherCities';
const ContainerStyle = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 40px);
   display: flex;
    justify-content: center;
    align-items: center;
   // background-color:green;
`
const Content = styled.div`
    width: 800px;
    overflow: hidden;
    background-color: white;
    border-radius: 32px;
    box-shadow: 0 0 16px rgb(0 0 0 / 50%)
`
const Layout = styled.div`
    display: flex;
    padding: 36px 0;
`
const VerticalDiver = styled.div`
    width: 3px;
    background-color: rgb(0, 0, 0, 0.1); 
`

const Container = () => {
    return (
        <ContainerStyle>
            <Content>
                <LocalWeather />
                <Layout>
                    <OtherCities />
                    <VerticalDiver />
                    <Forecast />
                </Layout>
            </Content>
        </ContainerStyle>
    )
}

export default Container;