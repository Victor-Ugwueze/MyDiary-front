// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// components
import NewEntry from '../NewEntry';
import EditModal from '../EditEntry';
import ChangePassword from '../ChangePassword';
import ComfirmDelete from '../ConfirmDelete';

configure({
  adapter: new Adapter(),
});

describe('Renders modals', () => {
  it('should render add entry modal', () => {
    const component = shallow(
      <NewEntry isOpen={true}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render edit entry modal', () => {
    const component = shallow(
      <EditModal isOpen={true}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render change password modal', () => {
    const component = shallow(
      <ChangePassword isOpen={true}/>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render confirm delete modal', () => {
    const component = shallow(
      <ComfirmDelete isOpen={true}/>
    );
    expect(component).toMatchSnapshot();
  });
});
