import React from 'react'
import {BsSpotify} from 'react-icons/bs'
import styled from 'styled-components'
import img1 from './../assets/Img/logo_with_orange_bg.jpg'

function Podcast() {
  return (
    <Container>
      <div className='podcast_container'>
        <div className='contentSpotify prime'>
        <div className='LogoSpotify'>
          <img src={img1} alt=''/>
          <BsSpotify className='icon'/>
        </div>
          <button className='botonSpotify' onClick={() => window.open('https://open.spotify.com/show/2S3cGw6i04i5haA3sX0dfz?si=b341cd23acfe4664', '_blank')}>Ir a Spotify</button>
        </div>
        <div className='contentSpotify'>
          <p>Podcast</p>
          <h1>i40 RADIO</h1>
          <h2>Mensajera de Buenas Noticias</h2>
        </div>
      </div>
      <div className='podcast_content'>
      <iframe src="https://open.spotify.com/embed/episode/4ZZhAhR3K31bEkwlk25zQQ?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe src="https://open.spotify.com/embed/episode/0I9jICYg6NQEh0WraFqN7T?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe src="https://open.spotify.com/embed/episode/7Mk9mtkJimUj59nj66jlUA?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe src="https://open.spotify.com/embed/episode/3hCNJsdpevIqxLSODqm9VE?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe src="https://open.spotify.com/embed/episode/1jSIo9Y7QD0D4hy2CBnfn6?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <div class="bloqueador">
        <h1>Acceso Completo en Spotify</h1>
      </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 50px 10px 10px 10px;
gap: 2rem;
.prime{
  align-items: center;
}
.podcast_container{
  display: flex;
}
.LogoSpotify{
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 10px #403d38;
  max-width: 200px;
  margin: 10px;

}
.contentSpotify{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  color: #fff;
}
.icon{
  position: absolute;
  top: 10px;
  left: 10px;
  color: #fff;
  font-size: 20px;
}
.botonSpotify{
  border-radius: 4px;
  background: none;
  outline: none;
  border:1px #1db954 solid;
  color: #1db954;
  padding: 5px;
  transition: all .5s ease;
  &:hover{
    background: #1db954;
    color: #fff;
    transform: scale(1.05);
  }
}
  img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .podcast_content{
    position: relative;
  }
  .bloqueador{
    position: absolute;
    width: 100%;
    height: 80%;
    top: 20%;
    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-image: linear-gradient(to top, rgb(76, 83, 77) 0%, rgba(55, 61, 56, 0.2) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}
.bloqueador h1{
    width: 200px;
    text-align: center;
    font-family: 'League Spartan', sans-serif;
    color: #f8f7f3;
}
`


export default Podcast
