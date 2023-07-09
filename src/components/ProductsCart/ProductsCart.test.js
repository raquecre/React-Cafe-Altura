import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ProductsCart from './ProductsCart';

describe('ProductsCart', () => {
  let props;
  let shallowProductsCart;
  let renderedProductsCart;
  let mountedProductsCart;

  const shallowTestComponent = () => {
    if (!shallowProductsCart) {
      shallowProductsCart = shallow(<ProductsCart {...props} />);
    }
    return shallowProductsCart;
  };

  const renderTestComponent = () => {
    if (!renderedProductsCart) {
      renderedProductsCart = render(<ProductsCart {...props} />);
    }
    return renderedProductsCart;
  };

  const mountTestComponent = () => {
    if (!mountedProductsCart) {
      mountedProductsCart = mount(<ProductsCart {...props} />);
    }
    return mountedProductsCart;
  };  

  beforeEach(() => {
    props = {};
    shallowProductsCart = undefined;
    renderedProductsCart = undefined;
    mountedProductsCart = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
