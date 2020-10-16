import PropTypes from "prop-types";

export const Films = PropTypes.shape({
  id: PropTypes.number.isRequired,
  titleFilm: PropTypes.string.isRequired,
  genreFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  ratingScore: PropTypes.string.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}).isRequired;

