import PropTypes from 'prop-types';
import css from './statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.text}>Good: {good} </p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad} </p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive feedback: {positivePercentage}</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
