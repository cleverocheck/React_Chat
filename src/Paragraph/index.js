import React,{useState,useEffect} from 'react';
import {Paragraph,Collapse,Maximize,NameBar,StyledButtonBack,DivToBack} from './style.js'
import logo from './expand_ico.png'
import button from './button.png'
  const ParagraphEx = ({setAnimStatus,animStatus,sweepStatus,setsweepStatus,windowStatus,setWinStatus,transition,setTransition,backStatus,setBackStatus}) =>{

  const Сlose = () =>{
  setTransition(!transition)
    setAnimStatus(!animStatus)


  }
  const Swip = () => setsweepStatus(!sweepStatus)
  const Back = () =>{
    setWinStatus(!windowStatus)
    setBackStatus(!backStatus)
    
  }

const [title,setTitle] = useState('ЧАТ ПОДДЕРЖКИ')
const [anim,setAnim] = useState(false)


useEffect(()=>{ setTimeout(()=>windowStatus?setTitle("ВЫХОД ИЗ ДИАЛОГА"):
setTitle("ЧАТ ПОДДЕРЖКИ"),500)},[windowStatus])
useEffect(() =>setAnim(true),[windowStatus])
useEffect(() =>{setTimeout(()=>setAnim(false),1000)},[windowStatus])

return(
<Paragraph>
  <DivToBack
          backStatus = {backStatus}
          onClick = {Back}>
    <StyledButtonBack />
      </DivToBack>
        <NameBar
          anim = {anim}
          windowStatus = {windowStatus}
          setAnimStatus={setAnimStatus}
          animStatus={animStatus}>{title}</NameBar>
            <Collapse

          setAnimStatus={setAnimStatus}
          animStatus={animStatus}
          onClick = {Сlose}>-</Collapse>
                  <Maximize
          setAnimStatus={setAnimStatus}
          animStatus={animStatus} onClick = {Swip}>
          {sweepStatus?<img src = {logo}/>:<img src = {button}/>}</Maximize>
</Paragraph>)
}
  export default  ParagraphEx;
