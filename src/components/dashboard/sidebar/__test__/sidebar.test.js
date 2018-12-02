// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import SideBard from '../SideBard';


configure({
  adapter: new Adapter(),
});

describe('Renders the sidebar component', () => {
  it('should render sidebar of dashboard page', () => {
    const component = shallow(
      <SideBard currentView={{ diary: true }}/>
    );
    expect(component).toMatchSnapshot();
  });
});
