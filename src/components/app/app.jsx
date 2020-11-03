import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import UserPage from '../user-page/user-page';
import FilmPage from '../film-page/film-page'; // my-list
import {Films} from '../../prop-types';

const App = (props) => {
  const {movieInfoCard, films} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/"
          render={({history}) => (
            <Main
              movieInfoCard={movieInfoCard}
              films={films}
              handleMovieCardClick={() => history.push(`/films/:id`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
              handlePlayBtnClick={() => history.push(`/player/:id`)}
            />
          )}
        />

        <Route exact path="/login" component={SignIn} />

        <Route exact path="/player/:id">
          <Player
            film={films[0]} />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview
            film={films[0]}
            addComment={() => {}}
          />
        </Route>

        <Route exact path="/mylist"
          render={({history}) => (
            <UserPage
              films={films}
              handleMovieCardClick={() => history.push(`/films/:id`)}
            />
          )}
        />

        <Route exact path="/films/:id"
          render={({history}) => (
            <FilmPage
              films={films}
              film={films[0]}
              handleMovieCardClick={() => history.push(`/films/:id`)}
              handleMyListBtnClick={() => history.push(`/mylist`)}
              handlePlayBtnClick={() => history.push(`/player/:id`)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieInfoCard: PropTypes.shape({
    titleFilm: PropTypes.string.isRequired,
    genreFilm: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired
  }).isRequired,
  films: PropTypes.arrayOf(Films).isRequired,
};

export default App;
