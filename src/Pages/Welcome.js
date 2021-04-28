import React from "react";
import {Link} from "react-router-dom";

export class Welcome extends React.Component {

    render() {
        return (
            <div className="homePage">

                <div className="Welcome">

                    <div>

               <h1>WELCOME</h1>
                    <h2>And take a look at </h2>
                    </div>
                <Link to="/register" style={{  color: '#c32828' }} >
                <h3>OUR DOGGY SQUAD</h3>
                </Link>
                </div>



            </div>
        );
    }


}


