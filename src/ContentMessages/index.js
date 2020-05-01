import React,{useState} from 'react';
import {MyMesage,HimMesage,TimeInfo,Button,Time,Tdiv,StyledButtonInfo,Info,Ans,Delete,Quote,Line,Content,Name,ContentBlock,Avatar,ContentBlockQ,WhoM,AdImg } from './style.js'
import {idBlocks} from '../Blockmessage/index.js'
const MessagesBlock = ({windowStatus,id,render,setRender,lastData,setLastData,renderPanel,setRenderPanel,avaStatus}) =>{

  const CheckLength = (inspected) =>{
    const fontsize = 20
    let total = inspected.length>fontsize?inspected.substr(0, fontsize-3) +'...':inspected
    return total
  }
const renderNpanel = (data) =>{

  if(data.info ==true){
    data.info = false
    setLastData(undefined)
  }else{
  data.info =true
  setLastData(data)
  }
  if(lastData != undefined){

    lastData.info = false
    }



  setRender(!render)
  setRender(!render)

}
const deleteMessage = (data) =>{
  data.view = 'delete'
  for(let i =0; i<idBlocks[id].message.length;i++){
    if(idBlocks[id].message[i].view == 'delete')
    {idBlocks[id].message.splice(i,1)
    }
  }

  if(idBlocks[id].message[idBlocks[id].message.length -1]!= undefined){
    if(idBlocks[id].message[idBlocks[id].message.length -1].view =='time'){
    idBlocks[id].message.splice(idBlocks[id].message.length -1,1)
  }}
  data.info =false
  setLastData(undefined)
  setRender(!render)
  setRender(!render)


}
const answerMessage = (data) =>{
  if(data.view == 'his'){idBlocks[id].quote = 'Вы:' + data.content}
  else{idBlocks[id].quote =  `${idBlocks[id].nameOperator}: ${data.content}`}
  idBlocks[id].lastWho = data.view
  data.info =false
  setLastData(undefined)
  setRenderPanel(!renderPanel)
  setRenderPanel(!renderPanel)
}
let i =0

  return (idBlocks[id].message.map((data,index) =>

<>

<MyMesage  key = {`messageN${index}`} data = {data} >
{data.url !== undefined?<AdImg src = {data.url} alt=" -error :("/>:''}
{data.quoteStatus?<Quote><Line/>
  <ContentBlock>
  <Name>{idBlocks[id].nameOperator}</Name>
  <Content>{CheckLength(data.quote)}</Content>
  </ContentBlock>
  </Quote>:''}
  <Tdiv>{data.content}</Tdiv>
  <Button onClick = {() =>renderNpanel(data)}><StyledButtonInfo/>
  </Button><Time>{data.time}</Time>
<Info z ={data.info} >
<Ans onClick = {() =>answerMessage(data)}>Ответить</Ans>
<Delete onClick = {() =>deleteMessage(data)}>Удалить</Delete>
</Info></MyMesage>
{data.ava?<WhoM>{idBlocks[id].nameOperator}</WhoM>:''}
<ContentBlockQ>
{data.ava?<Avatar src = {require(`../Blockmessage/avatars/${idBlocks[id].avatar}`)}></Avatar>:''}


<HimMesage data = {data}><Tdiv>{data.content}

</Tdiv>
  <Button onClick = {() =>renderNpanel(data)} >
  <StyledButtonInfo/>
  </Button>
  <Info z ={data.info} >
  <Ans onClick = {() =>answerMessage(data)}>Ответить</Ans>
  <Delete onClick = {() =>deleteMessage(data)} >Удалить</Delete>
  </Info>
  <Time>{data.time}</Time></HimMesage>

  <TimeInfo data = {data}>{data.content}</TimeInfo>
</ContentBlockQ>
</>
))


}

export default MessagesBlock;
