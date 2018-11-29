// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import Footer from '../footer/Footer';
import HeaderHome from '../header/HeaderHome';
import Modal from '../modal/Modal';


configure({
  adapter: new Adapter(),
});

describe('Renders modals', () => {
  it('should render the footer component', () => {
    const component = shallow(
      <Footer />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the header component', () => {
    const component = shallow(
      <HeaderHome />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the reusable modal component', () => {
    const component = shallow(
      <Modal isModalOpen={true}/>
    );
    expect(component).toMatchSnapshot();
  });
});
