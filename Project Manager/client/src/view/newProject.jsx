import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState([]);

  const [NameError, setNameError] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1) {
      setNameError("Project Name is required!");
    } else if (e.target.value.length < 3) {
      setNameError("Name must be 3 characters or longer!");
    } else {
      setNameError("");
    }
  };

  const [DateError, setDateError] = useState("");
  const handleDate = (e) => {
    setDate(e.target.value);
    if (e.target.value.length < 1) {
      setDateError("Date is required!");
    } else if (e.target.value.length < 3) {
      setDateError("Date is required !");
    } else {
      setDateError("");
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/new", {
        name,
        date,
      })
      .then((res) => history.push("/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="mt-4">
      <h1 className>Project Manager</h1>
      <Link style={{ textalign: "left" }} to={"/"}>
        {" "}
        Back to the dashboard
      </Link>
      <div style={{ padding: 20 }}>
        <h6>Plan a new project</h6>
      </div>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <div className="mb-3 ">
          <label className="form-label">Name</label>
          <br />
          <input
            className="form-control"
            placeholder="Enter project name , must be more than 3 characters"
            type="text"
            value={name}
            onChange={handleName}
          />
          {NameError ? <p className="text-danger">{NameError}</p> : ""}
          <label className="form-label">Date</label>
          <br />
          <input
            className="form-control"
            type="date"
            value={date}
            onChange={handleDate}
          />
          {DateError ? <p className="text-danger">{DateError}</p> : ""}
        </div>
        <button
          style={{
            backgroundColor: "aqua",
            borderRadius: "10px",
            borderColor: "black",
          }}
        >
          Plan a project
        </button>
        {/* <input className="btn btn-primary" type="submit" /> */}
      </form>
    </div>
  );
};
export default Form;
