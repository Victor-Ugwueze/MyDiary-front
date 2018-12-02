// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import SingleEntry from '../SingleEntry';


configure({
  adapter: new Adapter(),
});

describe('Renders the single itme component', () => {
  it('should render SingleEntry', () => {
    const component = shallow(
      <SingleEntry entry={{ id: 1, title: 'title' }}/>
    );
    expect(component).toMatchSnapshot();
  });
});
