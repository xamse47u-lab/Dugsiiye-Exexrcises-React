import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckBoxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      formData,
      isChecked,
      selectedOption,
    });
    handleSubmitReset();
  };

  const handleSubmitReset = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setIsChecked(false);
    setSelectedOption("");
  };

  return (
    <>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Username: {submittedData.formData.username}</p>
          <p>Email: {submittedData.formData.email}</p>
          <p>Password: {submittedData.formData.password}</p>
          <p>Checked: {submittedData.isChecked ? "true" : "false"}</p>
          <p>Option: {submittedData.selectedOption}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckBoxChange}
        />
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
