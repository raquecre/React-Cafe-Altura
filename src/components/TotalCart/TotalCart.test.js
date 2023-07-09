import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TotalCart from './TotalCart';

describe('TotalCart', () => {
  let props;
  let shallowTotalCart;
  let renderedTotalCart;
  let mountedTotalCart;

  const shallowTestComponent = () => {
    if (!shallowTotalCart) {
      shallowTotalCart = shallow(<TotalCart {...props} />);
    }
    return shallowTotalCart;
  };

  const renderTestComponent = () => {
    if (!renderedTotalCart) {
      renderedTotalCart = render(<TotalCart {...props} />);
    }
    return renderedTotalCart;
  };

  const mountTestComponent = () => {
    if (!mountedTotalCart) {
      mountedTotalCart = mount(<TotalCart {...props} />);
    }
    return mountedTotalCart;
  };  

  beforeEach(() => {
    props = {};
    shallowTotalCart = undefined;
    renderedTotalCart = undefined;
    mountedTotalCart = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
