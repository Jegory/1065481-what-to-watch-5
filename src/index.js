import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const InformDeskVideo = {
  titleFilm: `The Grand Budapest Hotel`,
  genreFilm: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App
      movieInfoCard = {InformDeskVideo}
      films = {films}
    />,
    document.getElementById(`root`)
);
