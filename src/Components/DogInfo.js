import React from "react";
import img1 from '../static/pawprint.png'
import img2 from '../static/gender.png'
import img3 from '../static/user.png'
import img4 from '../static/chip.png'
import img5 from '../static/calendar.png'
import img6 from '../static/phone-call.png'

export const DogInfo = ({dog}) => {
    return (
        <div className="DogInfo">

            <img src={dog.img}/>
            <h3>{dog.name} </h3>
                {dog.present ?
                    <p className="active" style={{color: "green"}}>ACTIVE</p>
                    : <p className="active" style={{color: "red"}}>INACTIVE</p>
                    }

            <div className="Specification">

                <div className="DogSpec">

                <div>
                    <img src={img1}/>


                    <h5>{dog.breed}</h5>
                </div>

                <div>
                    <img src={img5}/>

                    <h5>{dog.age} years old </h5>
                </div>

                <div>
                    <img src={img2}/>

                    <h5>{dog.sex}</h5>
                </div>

                    <div>
                        <img src={img4}/>

                    <h5>{dog.chipNumber}</h5>
                </div>

                </div>

                <div className="verticalLine" />

                <div className="OwnerSpec">
                    <div>
                        <img src={img3}/>

                        <h5>{dog.owner.name} {dog.owner.lastName}</h5>
                    </div>

                    <div>
                        <img src={img6}/>

                        <h5>{dog.owner.phoneNumber}</h5>
                    </div>

                </div>

            </div>

        </div>
    );
};