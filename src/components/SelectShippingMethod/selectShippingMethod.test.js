import React from 'react';
import { shallow, render, mount } from 'enzyme';
import selectShippingMethod from './selectShippingMethod';

describe('selectShippingMethod', () => {
  let props;
  let shallowselectShippingMethod;
  let renderedselectShippingMethod;
  let mountedselectShippingMethod;

  const shallowTestComponent = () => {
    if (!shallowselectShippingMethod) {
      shallowselectShippingMethod = shallow(<selectShippingMethod {...props} />);
    }
    return shallowselectShippingMethod;
  };

  const renderTestComponent = () => {
    if (!renderedselectShippingMethod) {
      renderedselectShippingMethod = render(<selectShippingMethod {...props} />);
    }
    return renderedselectShippingMethod;
  };

  const mountTestComponent = () => {
    if (!mountedselectShippingMethod) {
      mountedselectShippingMethod = mount(<selectShippingMethod {...props} />);
    }
    return mountedselectShippingMethod;
  };  

  beforeEach(() => {
    props = {};
    shallowselectShippingMethod = undefined;
    renderedselectShippingMethod = undefined;
    mountedselectShippingMethod = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
