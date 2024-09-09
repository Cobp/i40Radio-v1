import React from 'react'
import styled from 'styled-components'

const TextCarrusel = () => {
    return (
        <Corrusel>
            <ul>
                <li>
                    <p>
                        Una voz dijo: «¡Grita!».<br></br>
                        Y yo pregunté: «¿Qué debo gritar?».<br></br>
                        «Grita que los seres humanos son como la hierba.<br></br>
                        Su belleza se desvanece tan rápido
                        como las flores en un campo.<br></br>
                        La hierba se seca y las flores se marchitan
                        bajo el aliento del Señor.<br></br>
                        Y así sucede también con los seres humanos.<br></br>
                        La hierba se seca y las flores se marchitan,
                        pero la palabra de nuestro Dios permanece para siempre».<br></br>
                        ¡Oh Sion, mensajera de buenas noticias,
                        grita desde las cimas de los montes!
                        Grítalo más fuerte, oh Jerusalén.<br></br>
                        Grita y no tengas miedo.<br></br>
                        Diles a las ciudades de Judá:
                        «¡Aquí viene su Dios!».
                    </p>
                </li>
                <li>
                    <div className='sita'>
                        <h3>Isaías 40:6-9</h3>
                    </div>
                </li>
                <li>
                    <p>
                        Una voz dijo: «¡Grita!».<br></br>
                        Y yo pregunté: «¿Qué debo gritar?».<br></br>
                        «Grita que los seres humanos son como la hierba.<br></br>
                        Su belleza se desvanece tan rápido
                        como las flores en un campo.<br></br>
                        La hierba se seca y las flores se marchitan
                        bajo el aliento del Señor.<br></br>
                        Y así sucede también con los seres humanos.<br></br>
                        La hierba se seca y las flores se marchitan,
                        pero la palabra de nuestro Dios permanece para siempre».<br></br>
                        ¡Oh Sion, mensajera de buenas noticias,
                        grita desde las cimas de los montes!
                        Grítalo más fuerte, oh Jerusalén.<br></br>
                        Grita y no tengas miedo.<br></br>
                        Diles a las ciudades de Judá:
                        «¡Aquí viene su Dios!».
                    </p>
                </li>
            </ul>
        </Corrusel>
    )
}
const Corrusel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ul{
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        animation: slide 75s linear infinite;
    }
    li{
        width: 100%;
        flex-shrink: 0;
    }
    p{
        margin-top: 15px;
    }
    h3{
        padding: 20px 0;
    }
    @keyframes slide {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-900px);
        }
    }
    @media screen and (max-width:760px){
        @keyframes slide {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-675px);
        }
    }
    }
`

export default TextCarrusel
