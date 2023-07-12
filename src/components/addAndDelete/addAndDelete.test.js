import React from 'react';
import { shallow, render, mount } from 'enzyme';
import addAndDelete from './addAndDelete';

describe('addAndDelete', () => {
  let props;
  let shallowaddAndDelete;
  let renderedaddAndDelete;
  let mountedaddAndDelete;

  const shallowTestComponent = () => {
    if (!shallowaddAndDelete) {
      shallowaddAndDelete = shallow(<addAndDelete {...props} />);
    }
    return shallowaddAndDelete;
  };

  const renderTestComponent = () => {
    if (!renderedaddAndDelete) {
      renderedaddAndDelete = render(<addAndDelete {...props} />);
    }
    return renderedaddAndDelete;
  };

  const mountTestComponent = () => {
    if (!mountedaddAndDelete) {
      mountedaddAndDelete = mount(<addAndDelete {...props} />);
    }
    return mountedaddAndDelete;
  };  

  beforeEach(() => {
    props = {};
    shallowaddAndDelete = undefined;
    renderedaddAndDelete = undefined;
    mountedaddAndDelete = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
