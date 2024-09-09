import React from 'react'
import VisionMision from './VisionMision'
import Slide from './../components/Slider'
import styled from 'styled-components'
import Carrusel from './../components/TextCarrusel'
import imagen from './../assets/ScreenHome.jpeg'



const Home = () => {
  return (
    <ContainerInicio>
      <Contatiner id='Inicio' >
      <div className='content'>
        <Content>
          <Slide />
          <p>
            <Carrusel/>
          </p>
        </Content>
      </div>
    </Contatiner>
    <div className='InfoRadio'>
      <VisionMision/>
    </div>
    </ContainerInicio>
  )
}
const ContainerInicio =styled.div`
display: flex;
flex-direction: column;
background-image:  url(${imagen});
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-position: center;

.InfoRadio{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
background-color: #000;

}
`
const Contatiner = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, rgb(0, 0, 0, .5) 0%, rgb(255, 98, 0, .1) 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  .content{
    display: flex;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
    height: 100%;
    gap: 12rem;
    overflow: hidden;
  }
  .content p{
    font-size: 25px;
    width: 400px;
    text-align: center;
    color: #fff;
    pointer-events: none;
    overflow: hidden;
    margin-bottom: 3rem;
  }
  @media screen and (max-width:760px){
    background-position: center;
    padding-top: 45px;
    justify-content: start;
    .content{
      justify-content: start;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 3.5rem;
    }
    .content p{
      font-size: 20px;
      background-color: rgba(255, 255, 255, .2);
      width: 100%;
    }
  }
  @media screen and (max-width:1074px){
    .content{
    flex-direction: column;
    }
  }
`
const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 3rem;
margin: 10px 50px 25px 50px;
height: 100vh;
  @media screen and (max-width:760px){
    gap: 1.5rem;
    margin: 0;
  }
`
export default Home

