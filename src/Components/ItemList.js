import React from "react";
import ItemService from "../Services/item-service"
import {Redirect} from "react-router-dom";
import {Item} from "./Item";

export class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        this.getAndSaveDataFromApi()
    }

    getAndSaveDataFromApi() {
        ItemService.getAll()
            .then(r =>
            {
                this.getDataFromLocalStorage()
            }
            )
    }

    getDataFromLocalStorage = () => {
        const data = ItemService.getCurrentData()
        this.setState({
            items: data
        })
    }


    itemToItem  = (item) => {
        const name = item.name
        const age = item.age
        const breed = item.breed
        const sex= item.sex
        const image= item.img

        return <Item key={name} name={name} age={age} breed={breed} sex={sex} image={image} showItemsDescription={this.handleClick}/>;
    }

    handleClick = (name) => {
        this.setState({
            name: name
        })
    }

    render() {
        return (
            <div className="itemList" >
                    {this.state.items.map(this.itemToItem)}

                {this.state.name ? <Redirect  to={
                    {pathname: '/details',
                        aboutProps:{
                            name : this.state.name}}  } /> : null }

            </div>
        );
    }


}


