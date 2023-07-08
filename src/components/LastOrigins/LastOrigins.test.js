import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LastOrigins from './LastOrigins';

describe('LastOrigins', () => {
  let props;
  let shallowLastOrigins;
  let renderedLastOrigins;
  let mountedLastOrigins;

  const shallowTestComponent = () => {
    if (!shallowLastOrigins) {
      shallowLastOrigins = shallow(<LastOrigins {...props} />);
    }
    return shallowLastOrigins;
  };

  const renderTestComponent = () => {
    if (!renderedLastOrigins) {
      renderedLastOrigins = render(<LastOrigins {...props} />);
    }
    return renderedLastOrigins;
  };

  const mountTestComponent = () => {
    if (!mountedLastOrigins) {
      mountedLastOrigins = mount(<LastOrigins {...props} />);
    }
    return mountedLastOrigins;
  };  

  beforeEach(() => {
    props = {};
    shallowLastOrigins = undefined;
    renderedLastOrigins = undefined;
    mountedLastOrigins = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
