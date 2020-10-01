import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {movieInfoCard} = props;

  return (
    <Main
      movieInfoCard = {movieInfoCard}
    />
  );
};

App.propTypes = {
  movieInfoCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};

export default App;
