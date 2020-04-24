import React from 'react';
import {MyMesage,HimMesage,TimeInfo,Button,Time,Tdiv} from './style.js'
import {idBlocks} from '../Blockmessage/index.js'
const MessagesBlock = ({windowStatus,id}) =>{
  return (idBlocks[id].message.map((data) =>
<>
<MyMesage data = {data}><Tdiv>{data.content}</Tdiv><Button>V</Button><Time>{data.time}</Time></MyMesage>
<HimMesage data = {data}><Tdiv>{data.content}</Tdiv><Button>V</Button><Time>{data.time}</Time></HimMesage>
<TimeInfo data = {data}>{data.content}</TimeInfo>

</>
))


}
export default MessagesBlock;
