// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import Loader from '../Loader';


configure({
  adapter: new Adapter(),
});

describe('Renders the loader-spinner', () => {
  it('should render the list section of dashboard page', () => {
    const component = shallow(
      <Loader />
    );
    expect(component).toMatchSnapshot();
  });
});
