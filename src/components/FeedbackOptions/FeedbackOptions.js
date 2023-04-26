import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <button
        type="button"
        onClick={onLeaveFeedback}
        className={css['feedback__btn']}
      >
        Good
      </button>
      <button
        type="button"
        onClick={onLeaveFeedback}
        className={css['feedback__btn']}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={onLeaveFeedback}
        className={css['feedback__btn']}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
