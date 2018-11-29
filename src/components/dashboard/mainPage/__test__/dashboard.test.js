// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import ListEntry from '../ListEntry';
import Settings from '../Settings';
import Profile from '../Profile';


configure({
  adapter: new Adapter(),
});

describe('Renders modals', () => {
  it('should render the list section of dashboard page', () => {
    const component = shallow(
      <ListEntry current={true}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the settings section of dashboard page', () => {
    const component = shallow(
      <Settings current={false}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the profile section of dashboard page', () => {
    const component = shallow(
      <Profile current={false}/>
    );
    expect(component).toMatchSnapshot();
  });
});
