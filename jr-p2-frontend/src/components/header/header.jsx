import styled from 'styled-components';
import Logo from './logo/Logo';
import SearchBar from './search/searchBar';
import Time from './title/Time';

const WeatherHeader = styled.div`
width: 100%;
height: 40px;
background-color:purple;
//background-image: linear-gradient(to bottom right, purple 0%, black 100%);
display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
    return (
        <WeatherHeader>
            <Logo></Logo>
            <Time></Time>
            <SearchBar></SearchBar>
        </WeatherHeader>
    );
}

export default Header;