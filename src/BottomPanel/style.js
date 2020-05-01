import styled,{keyframes} from 'styled-components'
import { TextareaAutosize } from '@material-ui/core';
const animPanel = keyframes`
from{
  opacity:0;
  margin-bottom:-15px;
}
to{
  opacity:1;
  margin-bottom:0px;
}
`

export const Panel = styled.form`

animation:${props =>props.windowStatus?animPanel:'undefined'} 1s;
width:375px;
background-color:white;
display:${props => props.windowStatus?'flex':  'none'};
flex-direction: row;
justify-content: center;
`
export const StyledButtonBack = styled.div`
padding: 11px 0px 0px 7px;

margin-left:5px;
margin-top:-30px;
    &:before {
        font-family: "Font Awesome 5 Pro";
        content: "\\f0c6";
        font-size: 18px;
        color:black;
        width:18px;
        height:18px;

    }
`;
export const AreaDiv = styled.div`
margin-left:-13px;
width:285px;

`

export default styled(TextareaAutosize)`

background-color:#f1f1f1;
width:280px;
margin-top:7px;
resize: none;
font-size: 16px;
`
export const Sumbit = styled.img`
margin-top:2px;
padding: 11px 0px 0px 7px;
    cursor: pointer;
width:24px;
height:18px;
`
export const DivButtons = styled.div`
align-self: flex-end;
height:45px;
width:50px;
`
export const PrintInfo = styled.div`
color:black;
font-size:14px;
font-style:italic;
display:${props => props.hidden?'none':'block'};
margin-top:${props => props.hidden?'0px':'-16px'};
z-index:1001;
`
export const PrintInfoBlock = styled.div`
width:100%;
display: flex;
  justify-content: center;

`
export const Quote = styled.div`
display:grid;
height:${props => props.renderPanel?'23':'23'}px;
grid-template-areas:
'name cross'
'text cross';
grid-template-rows: 11px 11px;
grid-template-columns: 90% 10%;

position:${props => props.quote == ''?'absolute':''};
top:${props => props.quote == ''?'-9999px':'0px'};
left:${props => props.quote == ''?'-9999px':'0px'};

`
export const TextBlock1 = styled.b`
grid-area: name;
font-size:15px;
`
export const TextBlock2 = styled.div`
grid-area: text;
font-size:12px;
margin-top:2px;
color:black;
font-style:italic;

`
export const Cross = styled.div`
grid-area: cross;
text-align: center;fontsize:90px;
margin-top:-2px;
margin-left:20px;
cursor: pointer;

&:before {

    font-family: "Font Awesome 5 Pro";
    content: "\\f00d";
    font-size: 25px;
    color:#4d4d4d;

}
`
export const ZeroInput = styled.input`
color: transparent;
heigth:18px;
width:18px;
margin-top:10px;
margin-left:10px;
opacity:0;

`
