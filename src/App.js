var React = require('react');
var ReactDOM = require('react-dom');

// Import data here.
const tabList = [
  { id: 0, title: 'PureFibre Internet plans', url: '#' },
  { id: 1, title: 'About Fibre', url: '#' },
  { id: 2, title: 'Check availability', url: '#' }
];

// Import components here.
import TabNavigation from './containers/tab_navigation';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setTab = this.setTab.bind(this);
    this.state = { currentTab: 0 };
  }

  setTab(id) {
    this.setState({ currentTab: id });
  }

  render () {
    return (
      <TabNavigation
        currentTab={this.state.currentTab}
        setTab={this.setTab}
        tabList={this.props.tabList}
      />
    )
  }
}

App.defaultProps = {
  tabList: tabList
};

export default App;
