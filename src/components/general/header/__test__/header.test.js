// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import HeaderHome from '../HeaderHome';


configure({
  adapter: new Adapter(),
});

describe('Renders the header of landing page', () => {
  it('should render herder section of landing page', () => {
    const component = shallow(
      <HeaderHome />
    );
    expect(component).toMatchSnapshot();
  });
});
