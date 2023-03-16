import PropTypes from 'prop-types';
import css from './Title.module.css';
export function Title({ text }) {
  return <h2 className={css.title}>{text}</h2>;
}
Title.propTypes = {
  text: PropTypes.string.isRequired,
};
