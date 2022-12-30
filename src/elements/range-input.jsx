const RangeInput = ({ value, min, max, handleChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
};

export default RangeInput;
