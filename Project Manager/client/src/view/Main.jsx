import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../components/List";

const Main = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, [projects]);

  return (
    <div>
      <h1 className="text-center"> Project Manager</h1>
      <Link to={"/new"}> Add a new project</Link>

      <List projects={projects} />
    </div>
  );
};
export default Main;
