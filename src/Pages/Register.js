import React from "react";
import {ItemsList} from "../Components/ItemList";

export class Register extends React.Component {

    render() {
        return (
            <div className="RegisterPage" >
                <div className="ItemListHeader">
                    <h2>MEET OUR PUPILS</h2>
                </div>

                <ItemsList />
            </div>
        );
    }


}


