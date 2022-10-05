import { Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 48px;
`

const Title = styled.div`
margin-bottom: 1rem;
font-size: 1.5rem;  
`
const Section = ({ title, children }) => {
    return (
        <Wrapper >
            <Title>{title}</Title>
            {/* 删掉这一行就不能显示出section里面的子element */}
            {children}
        </Wrapper>)
}
export default Section;