 import React ,{useState} from 'react';
 import {Window,Paragraph,Collapse,FirstBlock,FlexBlock,BlockForMessages} from './style.js'
 import ParagraphEx from '../Paragraph/index.js'
 import Search from '../Search/index.js'
 import ContentBlock from'../Blockmessage/index.js'
 import AboutMessage from '../Messages/index.js'
 import PanelEx from  '../BottomPanel/index.js'
 import MessagesBlock from '../ContentMessages/index.js'
  import {idBlocks} from '../Blockmessage/index.js'

 const WindowEx = ({animStatus,setAnimStatus,sweepStatus,setsweepStatus}) =>{

   const [windowStatus,setWinStatus] = useState(0);
   const [id,setId] = useState(undefined)
   const [transition,setTransition] = useState(false)
   const [backStatus,setBackStatus] = useState(false)
   const [hidden,setHidden] = useState([])
  const [render,setRender] = useState(false)
  const [textSearch,setTextSearch] = useState('')



   return<Window
          animStatus = {animStatus}
          setAnimStatus = {setAnimStatus}
          sweepStatus = {sweepStatus}
          setsweepStatus = {setsweepStatus}  >
            <ParagraphEx

            backStatus= {backStatus}
            setBackStatus = {setBackStatus}
          transition = {transition}
          setTransition = {setTransition}
          setWinStatus = {setWinStatus}
          windowStatus = {windowStatus}
          animStatus = {animStatus}
          setAnimStatus = {setAnimStatus}
          sweepStatus = {sweepStatus}
          setsweepStatus = {setsweepStatus} ></ParagraphEx>

              <AboutMessage

          transition = {transition}
          setTransition = {setTransition}
          windowStatus ={windowStatus}
          id={id}/>
                <Search

          setTextSearch = {setTextSearch}
          setRender ={setRender}
          render = {render}
          hidden = {hidden}
          setHidden = {setHidden}
          transition = {transition}
          setTransition = {setTransition}
          windowStatus = {windowStatus}></Search>

            <FirstBlock windowStatus = {windowStatus}>


                <ContentBlock
          textSearch = {textSearch}
          render = {render}
          setRender = {setRender}
          hidden = {hidden}
          setHidden = {setHidden}
          backStatus= {backStatus}
          setBackStatus = {setBackStatus}
          transition = {transition}
          setTransition = {setTransition}
          setId = {setId}
          windowStatus = {windowStatus}
          setWinStatus = {setWinStatus}/>

            </FirstBlock>
            <BlockForMessages windowStatus = {windowStatus}>{windowStatus?<MessagesBlock
          windowStatus = {windowStatus}
          id = {id}>
            </MessagesBlock>:''
  }</BlockForMessages>


          <PanelEx

          data = {idBlocks[id]}
          sweepStatus = {sweepStatus}
          windowStatus = {windowStatus}/>

</Window>

 }

export default WindowEx;
