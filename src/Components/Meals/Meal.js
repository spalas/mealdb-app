import React, { useEffect, useState } from 'react';
import Mealdiv from '../Mealdivs/Mealdiv';
import './Meal'

const Meal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                meals.map(meal => <Mealdiv
                    meal={meal}
                ></Mealdiv>)
            }
        </div>



    );
};

export default Meal;