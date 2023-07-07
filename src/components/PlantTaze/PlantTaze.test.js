import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PlantTaze from './PlantTaze';

describe('PlantTaze', () => {
  let props;
  let shallowPlantTaze;
  let renderedPlantTaze;
  let mountedPlantTaze;

  const shallowTestComponent = () => {
    if (!shallowPlantTaze) {
      shallowPlantTaze = shallow(<PlantTaze {...props} />);
    }
    return shallowPlantTaze;
  };

  const renderTestComponent = () => {
    if (!renderedPlantTaze) {
      renderedPlantTaze = render(<PlantTaze {...props} />);
    }
    return renderedPlantTaze;
  };

  const mountTestComponent = () => {
    if (!mountedPlantTaze) {
      mountedPlantTaze = mount(<PlantTaze {...props} />);
    }
    return mountedPlantTaze;
  };  

  beforeEach(() => {
    props = {};
    shallowPlantTaze = undefined;
    renderedPlantTaze = undefined;
    mountedPlantTaze = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
