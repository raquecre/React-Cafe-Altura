import React from 'react';
import { shallow, render, mount } from 'enzyme';


describe('buttons', () => {
  let props;
  let shallowbuttons;
  let renderedbuttons;
  let mountedbuttons;

  const shallowTestComponent = () => {
    if (!shallowbuttons) {
      shallowbuttons = shallow(<buttons {...props} />);
    }
    return shallowbuttons;
  };

  const renderTestComponent = () => {
    if (!renderedbuttons) {
      renderedbuttons = render(<buttons {...props} />);
    }
    return renderedbuttons;
  };

  const mountTestComponent = () => {
    if (!mountedbuttons) {
      mountedbuttons = mount(<buttons {...props} />);
    }
    return mountedbuttons;
  };  

  beforeEach(() => {
    props = {};
    shallowbuttons = undefined;
    renderedbuttons = undefined;
    mountedbuttons = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
