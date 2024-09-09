import React from 'react'
import img1 from './../assets/Programs/VDLV.jpg'
import img2 from './../assets/Programs/VP.jpg'
import img3 from './../assets/Programs/LQL.jpg'
import img4 from './../assets/Programs/LALS.jpeg'
import img5 from './../assets/Programs/LE.jpg'
import img6 from './../assets/Programs/CED.jpg'
import img7 from './../assets/Programs/CCLF.jpg'
import img8 from './../assets/Programs/DM.jpg'
import img9 from './../assets/Programs/Colab.jpg'
import img10 from './../assets/Programs/DEi40.jpg'

import styled from 'styled-components'
import SliderTex from './../components/SliderText'
import { FaSpotify } from "react-icons/fa";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";




const Programs2 = () => {
    return (
        <ContainerPrograms>
            <div className='containerVrs'>
                <h1>NUESTRA PROGRAMACIÓN</h1>
                <h2>Música, variedad de contenidos y entretenimiento.</h2>
                <div className='textSlide'>
                    <SliderTex />
                </div>
            </div>
            <div className='containercards'>
                <Cards>
                    <img src={img1} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>VOZ DE LOS VALLES</h2>
                            <h3>LUNES - 12H00</h3>
                            <div class="card__content">
                                <p>Presentamos estudios bíblicos en serie, diseñados para la meditación y aprendizajede de la doctrina de Cristo y compartidos por pastores de la Misión Bautista Internacional. Bienvenidos.</p>
                            </div>
                        </div>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img2} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>VIDA PLENA</h2>
                            <h3>LUNES - 12H00</h3>
                            <div class="card__content">
                                <p></p>
                            </div>
                        </div>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img9} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>CONEXIÓN DE VIDA </h2>
                            <h3>TODOS LOS DIAS<br /> 06H00 - 00H00</h3>
                            <div class="card__content">
                                <p>Un devocional inspirado, que se encuentra entre los principales devocionales de habla hispana.
                                    Su contenido busca glorificar a Dios y llevar su mensaje fielmente su Palabra a todas las naciones. Una enseñanza sana y fiel de las Escrituras.
                                    Una producción de Estudios El Granero, en la voz del hermano Hernán Justiniano."
                                </p>
                            </div>
                        </div>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img3} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>LO QUE LEO</h2>
                            <h3>MIÉRCOLES Y VIERNES <br />08H00 - 21H00</h3>
                            <div class="card__content">
                                <p>En este espacio encontrarás libros que te desafiarán a crecer en la gracia y el conocimiento del Señor. Bienvenido</p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn Spotify' onClick={() => window.open('https://open.spotify.com/show/0vJk0kYtT2VnbUWtc98ELF?si=38331c8210614219', '_blank')}><FaSpotify />Spotify</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img10} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>DIÁLOGO EN I40</h2>
                            <h3>LUNES-MIÉRCOLES-VIERNES<br/>13HOO</h3>
                            <div class="card__content">
                                <p>Este es un espacio de opinión sobre la realidad nacional einternacional. En el ámbito político, social y económico. Un análisis objetivo, profundo y contextual de las noticias que hacen noticia. Esto es Diálogo en i40, con Hugo Pérez Lizárraga. Bienvenidos. </p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn'><TbInfoSquareRoundedFilled/>SOLO EN VIVO</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img5} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>LA ENTREVISTA EN I40</h2>
                            <h3>MIÉRCOLES Y VIERNES - 16H00</h3>
                            <div class="card__content">
                                <p>En este espacio disfrutamos, nos reímos, aprendemos, recordamos; pero sobre todo preguntamos.  Esto es La Entrevista en i40. Bienvenidos.</p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn Spotify' onClick={() => window.open('https://open.spotify.com/show/2S3cGw6i04i5haA3sX0dfz?si=cf931a40001140e1', '_blank')}><FaSpotify />Spotify</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img4} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>LUZ A LOS SIMPLES</h2>
                            <h3>VIERNES - 19H00</h3>
                            <div class="card__content">
                                <p>Este programa responde de una manera directa, bíblica y práctica a las cuestiones de la vida, siempre basado en la palabra de Dios. Porque ella es Luz a los Simples. Bienvenidos.</p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn Spotify' onClick={() => window.open('https://open.spotify.com/show/2XZMgiDEILB0jewNvUDJZj?si=075ea2a25797456b ', '_blank')}><FaSpotify />Spotify</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img6} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>CAMINANDO EL DIA</h2>
                            <h3>SÁBADO - 09H00</h3>
                            <div class="card__content">
                                <p>Las circunstancias del día a día de nosotros, ciudadanos comunes ameritan una sencilla, pero honesta reflexión. Bienvenidos a CAMINANDO EL DÍA con Hugo Pérez Lizárraga.</p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn Spotify' onClick={() => window.open('https://open.spotify.com/show/6hfEWu9eH3UdXYuJSRy2KU?si=d448c3f949d64ea0 ', '_blank')}><FaSpotify />Spotify</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img7} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>COMPROMETIDOS CON LA FAMILIA</h2>
                            <h3>SÁBADO - 21H00</h3>
                            <div class="card__content">
                                <p>¡Creemos en la familia! ¡Creemos en el matrimonio para toda la vida! ¡Creemos en el amor hasta que la muerte nos separe! Y en el ¡Y vivieron felices para siempre! Creemos en el respeto y compromiso mutuo.
                                    
                                    Por eso estamos estamos COPROMETIDOS CON LA FAMILIA,
                                    Bienvenidos.
                                    </p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn Spotify' onClick={() => window.open('https://open.spotify.com/show/7lUIQPexOPbXTbrZEYlmoR?si=c961b26041454ea7 ', '_blank')}><FaSpotify />Spotify</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
                <Cards>
                    <img src={img8} alt='' className='imageProgram' />
                    <Cardcontent>
                        <div class="card">
                            <h2>DEMOS GRACIAS</h2>
                            <h3>DOMINGO<br /> 08H00 - 21H00</h3>
                            <div class="card__content">
                                <p>Solo Dios es digno de alabanza, Él es nuestro Creador y hemos sido creados para la gloria de su nombre.
                                    Este es un buen día para recordar y celebrar la bondad de Dios y su fidelidad, ¡Hagámoslo con acción de gracias!<br />
                                    Bienvenidos.</p>
                            </div>
                        </div>
                        <BtnCards>
                            <button className='btn Spotify' onClick={() => window.open('https://open.spotify.com/episode/1ziIXz5KJA01w88ujQYajt?si=tlIUHrO-R7ySQDDT-6VQag', '_blank')}><FaSpotify />Spotify</button>
                        </BtnCards>
                    </Cardcontent>
                </Cards>
            </div>
        </ContainerPrograms>
    )
}
const ContainerPrograms = styled.div`
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(0deg , #000 0%, rgba(255, 255, 255, 0) 100%);
    padding: 70px 10px 10px 10px;
    scroll-snap-type: x mandatory;
    overflow: auto;
    height: 100vh;
    width: 100%;
    gap: 7.5rem;
    @media screen and (max-width:760px){
        flex-direction: row;
        padding: 0px;
        .containercards{
            backdrop-filter: blur(10px);
        }
    }
    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 18px;
    }
    &::-webkit-scrollbar{
        width: 4px;
        height: 4px;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background: #fff;
    }
    .containercards,
    .containerVrs{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .containerVrs{
        position: sticky;
        max-width: 500px;
        top: 0px;
        height: 100%;
        align-items: center;
        justify-content: center;
        align-content: center;
        text-align: center;
        color: #fff;
    }
    .containercards{

        padding: 10px;
        border-radius: 14px;
        background-image: linear-gradient(0deg, rgb(0, 0, 0, 1) 0%, rgb(0, 0, 0, 0) 100%), url(https://images.pexels.com/photos/19492149/pexels-photo-19492149.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: right;
    }
    .textSlide{
        width: 300px;
        background: linear-gradient(45deg , rgba(255, 98, 0, 0.1)0%, rgba(255, 255, 255, 0.1) 100%);
        border-radius: 14px;
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1) ;
    }

`
const Cards = styled.div`
    backdrop-filter: blur(10px);
    border-radius: 14px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    gap: 2rem;
    max-width: 800px;
    .imageProgram{
        max-width: 180px;
        max-height: 180px;
        margin: 10px;
        filter: drop-shadow(0 10px 20px rgba(255, 98, 0, 0.3));
    }
    @media screen and (max-width:760px){
        backdrop-filter: blur(50px);
        background-color: transparent;
        margin: 10px;
        border: #fff 3px solid;
        .containercards{
            backdrop-filter: blur(10px);
        }
    }
`
const Cardcontent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 200px;
    color: #f8f7f3;
    gap: 0.5rem;
    .card {
    position: relative;
    max-width: 500px;
    height: 200px;
    background-color: transparent;
    color: #f8f7f3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 2px #ffffff;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card p{
    line-height: 1.2rem;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  color: #000;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 8px;
  @media screen and (max-width:760px){
        font-size: 14px;
    }
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

`
const BtnCards = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    background-color: #fff;
    &:hover{
        color: #f60;
    }
}
.btn.Spotify{
    background-color: #fff;
    &:hover{
        color: #1db954;
    }
}
`

export default Programs2
