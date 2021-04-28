import './App.css';
import  {
    Route,
    BrowserRouter
} from "react-router-dom";
import {Welcome} from "./Pages/Welcome";
import {Register} from "./Pages/Register";
import {DogPage} from "./Pages/DogPage";
import React from "react";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div>

                <Route  exact path="/welcome" component={Welcome} />
                <Route  path="/register" component={Register} />
                <Route  path="/details" component={DogPage} />


            </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
