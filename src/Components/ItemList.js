import React from "react";
import ItemService from "../Services/item-service"
import {Redirect} from "react-router-dom";

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
                console.log(this.state.items)
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
        // window.location.href = `/MyPortfolio/details?${title}&id=${id}`;

        this.setState({
            name: name
        })

    }

    render() {
        return (
            <div className="itemList" >

                <div className="ItemListHeader">

                <h2>MEET OUR PUPILS</h2>
                </div>

                    {this.state.items.map(this.itemToItem)}

                {this.state.name ? <Redirect  to={
                    {pathname: '/details',
                        aboutProps:{
                            name : this.state.name}}  } /> : null }


            </div>
        );
    }


}


export const Item = ({name, age, image, breed, sex, showItemsDescription}) => {
    return (
        <div className="item" onClick={() => showItemsDescription(name)}>

            <img src={image}/>
            <h3>{name} </h3>

                <div className="itemDetails">

            <div>
            <p>BREED</p>
            <h5>{breed}</h5>
            </div>

                    <div>
            <p>AGE</p>
            <h5>{age} </h5>
            </div>

            <div>
            <p>SEX</p>
            <h5>{sex}</h5>
            </div>

                </div>

            <a>Look at me!</a>



        </div>
    );
};