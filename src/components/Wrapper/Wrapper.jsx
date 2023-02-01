import PropTypes from 'prop-types';
import css from './wrapper.module.css';

const Wpapper = ({ children, title }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.blocktitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Wpapper;

Wpapper.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
