import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';

class NewComment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviewText: ``,
      ratingStars: [false, false, false, false, false],
    };
  }

  render() {
    const {addComment} = this.props;
    const {reviewText, ratingStars: userRatingStars} = this.state;

    return (
      <div className="add-review">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addComment(reviewText, userRatingStars);
          }}
          action="#"
          className="add-review__form"
        >
          <div className="rating">
            <div className="rating__stars">
              {userRatingStars.map((star, i) => (
                <Fragment key={`star-${i + 1}`}>
                  <input
                    onChange={(e) => {
                      const value = e.target.checked;
                      this.setState({
                        ratingStars: [...userRatingStars.slice(0, i), value, ...userRatingStars.slice(i + 1)],
                      });
                    }}
                    checked={userRatingStars[i]}
                    className="rating__input"
                    id={`star-${i + 1}`}
                    type="radio"
                    name="rating"
                    value={i + 1}
                  />
                  <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={(e) => {
                const text = e.target.value;
                this.setState({reviewText: text});
              }}
              value={reviewText}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

NewComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default NewComment;
