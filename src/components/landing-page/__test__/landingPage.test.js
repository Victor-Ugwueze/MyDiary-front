// React Libraries
import React from 'react';

// third-party libraries
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// modules importation
import SignupForm from '../SignupForm';
import SignupPage from '../LandingPage';
import LoginForm from '../LoginForm';
import HeroSection from '../HeroSection';

configure({
  adapter: new Adapter(),
});

// SnapShot Test
describe('Renders the singup page', () => {
  it('should render the signup form', () => {
    const component = shallow(
      <SignupForm />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the login form', () => {
    const component = shallow(
      <LoginForm />
    );
    expect(component).toMatchSnapshot();
  });


  it('should render the hero section of landing page', () => {
    const component = shallow(
      <HeroSection />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the signup page', () => {
    const component = shallow(
      <SignupPage />
    );
    expect(component).toMatchSnapshot();
  });
});
