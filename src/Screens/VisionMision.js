import React from 'react'
import styled from "styled-components"

const VisionMision = () => {
    return (
        <Container>
            <div className='container'>
                <h1>VISIÓN</h1>
                <h3>LO QUE QUEREMOS</h3>
                <p>
                Ser un ministerio que alcance con el evangelio a la sociedad boliviana e hispana y edificar al pueblo cristiano con una comunicación ferviente, contemporánea, creativa y Cristo céntrica, de tal manera, que se logre un impacto e influencia con valores bíblicos, en su forma de pensar y vivir en la comunidad cristiana y secular.
                </p>
            </div>
            <div className='container'>
                <h1>MISIÓN</h1>
                <h3>LO QUE HACEMOS</h3>
                <p>
                Cumplir con la misión de Dios de predicar el evangelio para alcanzar a los no alcanzados y edificar al pueblo cristiano hispano parlante, a través de la radio y de las redes sociales.
                </p>
            </div>
            <div className='container'>
            <h1>VALORES</h1>
                <ul>
                    <li>
                        Valoramos la predicación y la enseñanza bíblica con calidad, profundidad y sencillez en todos sus contenidos.
                    </li>
                    <li>
                        Valoramos la creatividad en la difusión del mensaje del evangelio de Cristo.
                    </li>
                    <li>
                        Valoramos la edificación espiritual de toda la comunidad cristiana a travéz de las predicaciones y enseñanzas bíblicas a través de la radio y las redes sociales.
                    </li>
                    <li>
                        Valoramos el profesionalismo y el compromiso en proclamar el evangelio con fidelidad.
                    </li>
                </ul>
            </div>
        </Container>
    )
}
const Container = styled.div`
max-width: 1200px;
display: flex;
justify-content: center;
align-items: center;
/* flex-wrap: wrap; */
flex-direction: column;
color: #fff;
gap: 2rem;
margin: 80px 20px;
.container{
    display: flex;
    flex-direction: column;
    pointer-events: none;
    /* max-width: 350px; */
    background-color: rgba(41, 41, 41, .5);
    border-radius:0 14px 14px 14px;
    padding: 10px 50px;
    /* flex-basis: 350px; */
}
h1, h3, p{
    margin: 0;
    line-height: 1.2;
}
h3{
    text-decoration: none;
    position: relative;
    border-radius: 0 8px 8px 0;
    width: 250px;
    left: -50px;
    background-color: #ff6000;
    font-size: 20px;
    margin: 10px 0 15px 0;
    padding: 0 0 0 50px;
}
p{
    font-size: 20px;
}
h1{
    position: sticky;
    top: 0;
    left: -50px;
    padding-left: 50px;
    width: 250px;
    position: relative;
    border-radius: 0 14px 14px 0;
    
}
@media screen and (max-width:760px){
    h1{
    position: relative;
    border-radius: 0 14px 14px 0;
    &::before{
        height: 40px;
    }
}
}
`
export default VisionMision
