const Checkbox = ({ value, label, handleChange }) => {
  return (
    <>
      <input type="checkbox" value={value} onChange={handleChange} /> {label}
    </>
  );
};

export default Checkbox;
