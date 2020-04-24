import styled from 'styled-components'

export const MyMesage = styled.div`
display:${props => props.data.view =='his'?'block':'none'};
background-color: rgb(247, 219, 136);
width: 220px;
    border-radius: 3px;
    padding: 15px 5px 4px 8px;
    color: #4d4d4d;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.4);
    margin-top:25px;
    margin-left:125px;
    word-wrap:break-word;
position: relative;

`
export const HimMesage = styled.div`
display:${props => props.data.view =='him'?'block':'none'};
background-color: rgb(230,230,230);
width: 220px;
    border-radius: 3px;
    padding: 15px 5px 4px 8px;
    color: #4d4d4d;
    box-shadow: 2px 2px 6px 1px rgba(0,0,0,0.4);
    margin-top:25px;
    margin-left:5px;
    word-wrap:break-word;
position: relative;
`
export const TimeInfo = styled.div`
display:${props => props.data.view =='time'?'block':'none'};
color:#9e9b9b;
margin-top:20px;
margin-left:110px;

`
export const Button = styled.div`
position: absolute;
right: 0;
top: 0;
color:#7f7f7f;
height:20px;
width:10px;
-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

`
export const Time = styled.div`

z-index:999;
position: absolute;
height:10%
top: 90%;
right: 0;
bottom: 0;
color:black;
font-size:13px;
-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const Tdiv = styled.div`
height:100%
background-color:red;
width:90%;
`
