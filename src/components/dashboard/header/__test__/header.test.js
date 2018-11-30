// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import Header from '../Header';


configure({
  adapter: new Adapter(),
});

describe('Renders modals', () => {
  it('should render the header component', () => {
    const showSideBar = () => { };

    const component = shallow(
      <Header onClick={showSideBar} user={{ firstName: 'victor' }}/>
    );
    expect(component).toMatchSnapshot();
  });
});
