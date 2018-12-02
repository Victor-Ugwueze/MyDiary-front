// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import Footer from '../Footer';


configure({
  adapter: new Adapter(),
});

describe('Renders the footer', () => {
  it('should render the footer of landing page', () => {
    const component = shallow(
      <Footer />
    );
    expect(component).toMatchSnapshot();
  });
});
