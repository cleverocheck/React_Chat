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
white-space: pre-line;

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
    margin-left:${props => props.data.ava?'15px':'60px'};
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
height:100%;

width:90%;
`
export const StyledButtonInfo = styled.span`

    cursor: pointer;
    margin-left:-5px;
    &:before {

        font-family: "Font Awesome 5 Pro";
        content: "\\f107";
        font-size: 20px;
        color:black;

    }
`
export const Info = styled.div`
position:absolute;
transition:0.2s;
transition-timing-function:cubic-bezier(.08,.76,.32,.24);
position: absolute;
right: 0;
opacity:${props =>props.z?1:0};
top:${props =>props.z?17:0}px;
z-index:${props =>props.z?10000:-1};
width:70px;
height:40px;
background-color:white;
display:grid;
grid-template-columns: 100%;
grid-template-rows: 50% 50%;
  box-shadow:0 0 2px rgba(0,0,0,0.5);

`
export const Delete = styled.div`
z-index:10001;
font-size:10px;
margin-top:5px;
text-align: center;
cursor: pointer;

`
export const Ans = styled.div`
z-index:10001;
font-size:10px;
margin-top:10px;
text-align: center;
cursor: pointer;

`
export const  Quote = styled.div`
height:30px;
width:190px;
display: flex;
  flex-direction: row;


`
export const Line = styled.div`
height:30px;
width:5px;
background-color:#f1c400;
border-radius:5px;

`
export const Content = styled.div`
height:50%;
font-size: 15px;
overflow:hidden;
content:#4d4d4d;
`
export const Name = styled.div`
color:black;
height:50%;
font-size: 17px;
`
export const ContentBlock = styled.div`
display: flex;
  flex-direction: column;
  width:185px;
`
export const Avatar = styled.img`
height:40px;
width:40px;
margin-top:25px;
margin-left:5px;
transition:1s;
&:hover {
  cursor: pointer;
  height:100px;
  width:100px;

  }
`
export const ContentBlockQ = styled.div`
display: flex;
  flex-direction: row;
`
export const WhoM = styled.div`
margin-bottom:-20px;
margin-left:40px;
color:#4d4d4d;
`
export const AdImg= styled.img`
width:210px;

`
