import React from 'react';
import img1 from './../assets/image1.jpeg';
import img2 from './../assets/image2_Spotify.jpeg';
import img3 from './../assets/image3_Contacto.jpg';
import styled from 'styled-components'

const App = () => {
	return (
		<Container>
			<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner clasico">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<a href='https://open.spotify.com/show/2S3cGw6i04i5haA3sX0dfz?si=16ec5dd58eee4e13' target="_blank"><img src={img2} className="d-block w-100" alt="..." /></a>
					</div>
					<div className="carousel-item">
						<a href='#Contacto'><img src={img3} className="d-block w-100" alt="..." /></a>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</Container>
	);
}
const Container = styled.div`
    padding: 60px 0 0 0;
	position: relative;
	@media screen and (max-width:760px) {
		padding: 0;
	}
	.clasico{
		max-width: 43rem;
		border-radius: 14px;
		@media screen and (max-width:760px) {
		border-radius: 0;
		}
	}
	.carousel-control-next{
		justify-content: end;
	}
	.carousel-control-prev{
		justify-content: start;
	}

`

export default App;
