import styled from "styled-components"

export const BlockEx = styled.div`
width:345px;
height:100px;


grid-template-rows:  50%  50%;
grid-template-columns:  1fr  ;
margin-left:15px;
margin-top:${props =>props.render?'1px':'1px'};

display: ${props => props.windowStatus  || props.hidden?"none":"grid"};

&:hover {
  cursor: pointer;
  background-color:#f1c400;

    box-shadow:0 0 4px rgba(0,0,0,0.45);

  }
`


export const DiscraptionBlock = styled.div`
display: grid;
grid-template-rows:  47.5% 47.5%;
grid-template-columns:  50% 50% ;
grid-template-areas:
"blockDis blockDis2"
"blockDisD blockDisD2";
grid-row-gap: 3px;
`
export const HeaderBlock = styled.div`
display: grid;
grid-template-areas:
"img MainContent imgT"
;
grid-template-rows:  50px 50px 50px;
grid-template-columns: 15% 70% 15% ;
`
export const DiscraptionBlocks =  styled.div`
color: #949494;
overflow:hidden;
font-size:14px;
font-style: oblique;

`
export const DiscraptionBlocks2 =  styled.div`
grid-area:blockDis2;
color: #949494;
overflow:hidden;
font-size:14px;
font-style: oblique;
`
export const DiscraptionBlocksDown =  styled.div`
grid-area:blockDisD;
color: #949494;
overflow:hidden;
font-size:14px;
font-style: oblique;


`
export const DiscraptionBlocksDown2 =  styled.div`
grid-area:blockDisD2;
color: #949494;
overflow:hidden;
font-size:14px;
font-style: oblique;

`

export  const BlockImg = styled.img`

overflow:hidden;
grid-area:img;

`
export  const BlockImgT = styled.img`

overflow:hidden;
grid-area:imgT;

`
export const MainContent = styled.div`
overflow:hidden;
grid-area:"MainContent";
display: grid;
grid-template-rows:22px 22px 6px ;
grid-template-columns: 135px 70px 36px  ;
grid-template-areas:
"Name Date Read"
"LastMessage LastMessage LastMessage"
"Margin Margin Margin";
`
export const NameOperator = styled.div`
grid-area:Name;
overflow:hidden;
color:#333333;

`
export const Date = styled.div`
overflow:hidden;
grid-area:Date;
font-size:12px;
color:#949494;
`
export const Read = styled.div`
overflow:hidden;
grid-area:Read;

`
export const LastMessage = styled.div`
overflow:hidden;
grid-area:LastMessage;
color:#4d4d4d;
`
export const ZeroBLock = styled.div`
overflow:hidden;
grid-area:Margin;
`
