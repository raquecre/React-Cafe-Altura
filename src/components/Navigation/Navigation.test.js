import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  let props;
  let shallowNavigation;
  let renderedNavigation;
  let mountedNavigation;

  const shallowTestComponent = () => {
    if (!shallowNavigation) {
      shallowNavigation = shallow(<Navigation {...props} />);
    }
    return shallowNavigation;
  };

  const renderTestComponent = () => {
    if (!renderedNavigation) {
      renderedNavigation = render(<Navigation {...props} />);
    }
    return renderedNavigation;
  };

  const mountTestComponent = () => {
    if (!mountedNavigation) {
      mountedNavigation = mount(<Navigation {...props} />);
    }
    return mountedNavigation;
  };  

  beforeEach(() => {
    props = {};
    shallowNavigation = undefined;
    renderedNavigation = undefined;
    mountedNavigation = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
