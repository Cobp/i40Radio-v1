import React from 'react'
import styled from 'styled-components'

const SliderText = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <TextoVrs class="d-block w-100">
                    ¡Que todo lo que respira cante alabanzas al Señor!<br></br>
                        ¡Alabado sea el Señor!<br></br><br></br>
                        Salmos 150:6
                    </TextoVrs>
                </div>
                <div class="carousel-item">
                    <TextoVrs class="d-block w-100">
                    Estén siempre llenos de alegría en el Señor. Lo repito, ¡alégrense!  Que todo el mundo vea que son  considerados en todo lo que hacen.<br></br> Recuerden que el Señor vuelve pronto.<br></br><br></br>
                        Filipenses 4:4-5
                    </TextoVrs>
                </div>
                <div class="carousel-item">
                    <TextoVrs class="d-block w-100">
                    Así fue porque Esdras había decidido estudiar y obedecer la ley del Señor y enseñar sus decretos y ordenanzas al pueblo de Israel.<br></br><br></br>
                        Esdras 7:10

                    </TextoVrs>
                </div>
            </div>
        </div>
    )
}
const TextoVrs = styled.div`
    width: 300px;
    height: 440px;
    text-align: center;
    color: #f7f8f3;
    font-size: 25px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:760px){
        font-size: 18px;
        height: 300px;
    }
    .carousel-item{
        transition: transform 5s ease-in-out;
    }
`
export default SliderText
