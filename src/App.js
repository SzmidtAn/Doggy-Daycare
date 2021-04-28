import './App.css';
import  {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";
import {Welcome} from "./Pages/Welcome";
import {Register} from "./Pages/Register";
import {DogPage} from "./Pages/DogPage";
import React from "react";



function App() {
  return (
    <div className="App">

        <Router  basename={`${process.env.PUBLIC_URL}/`}>
            <div>


                <Switch>

                    <Route exact path="/details" component={DogPage} />


                    <Route exact path="/register/" component={Register} />

                    <Route path="/" component={Welcome}>
                    </Route>

                </Switch>
            </div>
        </Router>



    </div>
  );
}

export default App;
