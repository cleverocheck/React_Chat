 import React,{useState} from 'react';
 import {Paragraph,MainBlock,ImgBLock,PhotoAd,InfoBlock,TextBlock,ButtonBlock,Button} from './style.js'
 import {idBlocks} from '../Blockmessage/index.js'
 const AboutMessage = ({windowStatus,id,transition,setTransition}) =>{

   const [img,setImg] = useState('undefined.png')
   setTimeout(()=>{if(windowStatus){setImg(idBlocks[id].photoAd)}})
   const CheckLength = (inspected) =>{
     const fontsize = 27
     let total = inspected.length>fontsize?inspected.substr(0, fontsize-3) +'...':inspected
     return total
   }
   return<Paragraph id = {id}windowStatus ={windowStatus}>
   <MainBlock>
     <ImgBLock>
   <PhotoAd  src = {require(`../Blockmessage/adImg/${img}`)}/>

   </ImgBLock>
   <InfoBlock>
   <TextBlock>{windowStatus?CheckLength(idBlocks[id].titleAd):''}</TextBlock>
   <TextBlock>{windowStatus?CheckLength(`Артикул:` +idBlocks[id].article):''}</TextBlock>
   <TextBlock>{windowStatus?CheckLength(`Производитель:` +idBlocks[id].manufacture):''}</TextBlock>
   <TextBlock>{windowStatus?CheckLength(`Цена:`+idBlocks[id].priceAd):''}</TextBlock>
   </InfoBlock>
   <ButtonBlock>
   <Button onClick = {() =>console.log(`Кликнули по обьявлению №${id}`)}>к объявлению ></Button>
   </ButtonBlock>
   </MainBlock></Paragraph>
 }
 export default AboutMessage;
