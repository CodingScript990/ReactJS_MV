import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

// button propType obj
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
