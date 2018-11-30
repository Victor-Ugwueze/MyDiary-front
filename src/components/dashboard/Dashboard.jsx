// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// helpers
import validator from '../../helpers/validator';
import getEntryItems from '../../helpers/entry/entry';

// components
import Header from './header/Header';
import SideBar from './sidebar/SideBard';
import NewEntryModal from './modals/NewEntry';
import EditEnrtyModal from './modals/EditEntry';
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
    showEntry: false,
    updateEntry: false,
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
    this.props.getListEntries();
  };

  /**
   *@param {object} prevProps
   * @memberof Dashboard
   */
  componentDidUpdate = (prevProps) => {
    if (prevProps.entries.progress === 'done') {
      this.setState({
        newEntry: false,
      });
    }
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

  showNewEntryModal = () => {
    this.setState({
      newEntry: true,
    });
  };

  closeModal = (event) => {
    this.setState({
      [event.target.dataset.target]: false
    });
  };

  validateEntry = (event) => {
    const data = new FormData(event.target);
    const title = data.get('title');
    const body = data.get('title');
    const errors = validator.validate(
      {
        title,
        body,
      },
      ['entry']
    );
    if (!errors.length > 0) {
      return {
        title,
        body,
      };
    }
    return false;
  };

  addNewEntry = (event) => {
    event.preventDefault();
    const entry = this.validateEntry(event);
    if (event) {
      this.props.addEntry(entry);
    }
  };

  showEntry = (event) => {
    const { id } = event.target.dataset;
    this.setState({
      showEntry: true,
    });
    this.props.getSingleEntry(id);
  };

  render = () => {
    const { user } = this.props.auth;
    const { entries } = this.props.entries;
    const formatedEntries = getEntryItems(entries, this.updateEntry, this.deleteEntry);
    return (
      <Fragment>
        <Header onClick={this.openSideBar} user={user.user} />
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
                entries={formatedEntries}
                current={this.state.diary}
                showEntry={this.showEntry}
                openNewEntryModal={this.showNewEntryModal}
              />
              <ProfileSection current={this.state.profile} />
              <SettingsSection current={this.state.settings} />
              <img src='/images/loading_spinner.gif' className='loading_spinner' />
            </section>
          </div>
        </main>
        <section>
          <NewEntryModal
            isOpen={this.state.newEntry}
            close={this.closeModal}
            onSubmit={this.addNewEntry}
          />
          <ViewSingleArticleModal
            isOpen={this.state.showEntry}
            entry={this.props.entry}
            close={this.closeModal}
          />
          <EditEnrtyModal isOpen={this.state.updateEntry}/>
          <ChangePasswordModal />
        </section>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  height: PropTypes.string,
  auth: PropTypes.auth,
  getListEntries: PropTypes.func,
  entries: PropTypes.object,
  addEntry: PropTypes.func,
  getSingleEntry: PropTypes.func,
  entry: PropTypes.object,
};

export default Dashboard;
