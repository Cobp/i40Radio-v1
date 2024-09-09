import React, { useState } from 'react'
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaMapLocationDot, FaPhone } from 'react-icons/fa6'
import { MdMarkEmailRead } from 'react-icons/md'
import styled from 'styled-components'



function Contacts() {
  const [text] = useState('78119994');
  const [email] = useState('i40radio.bo@gmail.com');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  const copyToClipboardemail = () => {
    navigator.clipboard.writeText(email);
  }

  return (
    <Ultimo id='Contacto'>
      <div className='container'>
        <div className='location'>
          <Titulo>Ubicación y Contacto</Titulo>
          <button onClick={() => window.open('https://maps.app.goo.gl/76YfmdCDa1pSzsbBA', '_blank')}><FaMapLocationDot />Calle Ríos de Agua Viva #5475</button>
          <button onClick={copyToClipboard} ><FaPhone />{text}</button>
          <button onClick={copyToClipboardemail} ><MdMarkEmailRead />{email}</button>
        </div>
        <div className='contacts'>
          <Titulo>Redes Sociales</Titulo>
          <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=78119994&text&type=phone_number&app_absent=0', '_blank')}><BsWhatsapp />Whatsapp</button>
          <button onClick={() => window.open('https://www.facebook.com//i40radio', '_blank')}><BsFacebook />Facebook</button>
          <button onClick={() => window.open('https://www.instagram.com/i40radio', '_blank')}><BsInstagram />Instagram</button>
        </div>
      </div>
      <p>Copyright <span>© i40Radio {new Date().getFullYear()}.</span>
      </p>
    </Ultimo>
  )
}
const Ultimo = styled.footer`
  background-color: #000;
  color: #f7f8f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding:40px 20px;
  gap: 2rem;
  box-shadow: 0 0 20px #000;
  border-radius: 12px 12px 0px 0;
  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;
    gap: 3rem;
  }
  .location,
  .contacts{
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    flex-basis: 200px;
    gap: 0.5rem;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 4px;
    background: rgba(255, 255, 255, .1);
    color: #f7f8f3;
    border: none;
    cursor: pointer;
    gap: 0.5rem;
    &:hover{
      background: rgba(255, 255, 255, .2);
    }
  }
  button svg{
    font-size: 18px;
  }
  p{
    pointer-events: none;
  }
  @media screen and (max-width:760px){
    padding:70px 20px;
  }
`
const Titulo = styled.h1`
  font-size: 20px;
  text-align: center;
  pointer-events: none;
`

export default Contacts
