import React from 'react';
import { shallow, render, mount } from 'enzyme';
import BannerSucces from './BannerSucces';

describe('BannerSucces', () => {
  let props;
  let shallowBannerSucces;
  let renderedBannerSucces;
  let mountedBannerSucces;

  const shallowTestComponent = () => {
    if (!shallowBannerSucces) {
      shallowBannerSucces = shallow(<BannerSucces {...props} />);
    }
    return shallowBannerSucces;
  };

  const renderTestComponent = () => {
    if (!renderedBannerSucces) {
      renderedBannerSucces = render(<BannerSucces {...props} />);
    }
    return renderedBannerSucces;
  };

  const mountTestComponent = () => {
    if (!mountedBannerSucces) {
      mountedBannerSucces = mount(<BannerSucces {...props} />);
    }
    return mountedBannerSucces;
  };  

  beforeEach(() => {
    props = {};
    shallowBannerSucces = undefined;
    renderedBannerSucces = undefined;
    mountedBannerSucces = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
