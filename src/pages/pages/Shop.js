import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BestConditions from '../../components/BestConditions/BestConditions';
import Footer from '../../components/Footer/Footer';
import LastOrigins from '../../components/LastOrigins/LastOrigins';

const Shop = () => {
    return (
        <div className="Cart-body">
            <Navigation />
            <LastOrigins />
            <BestConditions />
            
            <Footer />

        </div>
    )
}

export default Shop