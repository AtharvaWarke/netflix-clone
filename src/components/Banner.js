import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css"

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	console.log(movie);

	return (
		<header
			className="banner-container"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner-overlay">		
			<div className="banner-contents">
				<h1 className="banner-title">{movie.title || movie.name || movie.original_name}</h1>
				<div className="banner-button-container">
					<button className="banner-button">Play</button>
					<button className="banner-button">My List</button>
				</div>
        <h1 className="banner-description">
          {movie.overview}
        </h1>
			</div>
	
      <div className="banner-blur"></div>
			</div>
		</header>
	);
}

export default Banner;
