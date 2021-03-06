import React from "react";
import ItemService from "../Services/item-service"
import {DogInfo} from "../Components/DogInfo";

export class DogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.getDataFromLocalStorage()
    }

    getDataFromLocalStorage = () => {
        const data = ItemService.getCurrentData()

        this.findDogByName(data)
    }

    findDogByName(data) {

        const name = this.props.location.aboutProps.name

        const dog = data.filter(function (dog) {
            return dog.name === name;
        });

        this.setState({
            dog: dog[0]
        })

    }

    render() {
        return (
            <div className="DogPage" >
                {this.state.dog ?
                    <DogInfo  key={this.state.dog} dog={this.state.dog} />
                    : "nothing" }
            </div>
        );
    }
}


