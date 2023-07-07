import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CoffeeShop from './CoffeeShop';

describe('CoffeeShop', () => {
  let props;
  let shallowCoffeeShop;
  let renderedCoffeeShop;
  let mountedCoffeeShop;

  const shallowTestComponent = () => {
    if (!shallowCoffeeShop) {
      shallowCoffeeShop = shallow(<CoffeeShop {...props} />);
    }
    return shallowCoffeeShop;
  };

  const renderTestComponent = () => {
    if (!renderedCoffeeShop) {
      renderedCoffeeShop = render(<CoffeeShop {...props} />);
    }
    return renderedCoffeeShop;
  };

  const mountTestComponent = () => {
    if (!mountedCoffeeShop) {
      mountedCoffeeShop = mount(<CoffeeShop {...props} />);
    }
    return mountedCoffeeShop;
  };  

  beforeEach(() => {
    props = {};
    shallowCoffeeShop = undefined;
    renderedCoffeeShop = undefined;
    mountedCoffeeShop = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
