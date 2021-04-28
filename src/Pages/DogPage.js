import React from "react";
import ItemService from "../Services/item-service"
import {DogInfo} from "../Components/DogInfo";
import {Item} from "../Components/ItemList";

export class DogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            dog: ""
        };
    }




    componentDidMount() {
        this.getDataFromLocalStorage()
    }



    getDataFromLocalStorage = () => {
        const data = ItemService.getCurrentData()
        this.setState({
            items: data
        })
        this.findDogByName(data)
    }


    itemToItem  = (item) => {
        const name = item.name
        const age = item.age
        const breed = item.breed
        const sex= item.sex
        const image= item.img

        return <DogInfo  key={name} name={name} dog={item} age={age} breed={breed} sex={sex} image={image}/>;
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

                  { this.itemToItem(this.state.dog)}

            </div>
        );
    }



}


