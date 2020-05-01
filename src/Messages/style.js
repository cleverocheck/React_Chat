 import styled from 'styled-components'

export const MainBlock = styled.div`

  display: flex;
  flex-direction: row;
height:82px`

export const Paragraph = styled.div`
transition: margin-top ${props =>props.transition?'0s':'1s'};
background-color: rgb(230, 230, 230);
margin-top:${props=> props.windowStatus?'0px':'-25px;'};
position: ${props => props.windowStatus?'':'absolute'};
   top: ${props => props.windowStatus?'0':'-9999px'};
   left: ${props => props.windowStatus?'0':'-9999px'};

`
export const ImgBLock = styled.div`
height:70px;
width:55px;
`
export const PhotoAd = styled.img`
height:55px;
width:55px;
margin-top:10px;
margin-left:5px;
`
export const InfoBlock = styled.div`
display: flex;
 flex-direction: column;
height:65px;
width:200px;
margin-left:7px;
margin-top:5px;
overflow:hidden;
`
export const TextBlock= styled.div`
font-size:14px;
`
export const ButtonBlock = styled.div`
height:70px;
width:115px;
display: flex;
  align-items: flex-end;
`
export const  Button = styled.div`
  width:115px;
    height:20px;
    color:#6e6e6e;
    cursor:pointer;
`
