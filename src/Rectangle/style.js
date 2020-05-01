import styled from 'styled-components'
import ButtonToChatEx from '../Сircle/index.js'


export const Window = styled.div`
    width: 375px;
    background-color: white;
    position: fixed;
    right: 25px;
    margin-bottom: ${props => props.animStatus?'-50px' :'-100px'};
    opacity: ${props => props.animStatus?'1' :'0'};
    display: flex;
    visibility: ${props => props.animStatus?'visible':'hidden'};
    box-shadow: 0px 7px 40px 1px #717171;
    flex-direction: column;
    justify-content: flex-start;
    transition: 0.4s cubic-bezier(.25,.64,.52,.85);

    font-family: 'Roboto Condensed', sans-serif;
    z-index: 999;
    bottom: 75px;
    height: ${props => props.sweepStatus?'95.5%' :'55%'};`

    export const FirstBlock= styled.div`
    height:${props => props.windowStatus?'0%':'100%'};
    overflow:auto;
`

export const BlockForMessages = styled.div`

display:${props => props.windowStatus?'block': 'none'};
height:100%;
overflow:auto;
`
