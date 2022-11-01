import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './view/Main';
import Form from './view/newProject';
// import Update from './views/Update';
// import Detail from './views/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="container w-80 shadow-lg p-4 mt-4">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/new">
            <Form />
          </Route>
          {/* <Route path="/edit/:id">
            <Update />
          </Route>
          <Route path="/show/:id">
            <Detail />
          </Route>  */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;