import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Films} from '../../prop-types';

import NewComment from '../film-list/film-list';

const AddReview = (props) => {
  const {
    film: {
      titleFilm,
      poster,
    },
    addComment,
  } = props;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="/films/:id" className="breadcrumbs__link">{titleFilm}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="/films/:id/review" className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={poster}
              alt={`${titleFilm} poster`}
              width="218"
              height="327"
            />
          </div>
        </div>

        <NewComment addComment={addComment} />

      </section>
    </Fragment>
  );
};

AddReview.propTypes = {
  film: Films,
  addComment: PropTypes.func.isRequired,
};

export default AddReview;
