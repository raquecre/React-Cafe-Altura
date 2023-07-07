import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Questions from './Questions';

describe('Questions', () => {
  let props;
  let shallowQuestions;
  let renderedQuestions;
  let mountedQuestions;

  const shallowTestComponent = () => {
    if (!shallowQuestions) {
      shallowQuestions = shallow(<Questions {...props} />);
    }
    return shallowQuestions;
  };

  const renderTestComponent = () => {
    if (!renderedQuestions) {
      renderedQuestions = render(<Questions {...props} />);
    }
    return renderedQuestions;
  };

  const mountTestComponent = () => {
    if (!mountedQuestions) {
      mountedQuestions = mount(<Questions {...props} />);
    }
    return mountedQuestions;
  };  

  beforeEach(() => {
    props = {};
    shallowQuestions = undefined;
    renderedQuestions = undefined;
    mountedQuestions = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
