import React from "react";
import ReactPlayer from "react-player/lazy";
import "./Modal.css";
import { XIcon } from "@heroicons/react/outline";
import { FaPlay } from "react-icons/fa";

function Modal({ trailerURL, closeModal, setMovieUrl, movieInfo }) {
	return (
		<div className="modal" onClick={() => closeModal(false)}>
			<div className="modal-content">
				<div className="modal-button">
					<XIcon className="" color="white" onClick={() => closeModal(false)} />
				</div>
				<div className="player-wrapper">
					<div className="modal-button-1">
						<button className="modal-button-1-wrapper">
							<FaPlay className="Faplay" />
							Play
						</button>
					</div>
					<ReactPlayer
						className="react-player"
						width="100%"
						height="100%"
						url={`https://www.youtube.com/watch?v=${trailerURL}`}
						playing={true}
					/>
				</div>

				<div className="modal-body">
					<div className="modal-body-container">
						<div className="modal-info">
							<p className="modal-info-0">
								{movieInfo.vote_average * 10}% Match
							</p>
							<p>{movieInfo.release_date || movieInfo.first_air_date}</p>
							<div>HD</div>
						</div>
						<div className="modal-info-1">
							<p>{movieInfo.overview}</p>
						</div>
					</div>
					<div className="modal-body-info">
						<div className="modal-body-info-2">
							<span className="modal-body-subInfo">Genres: </span>
							Fantasy, Action, Thriller
						</div>
						<div className="modal-body-info-2">
							<span className="modal-body-subInfo">Original language: </span>
							{movieInfo.original_language}
						</div>
						<div className="modal-body-info-2">
							<span className="modal-body-subInfo">Total votes: </span>
							{movieInfo.vote_count}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
