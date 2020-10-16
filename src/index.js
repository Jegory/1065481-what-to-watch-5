import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";

const InformDeskVideo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movieInfoCard = {InformDeskVideo}
      films = {films}
    />,
    document.querySelector(`#root`)
);
