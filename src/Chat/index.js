import React,{useState} from 'react';
import  {ChatBlock,BlockButton,BlockWindow} from './style.js';
import WindowEx from '../Rectangle/index.js';
import ButtonToChatEx from '../Сircle/index.js';




const Chat = () =>{
  const [sweepStatus, setsweepStatus] = useState(false);
  const [animStatus, setAnimStatus] = useState(false);
  return<ChatBlock>

  <BlockWindow>

  <WindowEx  setAnimStatus={setAnimStatus} animStatus={animStatus}  sweepStatus = {sweepStatus} setsweepStatus = {setsweepStatus}/>
  </BlockWindow  >
  <BlockButton>
  <ButtonToChatEx setAnimStatus={setAnimStatus} animStatus={animStatus}/>

  </BlockButton>

  </ChatBlock>
}
export default Chat;
