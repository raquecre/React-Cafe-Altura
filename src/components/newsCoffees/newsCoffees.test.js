import React from 'react';
import { shallow, render, mount } from 'enzyme';
import newsCoffees from './newsCoffees';

describe('newsCoffees', () => {
  let props;
  let shallownewsCoffees;
  let renderednewsCoffees;
  let mountednewsCoffees;

  const shallowTestComponent = () => {
    if (!shallownewsCoffees) {
      shallownewsCoffees = shallow(<newsCoffees {...props} />);
    }
    return shallownewsCoffees;
  };

  const renderTestComponent = () => {
    if (!renderednewsCoffees) {
      renderednewsCoffees = render(<newsCoffees {...props} />);
    }
    return renderednewsCoffees;
  };

  const mountTestComponent = () => {
    if (!mountednewsCoffees) {
      mountednewsCoffees = mount(<newsCoffees {...props} />);
    }
    return mountednewsCoffees;
  };  

  beforeEach(() => {
    props = {};
    shallownewsCoffees = undefined;
    renderednewsCoffees = undefined;
    mountednewsCoffees = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
