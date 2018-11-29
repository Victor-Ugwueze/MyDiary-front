// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Header from './header/Header';
import SideBar from './sidebar/SideBard';
import NewEntryModal from './modals/NewEntry';
import EditEnrtMoal from './modals/EditEntry';
import ViewSingleArticleModal from './modals/ViewSingleArticle';
import ChangePasswordModal from './modals/ChangePassword';
import ListEntrySection from './mainPage/ListEntry';
import ProfileSection from './mainPage/Profile';
import SettingsSection from './mainPage/Settings';

/**
 * @class Dashboard
 * @extends {Component}
 * @desc renders dashbaord page
 * @param {object} event
 */
class Dashboard extends Component {
  state = {
    isSidebarOpen: false,
    width: 0,
    height: 0,
    diary: true,
    settings: false,
    profile: false,
    newEntry: false,
  };

  changePageSection = (event) => {
    this.setState({
      diary: false,
      settings: false,
      profile: false,
    });
    this.setState({
      [event.target.dataset.target]: !this.state[event.target.dataset.target],
    });
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width >= 890) {
      this.setState({
        isSidebarOpen: true,
      });
    } else {
      this.setState({
        isSidebarOpen: false,
      });
    }
  };

  openSideBar = () => {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    });
  };

  componentDidMount() {
    this.setState({ height: `${window.innerHeight}px` });
  }

  showNewEntryModal = () => {
    this.setState({
      newEntry: true
    });
  }

  closeModal = () => {
    this.setState({
      newEntry: false
    });
  }

  render = () => (
    <Fragment>
      <Header onClick={this.openSideBar} />
      <main id='wrap' className='container-fluid'>
        <SideBar
          isSidebarOpen={this.state.isSidebarOpen || window.innerWidth > 890}
          onClick={this.changePageSection}
          currentView={{
            diary: this.state.diary,
            settings: this.state.settings,
            profile: this.state.profile,
          }}
          openNewEntryModal={this.showNewEntryModal}
          />
        <div id='right-section'>
          <section id='main-section'>
            <div className='alert error-flash' />
            <div className='alert success-flash' />
            <ListEntrySection
              current={this.state.diary}
              openNewEntryModal={this.showNewEntryModal}
              />
            <ProfileSection current={this.state.profile}/>
            <SettingsSection current={this.state.settings}/>
            <img src='/images/loading_spinner.gif' className='loading_spinner' />
          </section>
        </div>
      </main>
      <section>
        <NewEntryModal isOpen={this.state.newEntry} close={this.closeModal}/>
        <EditEnrtMoal />
        <ViewSingleArticleModal />
        <ChangePasswordModal />
      </section>
    </Fragment>
  );
}

Dashboard.propTypes = {
  height: PropTypes.string,
};

export default Dashboard;
