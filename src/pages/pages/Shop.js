import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import BestConditions from '../../components/BestConditions/BestConditions';
import Footer from '../../components/Footer/Footer';
import LastOrigins from '../../components/LastOrigins/LastOrigins';

const Shop = () => {
    return (
        <body className="Cart-body">
            <Navigation />
            <LastOrigins/>
            <BestConditions />
            <h1>tienda</h1>
            <Footer />

        </body>
    )
}

export default Shop