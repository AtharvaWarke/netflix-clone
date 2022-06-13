import React, { useState, useEffect } from "react";
import axios from "../axios";
import Modal from "./Modal";
import "./Row.css";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/w200";

function Row({ title, fetchURL, isLargeRow }) {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovie(request.data.results);
			console.log(request);
		}

		fetchData();
	}, [fetchURL]);

	const [showModal, setShowModal] = useState(false);

	const [movieUrl, setMovieUrl] = useState("");

	const [movieInfo, setMovieInfo] = useState([]);

	const handleClick = (movie) => {
		if (movieUrl) {
			setMovieUrl("");
			setShowModal(false);
			setMovieInfo([]);
		} else {
			// console.log(movie.id)
			movieTrailer(null, { tmdbId: movie.id })
				.then((url) => {
					// console.log(url)
					const urlParams = new URLSearchParams(new URL(url).search);
					setMovieUrl(urlParams.get("v"));
					setMovieInfo(movie);
				})
				.catch(console.error());
			setShowModal(true);
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row-poster-container">
				{movie.map((movie) => (
					<img
						key={movie.id}
						className={`row-poster ${isLargeRow && "row-poster-large"}`}
						src={`${baseURL}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>
			{showModal && (
				<Modal
					trailerURL={movieUrl}
					closeModal={setShowModal}
					setMovieUrl={setMovieUrl}
					movieInfo={movieInfo}
				/>
			)}
		</div>
	);
}

export default Row;
