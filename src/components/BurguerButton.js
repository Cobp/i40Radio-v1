import React from 'react'
import styled from 'styled-components'

function BurguerButton(props) {
  return (
    <Burguer>
      <div  onClick={props.handleClick} 
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  )
}

export default BurguerButton

const Burguer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  /* nav-icon-5 */
.nav-icon-5{
  width: 25px;
  height: 20px;
  margin: 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-5 span{
  background-color:#403d38;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 2px;
  transition-duration: .3s;
}
.nav-icon-5 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:8px;
  left: 0px;
  opacity:1;
}
.nav-icon-5 span:nth-child(3){
  bottom:2px;
  left: 0px;
}
.nav-icon-5:hover span{
  background-color: #fff;
  box-shadow: 0 0 5px #fff;
}
.nav-icon-5.open span:nth-child(1){
  transform: rotate(45deg);
  top: 7px;
}
.nav-icon-5.open span:nth-child(2){
  opacity:0;
}
.nav-icon-5.open span:nth-child(3){
  transform: rotate(-45deg);
  top: 7px;
}
`