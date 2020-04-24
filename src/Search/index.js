 import React from 'react';
 import {DivSearch} from './style.js'
 import {idBlocks} from '../Blockmessage/index.js'
 import ContentBlock from '../Blockmessage/index.js'
const Search = ({windowStatus,transition,setTransition,hidden,setHidden,render,setRender,setFind,find,setTextSearch}) =>{
  const CheckLength = (inspected) =>{
    const fontsize = 30
    let total = inspected.length>fontsize?inspected.substr(0, fontsize-3) +'...':inspected
    return total
  }
  const Sorting = (e) =>{
    setTextSearch(e.target.value.toLowerCase())
    for(let i =0;i<idBlocks.length;i++){
      let value = e.target.value.toLowerCase()
      hidden[i] = CheckLength(idBlocks[i].titleAd.toLowerCase()).includes(value)||
      CheckLength(idBlocks[i].article.toLowerCase()).includes(value)||
      CheckLength(idBlocks[i].manufacture.toLowerCase()).includes(value)||
      value == ''?false:true

      setRender(!render)
      setRender(!render)

    }
  }
 return<DivSearch
                  placeholder={"Поиск..."}
                  transition = {transition}
                  setTransition = {setTransition}
                  windowStatus = {windowStatus}
                  onInput = {Sorting} ></DivSearch>

}
export default Search;
