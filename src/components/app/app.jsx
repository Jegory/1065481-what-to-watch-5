import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import AddReview from "../add-review/add-review";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import Player from "../player/player";

const App = (props) => {
  const {movieInfoCard} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main movieInfoCard={movieInfoCard}/>
        </Route>

        <Route exact path="/login" component={SignIn} />
        <Route exact path="/mylist" component={MyList} />
        <Route exact path="/films/:id" component={MoviePage} />
        <Route exact path="/films/:id/review" component={AddReview} />
        <Route exact path="/player/:id" component={Player} />

        <Route>
          <h1>Not Found</h1>
        </Route>

      </Switch>
    </BrowserRouter>
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
