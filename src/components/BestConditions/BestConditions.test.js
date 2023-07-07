import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BestConditions from './BestConditions';

describe('BestConditions', () => {
  let props;
  let shallowBestConditions;
  let renderedBestConditions;
  let mountedBestConditions;

  const shallowTestComponent = () => {
    if (!shallowBestConditions) {
      shallowBestConditions = shallow(<BestConditions {...props} />);
    }
    return shallowBestConditions;
  };

  const renderTestComponent = () => {
    if (!renderedBestConditions) {
      renderedBestConditions = render(<BestConditions {...props} />);
    }
    return renderedBestConditions;
  };

  const mountTestComponent = () => {
    if (!mountedBestConditions) {
      mountedBestConditions = mount(<BestConditions {...props} />);
    }
    return mountedBestConditions;
  };  

  beforeEach(() => {
    props = {};
    shallowBestConditions = undefined;
    renderedBestConditions = undefined;
    mountedBestConditions = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
