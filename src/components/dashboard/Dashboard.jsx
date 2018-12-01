// react libraries
import React, { Fragment, Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import alert from 'sweetalert';

// helpers
import validator from '../../helpers/validator';
import getEntryItems from '../../helpers/entry/entry';

// components
import Header from './header/Header';
import SideBar from './sidebar/SideBard';
import NewEntryModal from './modals/NewEntry';
import EditEntryModal from './modals/EditEntry';
import ViewSingleArticleModal from './modals/ViewSingleArticle';
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
    entryId: 1,
    deletEntry: false,
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
        updateEntry: false,
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
      [event.target.dataset.target]: false,
    });
  };

  validateEntry = (event) => {
    const data = new FormData(event.target);
    const title = data.get('title');
    const body = data.get('body');
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

  updateEntry = (event) => {
    const { id, mode } = event.target.dataset;
    if (mode === 'update') {
      event.preventDefault();
      const entry = this.validateEntry(event);
      console.log(entry);
      if (entry) {
        this.props.upate(entry, id);
      }
    } else if (mode === 'edit') {
      this.setState({
        updateEntry: true,
        entryId: id,
      });
      this.props.getSingleEntry(id);
    }
  };

  showEntry = (event) => {
    const { id } = event.target.dataset;
    this.setState({
      showEntry: true,
    });
    this.props.getSingleEntry(id);
  };

  deletEntry = (event) => {
    event.preventDefault();
    const { id, mode } = event.target.dataset;
    if (mode === 'initiate') {
      alert({
        itle: 'Are you sure?',
        text: 'Are you sure that you want to dele this entry?',
        icon: 'warning',
        dangerMode: true,
      }).then(() => {
        this.props.deleteSingleItem(id);
        alert({
          text: 'Entry deleted successfully'
        });
      });
    }
  };

  render = () => {
    const { user } = this.props.auth;
    const { entries } = this.props.entries;
    const formatedEntries = getEntryItems(
      entries,
      this.showEntry,
      this.updateEntry,
      this.deletEntry
    );
    const { entry, progress } = this.props.singleEntry;

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
                isDelete={this.state.deletEntry}
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
            entry={this.props.singleEntry.entry}
            close={this.closeModal}
          />
          <EditEntryModal
            isOpen={this.state.updateEntry}
            update={this.updateEntry}
            close={this.closeModal}
            progress={progress}
            entry={entry}
          />
        </section>
      </Fragment>
    );
  };
}

Dashboard.propTypes = {
  height: PropTypes.string,
  auth: PropTypes.object,
  getListEntries: PropTypes.func,
  entries: PropTypes.object,
  addEntry: PropTypes.func,
  getSingleEntry: PropTypes.func,
  singleEntry: PropTypes.object,
  upate: PropTypes.func,
  deleteSingleItem: PropTypes.func,
};

export default Dashboard;
