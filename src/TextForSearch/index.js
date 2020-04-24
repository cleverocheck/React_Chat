import React from 'react';
import {CustomB} from './style.js'
export const TextForSearch = ({text,textSearch,artStatus}) =>{


  const CheckLength = (inspected) =>{

    const fontsize = 30
    let total = inspected.length>fontsize?inspected.substr(0, fontsize-3) +'...':inspected
    return total
  }

  let str = CheckLength(text)
 let strStart = str
 let strMiddle
 let strEnd


  if(str.toLowerCase().indexOf(textSearch)!= '-1'){
  strStart = str.slice(0,str.toLowerCase().indexOf(textSearch))
  strMiddle = str.slice(str.toLowerCase().indexOf(textSearch),str.toLowerCase().indexOf(textSearch) + textSearch.length )
  strEnd = str.slice(str.toLowerCase().indexOf(textSearch) + textSearch.length)
  }


  return <div>{artStatus?'Артикул:':''}{strStart}<CustomB>{strMiddle}</CustomB>{strEnd}</div>

}
