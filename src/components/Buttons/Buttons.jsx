import PropTypes from 'prop-types';
import css from './Buttons.module.css';
export function Buttons({ content, clickHandler }) {
  return (
    <>
      {content.map(text => (
        <button
          type="button"
          className={css.btn}
          name={text}
          key={text}
          onClick={clickHandler}
        >
          {text}
        </button>
      ))}
    </>
  );
}
Buttons.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func.isRequired,
};
