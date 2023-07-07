import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PlantTaze from '../../components/PlantTaze/PlantTaze';
import BestConditions from '../../components/BestConditions/BestConditions';
import Questions from '../../components/Questions/Questions';
import CoffeeShop from '../../components/CoffeeShop/CoffeeShop';

const Home = () =>{
    return(
        <body className="Home-body">
            <Navigation/>
            <PlantTaze/>
            <BestConditions/>
            <Questions/>
            <CoffeeShop/>


        </body>
    )
}

export default Home