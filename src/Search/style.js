 import styled from 'styled-components'
 export const DivSearch = styled.input`
 box-sizing: unset;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    width:85%;
    border-radius: 3px;
    border: 1px solid rgb(241, 241, 241);
    background-color: rgb(241, 241, 241);
    color: #949494;
    padding: 5px 15px;
    margin-left: 11px;
    margin-top:${props =>props.windowStatus?'-20px':'5px'};
    opacity:${props =>props.windowStatus?'0':'1'};
    visibility:${props =>props.windowStatus?'hidden':'visible'};
    transition:${props =>props.transition?'1s':'0.7s'};
    height: 10px;



 `
