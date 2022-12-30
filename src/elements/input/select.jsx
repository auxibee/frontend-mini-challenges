import "./input.css";

const Select = ({ label, options, selected, handleChange }) => {
  return (
    <div className="select-wrapper">
      <div className="select-label"> {label} </div>
      <select className="select-input" value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
