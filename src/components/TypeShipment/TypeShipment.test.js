import React from 'react';
import { shallow, render, mount } from 'enzyme';
import TypeShipment from './TypeShipment';

describe('TypeShipment', () => {
  let props;
  let shallowTypeShipment;
  let renderedTypeShipment;
  let mountedTypeShipment;

  const shallowTestComponent = () => {
    if (!shallowTypeShipment) {
      shallowTypeShipment = shallow(<TypeShipment {...props} />);
    }
    return shallowTypeShipment;
  };

  const renderTestComponent = () => {
    if (!renderedTypeShipment) {
      renderedTypeShipment = render(<TypeShipment {...props} />);
    }
    return renderedTypeShipment;
  };

  const mountTestComponent = () => {
    if (!mountedTypeShipment) {
      mountedTypeShipment = mount(<TypeShipment {...props} />);
    }
    return mountedTypeShipment;
  };  

  beforeEach(() => {
    props = {};
    shallowTypeShipment = undefined;
    renderedTypeShipment = undefined;
    mountedTypeShipment = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
