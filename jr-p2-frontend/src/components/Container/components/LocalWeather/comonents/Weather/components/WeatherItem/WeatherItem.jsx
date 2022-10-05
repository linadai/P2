import styled from 'styled-components';
const Wrapper = styled.div`
    text-align: center;
    font-weight: bold;
`
const Title = styled.div`
    margin-bottom: 0.75rem;
`
const WeatherItem = ({
    title,
    child,
}) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <div>{child}</div>
        </Wrapper>
    )
}
export default WeatherItem;