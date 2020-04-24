 import styled from 'styled-components'



export const Paragraph = styled.div`
transition: margin-top ${props =>props.transition?'0s':'1s'};
background-color: rgb(230, 230, 230);
margin-top:${props=> props.windowStatus?'0px':'-25px;'};
height:${props => props.windowStatus?'65px':'0px'};
font-size:${props => props.windowStatus?'auto':'0px'};


`
