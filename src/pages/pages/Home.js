import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PlantTaze from '../../components/PlantTaze/PlantTaze';
import BestConditions from '../../components/BestConditions/BestConditions';
import Questions from '../../components/Questions/Questions';
import CoffeeShop from '../../components/CoffeeShop/CoffeeShop';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import RegistrationSimple from '../../components/RegistrationSimple';
import Footer from '../../components/Footer/Footer';
import NewsCoffees from '../../components/newsCoffees/newsCoffees';

const Home = () =>{
    return(
        <div className="Home-body">
            <Navigation/>
            <PlantTaze/>
            <BestConditions/>
            <NewsCoffees/>
            {/* //TODO falta hoja con los 4 cafés */}
            <Questions/>
            <CoffeeShop/>
            <div className='flex flex-row justify-center'>
                <ContactUsForm/>
                <RegistrationSimple/>
            </div>
            <Footer/>


        </div>
    )
}

export default Home