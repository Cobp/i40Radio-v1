import React, { useState } from 'react'
import BotonMenu from './BurguerButton'
import Audio from './../components/AudioPlayer'
import logoPrincipal from './../assets/Img/logo_white.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <Container>
      <Containernav>
        <div className='nav'>
          <div className='hamburguer'>
            <BotonMenu clicked={clicked} handleClick={handleClick} />
          </div>
          <img src={logoPrincipal} alt='' className='logo' />
          <div className={`links ${clicked ? 'active' : ''}`}>
            <Link to='/' onClick={handleClick} >Inicio</Link>
            <Link to='/Podcast' onClick={handleClick} >Podcast</Link>
            <Link to='/Programas' onClick={handleClick} >Programas</Link>
            <a className='ContactBtn' href='#Contacto' onClick={handleClick}>Contactos</a>
          </div>
        </div>
        <div className='logBtn'>
        <p>ESTAMOS EN VIVO...</p>
          <Play>
            <Audio />
          </Play>
        </div>
      </Containernav>
    </Container>
  )
}

const Container = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@600&display=swap');
  position: relative;
  z-index: 20;
`
  const Containernav = styled.div`
  position: fixed;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FF6000;
  box-shadow: -10px 0px 15px #000;
  img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .nav{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hamburguer{
    display: none;
  }
  .logo{
    margin-left: 25px;
    width: 80px;
  }
  .links{
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    gap: 0.5rem;
  }
  .links a{
    font-family: 'League Spartan', sans-serif;
    text-decoration: none;
    color: #FFF;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 5px;
    border-radius: 4px;
  }
  .links a:hover{
    color: #403d38;
  }
  .links a:focus{
    background-color: #403d38;
    color: #fff;
  }
  .logBtn{
    display: flex;
    align-items: center;
    flex-direction: row;
    p{
      margin: 0;
      color: #fff;
      animation: bliker 3s infinite;
      @keyframes bliker {
        0%{
          opacity: 1;
        }
        50%{
          opacity: 0;
        }
      }
    }
  }
  .login{
    font-size: 30px;
    color: #000;
    background-color: #f8f7f3;
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all.5s ease;
  }
  .login:hover{
    background-color: #403d38;
    color: #f8f7f3;
    transform: scale(1.1);
  }

  @media screen and (max-width:760px) {
    .nav{
      width: 63%;
      justify-content: space-between;
    }
    .hamburguer{
      display: flex;
    }
    .logo{
    display: none;
  }
    .links {
      position: absolute;
      background-color: #403d38;
      left: -20px;
      top: 48px;
      width: 160px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      transition: transform .5s ease;
      transform: translateX(-100%);
    }
    .links a{
      margin: 5px 15px;
      display: flex;
    }
    .links.active{
      transform: translateX(0);
    }
    .logBtn{
      margin-right: 5px;
    }
  }
`
const Play = styled.div`

`
export default Navbar
