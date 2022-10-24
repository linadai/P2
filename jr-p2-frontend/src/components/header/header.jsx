import styled from 'styled-components';
import DropDown from './Dropdown/DropDown';
import Time from './title/Time';

const WeatherHeader = styled.div`
    width: 100%;
    background-color:purple;
    display: flex;
    justify-content: space-between; 
    align-items:center;
`

const Header = ({ setCurrentCityID }) => {
    return (
        <WeatherHeader>
            <Time></Time>
            <DropDown setCurrentCityID={setCurrentCityID}></DropDown>
        </WeatherHeader>
    );
}

export default Header;