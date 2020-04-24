 import React from 'react';
 import {Paragraph} from './style.js'
 const AboutMessage = ({windowStatus,id,transition,setTransition}) =>{
   return<Paragraph id = {id}windowStatus ={windowStatus}>Информация по id:{id}</Paragraph>
 }
 export default AboutMessage;
