import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dash = (props) => {
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th>Backlog</th>
              <th>Due:</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-primary">
            {props.projects.map((project, i) => (
              <tr>
                <td scope="row" key={i}>
                  {project.name}
                </td>
                <td scope="row" key={i}>
                  <p>due : {project.date}</p>
                </td>
                <td>
                  <Link to={"/" + project._id}> Start Project</Link>
                  <Link
                    onClick={() => {
                      handleDelete(project._id);
                    }}
                  ></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr class="table-warning">
              <th>In Progress</th>
              <th>Due</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-warning">
            {props.projects.map((project, i) => (
              <tr>
                <td scope="row" key={i}>
                  {project.name}
                </td>
                <td scope="row" key={i}>
                  <p>due : {project.date}</p>
                </td>
                <td>
                  <Link to={"/" + project._id}> Move to Complited</Link>
                  <Link
                    onClick={() => {
                      handleDelete(project._id);
                    }}
                  ></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr class="table-success">
              <th>Completed</th>
              <th>Due</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-success">
            {props.projects.map((project, i) => (
              <tr>
                <td scope="row" key={i}>
                  {project.name}
                </td>
                <td scope="row" key={i}>
                  <p>due : {project.date}</p>
                </td>
                <td>
                  <Link
                    onClick={() => {
                      handleDelete(project._id);
                    }}
                  >
                    Remove Project
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dash;
