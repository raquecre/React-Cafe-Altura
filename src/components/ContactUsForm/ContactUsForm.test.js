import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ContactUsForm from './ContactUsForm';

describe('ContactUsForm', () => {
  let props;
  let shallowContactUsForm;
  let renderedContactUsForm;
  let mountedContactUsForm;

  const shallowTestComponent = () => {
    if (!shallowContactUsForm) {
      shallowContactUsForm = shallow(<ContactUsForm {...props} />);
    }
    return shallowContactUsForm;
  };

  const renderTestComponent = () => {
    if (!renderedContactUsForm) {
      renderedContactUsForm = render(<ContactUsForm {...props} />);
    }
    return renderedContactUsForm;
  };

  const mountTestComponent = () => {
    if (!mountedContactUsForm) {
      mountedContactUsForm = mount(<ContactUsForm {...props} />);
    }
    return mountedContactUsForm;
  };  

  beforeEach(() => {
    props = {};
    shallowContactUsForm = undefined;
    renderedContactUsForm = undefined;
    mountedContactUsForm = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
