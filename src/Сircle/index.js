 import React, { useState }from 'react';
 import {ButtonToChat,Img} from './style.js'
 import logo from './launcher.png'

   const ButtonToChatEx = ({setAnimStatus,animStatus}) =>{
const Click = () =>setAnimStatus(!animStatus)
   return <ButtonToChat animStatus = {animStatus}>

   <Img src ={logo} onClick = {Click}  />


   </ButtonToChat>
 }
export default ButtonToChatEx;
