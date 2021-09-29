import React from 'react';
import './Mealdiv.css'

const Mealdiv = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal
    return (

        <div className="col">
            <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {strMeal}</h5>
                    <p className="card-text"> {strInstructions.slice(0, 200)}</p></div>
            </div>
        </div>





    );
};

export default Mealdiv;