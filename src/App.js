import "./App.css";
import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow
			></Row>
			<Row title="Trending" fetchURL={requests.fetchTrending}></Row>
			<Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
			<Row title="Documantaries" fetchURL={requests.fetchDocumantaries}></Row>
		</div>
	);
}

export default App;
