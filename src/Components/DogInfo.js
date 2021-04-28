import React from "react";

export const DogInfo = ({dog, name, age, image, breed, sex}) => {
    return (
        <div className="DogInfo">

            <img src={image}/>
            <h3>{dog.name} </h3>

            <div className="Specification">

                <div className="DogSpec">

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


                <div className="OwnerSpec">
                    <div>
                        <p>Owner</p>
                        <h5>{dog.owner.name} {dog.owner.lastName}</h5>
                    </div>



                    <div>
                        <p>Contact</p>
                        <h5>{dog.owner.phoneNumber}</h5>
                    </div>

                </div>

            </div>



        </div>
    );
};