import React,{useState}from 'react';
import checkRead  from './checkRead.png'
import {TextForSearch,Messages} from '../TextForSearch/index.js'
import {
 BlockEx,
 FirstBlock,
 DiscraptionBlock,
 HeaderBlock,
 DiscraptionBlocks,
 DiscraptionBlocksDown,
 BlockImg,BlockImgT,
 MainContent,
 NameOperator,
 Date,
 Read,
 LastMessage,
 ZeroBLock,
 DiscraptionBlocks2,
 DiscraptionBlocksDown2,
 } from './style.js'




 export const idBlocks = [
   {
  id: 0,
  avatar: 'id1.png',
  nameOperator: 'Максим',
  date: 'вчера 11:15',
  lastMessage: 'Скажите а сколько магнитол у вас есть?',
  photoAd: 'id2.png',
  checkRead: true,
  titleAd: 'Магнитола',
  priceAd: '2500,00',
  article: 'Неизвестно',
  manufacture: 'Dacia',
  hidden:false,
  message:[
    {
      view:'his', // his -свое сообщение, him - сообщение собеседника, time-время
      time:'13:55',
      content:'Привет'
    },
    {
      view:'time',
    time:'00:00',
    content:'30 ноября 2019 года'
  },
    {
      view:'him',
    time:'18:55',
    content:'Привет'
    },
    {
      view:'him',
    time:'19:55',
    content:'Че надо?'
    },
    {
      view:'his',
    time:'11:15',
    content:'Скажите а сколько магнитол у вас есть?'
  }

  ]



}
   ,
   {
  id: 1,
  avatar: 'undefined.jpg',
  nameOperator: 'Сергей',
  date: 'вчера 14:15',
  lastMessage: 'Скажите а сколько General Motors Motor Oil Dexos 2 у вас есть?',
  photoAd: 'id1.png',
  checkRead: false,
  titleAd: 'General Motors Motor Oil Dexos 2',
  priceAd: '992,02',
  article: 'Неизвестно',
  manufacture: 'Audi',
  hidden:false,
  message:[
    {
      view:'his', // his -свое сообщение, him - сообщение собеседника, time-время
      time:'13:55',
      content:'Привет'
    },
    {
      view:'time',
    time:'00:00',
    content:'30 ноября 2019 года'
  },
    {
      view:'him',
    time:'18:55',
    content:'Привет'
    },
    {
      view:'him',
    time:'19:55',
    content:'Че надо?'
    },
    {
      view:'his',
    time:'14:15',
    content:'Скажите а сколько General Motors Motor Oil Dexos 2 у вас есть?'
  }

  ]


},
{
  id: 2,
  avatar: 'undefined.jpg',
  nameOperator: 'Егор',
  date: 'вчера 14:15',
  lastMessage: 'Скажите а сколько болтов мелких у вас есть?',
  photoAd: 'undefined.png',
  checkRead: true,
  titleAd: 'Болт маленький',
  priceAd: '257,00',
  article: '15543S',
  manufacture: 'KIA',
  hidden:false,
  message:[
    {
      view:'his', // his -свое сообщение, him - сообщение собеседника, time-время
      time:'13:55',
      content:'Привет'
    },
    {
      view:'time',
    time:'00:00',
    content:'30 ноября 2019 года'
  },
    {
      view:'him',
    time:'18:55',
    content:'Привет'
    },
    {
      view:'him',
    time:'19:55',
    content:'Че надо?'
    },
    {
      view:'his',
    time:'14:15',
    content:'Скажите а сколько болтов мелких у вас есть?'
  }
]



},
{
  id: 3,
  avatar: 'undefined.jpg',
  nameOperator: 'Кирилл',
  date: 'вчера 9:15',
  lastMessage: 'Скажите а сколько мотору лет?',
  photoAd: 'undefined.png',
  checkRead: true,
  titleAd: 'Мотор',
  priceAd: '23200,00',
  article: '13566S',
  manufacture: 'BMW',
  hidden:false,
  message:[
    {
      view:'his', // his -свое сообщение, him - сообщение собеседника, time-время
      time:'13:55',
      content:'Привет'
    },
    {
      view:'time',
    time:'00:00',
    content:'30 ноября 2019 года'
  },
    {
      view:'him',
    time:'18:55',
    content:'Привет'
    },
    {
      view:'him',
    time:'19:55',
    content:'Че надо?'
    },
    {
      view:'his',
    time:'9:15',
    content:'Скажите а сколько мотору лет?'
  }
]




},
{
  id: 4,
  avatar: 'undefined.jpg',
  nameOperator: 'Роман',
  date: 'сегодня 11:15',
  lastMessage: 'Скажите а сколько болтов у вас есть?',
  photoAd: 'undefined.png',
  checkRead: false,
  titleAd: 'Болт большой',
  priceAd: '254,00',
  article: '15545S',
  manufacture: 'Lada',
  hidden:false,
  message:[
    {
      view:'his', // his -свое сообщение, him - сообщение собеседника, time-время
      time:'13:55',
      content:'Мир такой большой прекрасный, Открой глаза и посмотри,Он волшебный, чистый, ясный,Коль окрашен в свет души!'
    },
    {
      view:'him',
    time:'18:55',
    content:'Посмотри на, солнце, небоГоры, море и леса!В чистоте, где бы ты не был,Первозданна – красота…'
    },
    {
      view:'his',
    time:'11:55',
    content:'Рай души - подобен солнцу!В тебе волшебный луч горит!К своему родному свету,Путь – дорогу отыщи!'
    },
    {
      view:'time',
    time:'00:00',
    content:'30 ноября 2019 года'
  },
    {
      view:'his',
    time:'16:55',
    content:'Припев:А ты откройся, себе откройся,И лети, лети, лети, лети!!!Навстречу солнцу, навстречу свету,навстречу истине своей души!Откройся солнцу, откройся светуИ земли волшебной красоте!Откройся солнцу, откройся свету!'
  }
,  {
    view:'him',
  time:'18:55',
  content:'Рай в тебе, в душе и на земле!БриджТьмы у каждого –так много!От нее не убегай!К свету отыскав дорогу!Тьму лучами разгоняй!'
  },
  {
    view:'his',
  time:'11:55',
  content:'Че делаешь?'
  },
  {
    view:'his',
  time:'16:55',
  content:'Ни че'
},  {
    view:'him',
  time:'18:55',
  content:'Пока'
  },

  {
    view:'his',
  time:'11:15',
  content:'Скажите а сколько болтов у вас есть?'
}
  ]

}]



 const ContentBlock =({setWinStatus,windowStatus,setId,transition,setTransition,backStatus,setBackStatus,hidden,setHidden,render,setRender,title,setTitle,find,textSearch}) =>{
 const [hiddenStatus,setHiddenStatus] = useState(true)

if(hiddenStatus){for(let i = 0;i<idBlocks.length;i++){
  hidden.splice(i,1,false)

  setHiddenStatus(false)

}}
     const Click = (id) =>{
       setWinStatus(true)
       setId(id)
       setTransition(!transition)
       setTimeout(() =>setBackStatus(!backStatus),600)

     }
     const CheckLength = (inspected) =>{
       const fontsize = 30
       let total = inspected.length>fontsize?inspected.substr(0, fontsize-3) +'...':inspected
       return total
     }


    const [message,setMessage] = useState()

    return(idBlocks.map((data) =><BlockEx render = {render} hidden = {hidden[data.id]} id = {data.id}windowStatus = {windowStatus } data-id = {data.id}onClick = {() =>Click(data.id)}>

   < HeaderBlock >
   <BlockImg hidden = {data.hidden}src = {require(`./avatars/${data.avatar}`)} ></BlockImg>
   <MainContent>
   <NameOperator>{CheckLength(data.nameOperator)}</NameOperator>
   <Date>{data.date}</Date>
   <Read>{data.checkRead?<img src = {checkRead}/>:''}</Read>
   <LastMessage>{CheckLength(data.lastMessage)}</LastMessage>
   <ZeroBLock></ZeroBLock>
   </MainContent>
   <BlockImgT src = {require(`./adImg/${data.photoAd}`)} ></BlockImgT>
   </ HeaderBlock >
   < DiscraptionBlock>
   <DiscraptionBlocks ><TextForSearch setRender = {setRender} render = {render}text = {data.titleAd} textSearch = {textSearch}/></DiscraptionBlocks>
   <DiscraptionBlocks2>Цена:{CheckLength(data.priceAd)}р</DiscraptionBlocks2>
   <DiscraptionBlocksDown ><TextForSearch setRender = {setRender} render = {render}artStatus = 'true'text = {data.article} textSearch = {textSearch}/></DiscraptionBlocksDown>
   <DiscraptionBlocksDown2 ><TextForSearch setRender = {setRender} render = {render} text = {data.manufacture} textSearch = {textSearch}/></DiscraptionBlocksDown2>
   </ DiscraptionBlock>
      </BlockEx>




 ))}

export default ContentBlock;
