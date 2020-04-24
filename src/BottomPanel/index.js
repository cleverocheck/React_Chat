 import React, {useState,useEffect} from 'react';
 import {Panel,StyledButtonBack,Sumbit,DivButtons,AreaDiv,PrintInfo,PrintInfoBlock} from'./style.js'
  import TextareaAutosize from'./style.js'
 import send from './send.png'


 const PanalEx = ({windowStatus,sweepStatus,data}) =>{
const [tick,setTick] = useState('.')
const [eventStatus,setEventStatus] = useState(true)
const [hidden,setHidden] = useState(true)

let delayH
let delayE
const showPrint = (e) =>{
if(eventStatus){

    setHidden(false)
    delayH = setTimeout(setHidden,800,true)
    delayE =setTimeout(setEventStatus,800,true)
     setEventStatus(false)
}
}



const Tick = () =>{
clearTimeout(timer)
  if(tick != '...'){setTick(tick +  '.')}
  else{setTick('.')}
}
const checkParameters = (e) =>{

  if(e.target.value =='' ){

    setHidden(true)
    clearTimeout(delayH)
    clearTimeout(delayE)
  }
}

let timer = setTimeout(Tick,270)
   return<Panel
                windowStatus = {windowStatus}
                sweepStatus = {sweepStatus}>
                <DivButtons>
                <StyledButtonBack/>
                </DivButtons>
                <AreaDiv >
                <PrintInfoBlock>
                <PrintInfo hidden = {hidden}>
                {windowStatus?data.nameOperator:''} печатает <span>{tick}</span>
                </PrintInfo>
                </PrintInfoBlock>
                <TextareaAutosize onChange = {checkParameters} onChange = {() =>setTimeout(showPrint,100)}rowsMax={4}  />
                </AreaDiv>

                <DivButtons>
                <Sumbit src = {send}/>
                </DivButtons>
                </Panel>

 }
export default PanalEx;
