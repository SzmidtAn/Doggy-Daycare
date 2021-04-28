import React from "react";

export const DogInfo = ({dog}) => {
    return (
        <div className="DogInfo">

            <img src={dog.img}/>
            <h3>{dog.name} </h3>

            <div className="Specification">

                <div className="DogSpec">

                <div>
                    <p>BREED</p>
                    <h5>{dog.breed}</h5>
                </div>

                <div>
                    <p>AGE</p>
                    <h5>{dog.age} </h5>
                </div>

                <div>
                    <p>SEX</p>
                    <h5>{dog.sex}</h5>
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