import { useState } from "react";
import { formatDate } from "../utils/utils.js";
import "../css/Form.css";

const Form = ({ updateChartData }) => {
  const [formData, updateFormData] = useState({
    exercise: "",
    weight: "",
    reps: "",
    date: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateChartData({ ...formData, date: formatDate(formData.date) });
  };
  return (
    <div className="small form-align">
      <form
        id="data-form"
        className="my-3 mx-5 px-5 py-4 rounded-3"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#E0E8F3" }}
      >
        <h4 className="mb-4 form-heading">Add Data</h4>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="exercise"
            onChange={handleChange}
            required
          >
            <option value="">Select Exercise</option>
            <option value="Dumbell Press">Dumbell Press</option>
            <option value="Leg Press">Leg Press</option>
            <option value="Bicep Curl">Bicep Curl</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Weight(Kg)</label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            name="weight"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Repititions(#)</label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            name="reps"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            onChange={handleChange}
            type="date"
            className="form-control"
            name="date"
            required
          />
        </div>
        <button type="submit" className="btn form-button" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
