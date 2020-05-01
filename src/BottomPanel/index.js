 import React, {useState,useEffect} from 'react';
 import {Panel,StyledButtonBack,Sumbit,DivButtons,AreaDiv,PrintInfo,PrintInfoBlock,Quote,TextBlock1,TextBlock2,Cross,ZeroInput} from'./style.js'
  import TextareaAutosize from'./style.js'
 import send from './send.png'


 const PanalEx = ({windowStatus,sweepStatus,data,renderPanel,setRenderPanel,render,setRender,setDelete,deleteArea}) =>{
const [tick,setTick] = useState('.')
const [eventStatus,setEventStatus] = useState(true)
const [hidden,setHidden] = useState(true)
const [areaV,setAreaV] = useState('')
const [disabled,setDisabled] = useState('')
const [target,setTarget] = useState('')
const [shift,setShift] = useState(false)
const [url,setUrl] = useState(undefined)
if(!windowStatus && url !=undefined){
  setUrl(undefined)
}
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



setAreaV(e.target.value)
setTarget(e.target)
setRenderPanel(!renderPanel)
setRenderPanel(!renderPanel)

}
const CheckLength = (inspected) =>{
  const fontsize = 48
  let total = inspected.length>fontsize?inspected.substr(0, fontsize-3) +'...':inspected
  return total
}

let timer = setTimeout(Tick,270)

const sendMessage = () =>{

  let date = new Date()
  let hours = String(date.getHours())
  if(hours.length ==1){
    hours = '0'+ hours

  }
  let min = String(date.getMinutes())
  if(min.length ==1){
    min = '0' + min
  }

  if(areaV.replace(/\s+/g, ' ').trim() != '' || data.quote !='' ){

if(!deleteArea){
    data.message.push({
      view:'his',
    time:`${hours}:${min}`,
    content:`${areaV}`,
    info:false,
    quoteStatus:false,
    lastWho:undefined,
    quote:undefined,
    ava:false,url:url

  })

  if(data.quote !=''){
    data.message[data.message.length -1].quoteStatus = true
    data.message[data.message.length -1].quote = data.quote
    data.quote =''
  }
  document.querySelector('.Area').value = ''
setUrl(undefined)

}

setTimeout(() =>document.querySelector('.messageWindow').scrollTo(0,document.querySelector('.messageWindow').scrollHeight),1)
setAreaV('')

setRender(!render)
setRender(!render)


  }
}
const checkPressing = (e) =>{
if(deleteArea){
  setDelete(false)
}
  if (!shift && e.key == 'Enter' &&areaV.replace(/\s+/g, ' ').trim() != ''){
sendMessage()

e.target.value = ''


}
  if (e.key == 'Shift' ){
setShift(true)
}
if(!shift &&e.key == 'Enter'&& areaV.replace(/\s+/g, ' ').trim() != '' ){
setDisabled('disabled')

setTimeout(() =>setDisabled(''),10)
}

  setRender(!render)
  setRender(!render)
}
const checkShift = (e) =>{
  if(e.key == 'Shift'){
    setShift(false)
    setRender(!render)
    setRender(!render)
  }
}
const addImg = (e) =>{

  if (document.querySelector(".addImg").files[0]) {

    let fr = new FileReader();

//document.querySelector(".label").style.backgroundImage = "url(" + fr.result + ")";
//fr.readAsDataURL(document.querySelector(".addImg").files[0]);
      fr.onload = () =>setUrl(fr.result)

fr.readAsDataURL(document.querySelector(".addImg").files[0]);

  }

}
   return<Panel

                windowStatus = {windowStatus}
                sweepStatus = {sweepStatus}>
                <DivButtons className = 'label'>
                      <ZeroInput type="file" className = 'addImg'onChange = {addImg}/>
                <StyledButtonBack  />

                </DivButtons>
                <AreaDiv >

                <PrintInfoBlock>
                <PrintInfo hidden = {hidden}>
                {windowStatus?data.nameOperator:''} печатает <span>{tick}</span>
                </PrintInfo>
                </PrintInfoBlock>
                <Quote  renderPanel = {renderPanel} quote = {windowStatus? data.quote:''} >
                <TextBlock1 >{windowStatus?data.nameOperator:''}</TextBlock1>

                <TextBlock2> {windowStatus && data.quote.replace(/^.{3}/, '') !='' ? CheckLength(data.quote):'Вы: пересланное сообщение'}</TextBlock2>
                <Cross onClick = {()=> data.quote = ''}></Cross>
                </Quote >
                <TextareaAutosize
                                  className = 'Area'
                                  onKeyUp = {checkShift}
                                  disabled={disabled}
                                  onKeyDown = {checkPressing}
                                  value = {windowStatus?undefined:''}
                                  onChange = {checkParameters}
                                  onInput = {() =>setTimeout(showPrint,100)}
                                  rowsMax={4}
                                  quote = {windowStatus? data.quote:''}
                                  />

                </AreaDiv>

                <DivButtons onClick = {sendMessage}>
                <Sumbit src = {send} />
                </DivButtons>
                </Panel>

 }
export default PanalEx;
