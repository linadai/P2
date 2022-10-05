import styled from 'styled-components';
import { useState, useEffect } from "react";
//import Clock from 'react-live-clock';
const TimeStyle = styled.div`
    color:white;
`


const Time = () => {
    const [date, setDate] = useState()
    useEffect(() => {
        setInterval(() => setDate(new Date().toLocaleTimeString()), 1000);
    }, []);
    return (<TimeStyle>
        <p>{date}</p>
       
    </TimeStyle>);
}

export default Time;