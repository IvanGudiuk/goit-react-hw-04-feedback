import PropTypes from 'prop-types';
import css from './Buttons.module.css';
export function Buttons({ content, clickHandler }) {
  return (
    <div className="btn-container">
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
    </div>
  );
}
Buttons.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func.isRequired,
};
