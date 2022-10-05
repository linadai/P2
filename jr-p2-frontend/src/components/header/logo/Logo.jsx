import styled from 'styled-components';
const LogoStyle = styled.div`
   // width: 10%;
   // background-color:pink;
   //background-image:url('/image/menu.png');
    height:100%;
    color:white;
    img{
        width: 40px;
        height: 40px;
        background-color:red;
    }
`

const Logo = () => {
    return (
        <LogoStyle>
            <img src="menu.png" alt='logo'></img>
            
        </LogoStyle>);
}

export default Logo;