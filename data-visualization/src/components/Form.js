const Form = () => {
  return (
    <div className="row m-3">
      <div className="col"></div>
      <div className="col">
        <form id="data-form">
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              id="exercise"
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
              type="number"
              className="form-control"
              id="weight"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Repititions(#)</label>
            <input type="number" className="form-control" id="reps" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" id="date" required />
          </div>
          <button type="submit" className="btn btn-primary" id="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Form;
