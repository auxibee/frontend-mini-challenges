import "./button.css";

const Button = ({ value, disabled, children, handleClick, ...props }) => {
  return (
    <button {...props} disabled={disabled} value={value} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
