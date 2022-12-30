const Input = ({ value, disabled, placeholder, inputref, handleChange }) => {
  return (
    <input
      disabled={disabled}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      ref={inputref}
    />
  );
};

export default Input;
