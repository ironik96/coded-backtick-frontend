function TextInput({ type = "text", placeholder, value, name, handleChange }) {
  return (
    <div className="input-container">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="bg-light-grey"
      />
      <label
        className={value || type === "date" ? "filled" : undefined}
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default TextInput;
