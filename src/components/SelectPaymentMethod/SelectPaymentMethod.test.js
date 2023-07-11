import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectPaymentMethod from './SelectPaymentMethod';

describe('SelectPaymentMethod', () => {
  let props;
  let shallowSelectPaymentMethod;
  let renderedSelectPaymentMethod;
  let mountedSelectPaymentMethod;

  const shallowTestComponent = () => {
    if (!shallowSelectPaymentMethod) {
      shallowSelectPaymentMethod = shallow(<SelectPaymentMethod {...props} />);
    }
    return shallowSelectPaymentMethod;
  };

  const renderTestComponent = () => {
    if (!renderedSelectPaymentMethod) {
      renderedSelectPaymentMethod = render(<SelectPaymentMethod {...props} />);
    }
    return renderedSelectPaymentMethod;
  };

  const mountTestComponent = () => {
    if (!mountedSelectPaymentMethod) {
      mountedSelectPaymentMethod = mount(<SelectPaymentMethod {...props} />);
    }
    return mountedSelectPaymentMethod;
  };  

  beforeEach(() => {
    props = {};
    shallowSelectPaymentMethod = undefined;
    renderedSelectPaymentMethod = undefined;
    mountedSelectPaymentMethod = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
