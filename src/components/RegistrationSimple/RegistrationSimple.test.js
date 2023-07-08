import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RegistrationSimple from './RegistrationSimple';

describe('RegistrationSimple', () => {
  let props;
  let shallowRegistrationSimple;
  let renderedRegistrationSimple;
  let mountedRegistrationSimple;

  const shallowTestComponent = () => {
    if (!shallowRegistrationSimple) {
      shallowRegistrationSimple = shallow(<RegistrationSimple {...props} />);
    }
    return shallowRegistrationSimple;
  };

  const renderTestComponent = () => {
    if (!renderedRegistrationSimple) {
      renderedRegistrationSimple = render(<RegistrationSimple {...props} />);
    }
    return renderedRegistrationSimple;
  };

  const mountTestComponent = () => {
    if (!mountedRegistrationSimple) {
      mountedRegistrationSimple = mount(<RegistrationSimple {...props} />);
    }
    return mountedRegistrationSimple;
  };  

  beforeEach(() => {
    props = {};
    shallowRegistrationSimple = undefined;
    renderedRegistrationSimple = undefined;
    mountedRegistrationSimple = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
