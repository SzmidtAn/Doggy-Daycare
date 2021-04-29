import React from "react";

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