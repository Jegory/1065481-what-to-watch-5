import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Films} from '../../prop-types';

import SmallCard from '../small-movie-card/small-movie-card';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {startFilm: 0};
  }

  render() {
    const {films, handleMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) =>
          <SmallCard
            key={film.id}
            film={film}
            handleMovieCardMouse={() => {
              this.setState({startFilm: film.id});
            }}
            handleMovieCardClick={handleMovieCardClick}
          />
        )}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(Films).isRequired,
  handleMovieCardClick: PropTypes.func.isRequired,
};

export default FilmsList;
