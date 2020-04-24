import styled from 'styled-components'
export const ButtonToChat = styled.div`
    width: 60px;
    height: 60px;
    position: fixed;
    right: 25px;
    bottom: 25px;
    border-radius: 50%;
    box-shadow: none;
    transition: box-shadow 0.2s ease-in-out;
    z-index:${props => props.animStatus?'0' :'1000'};
&:hover {
  cursor: pointer;
  box-shadow:0 0 15px rgba(0,0,0,0.5);
  }
`

export const Img = styled.img`
    width: 60px;
    height: 60px;
    position: fixed;
    right: 25px;
    bottom: 25px;
    transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;

`
