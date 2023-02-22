import className from "classnames";
import "../styles/Button.css";

function Button({ children, ...rest }) {
  const classes = className(rest.className);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );

  // return <button className="button">{children}</button>;
}

export default Button;
