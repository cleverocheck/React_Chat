import styled, {css,keyframes} from 'styled-components'

//export const Maximize = css`
//content: '\\f2f9';
//font-family:'Font Awesome 5 Pro';
//
export const DivToBack = styled.div`
heigth:16px;
width:8px;
margin-top:10px;
margin-left:15px;
visibility: ${props=>props.backStatus ?'visible':'hidden'};
-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Maximize = styled.div`
margin-top:-30px;
font-size:35px;
margin-left:335px;
display:${props => props.animStatus?'':'none'};
&:hover {
  cursor: pointer;
}
-webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Paragraph = styled.div`
height:40px;
width:375px;
background-color: #f1c400;
z-index:999;
`
export const Collapse = styled.div`
color:black;
margin-top:-30px;
margin-left:305px;
width:20px;
height:30px;
font-size:40px;
display:${props => props.animStatus?'':'none'};

  &:hover {
    cursor: pointer;
  }
  -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
 const nameBar = keyframes`
to{opacity: 1;}
 50% {opacity: 0;}
from{opacity: 1;}
 `
export const NameBar = styled.div`
animation: ${props => props.anim ?nameBar:'undefined'} 0.5s linear infinite;
animation-iteration-count: 1;
margin-top:-20px;
margin-left:45px;
color: #333333;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
display:${props => props.animStatus?'':'none'};



`

export const StyledButtonBack = styled.span`

    cursor: pointer;

    &:before {

        font-family: "Font Awesome 5 Pro";
        content: "\\f053";
        font-size: 16px;
        color:black;

    }
`;
