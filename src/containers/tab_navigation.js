var React = require('react');
var ReactDOM = require('react-dom');

import Tab from '../components/tab';

const tabList = [
  { id: 0, title: 'PureFibre Internet plans', url: '#' },
  { id: 1, title: 'About Fibre', url: '#' },
  { id: 2, title: 'Check availability', url: '#' }
];

class TabNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(tabId) {
    this.props.setTab(tabId);

    console.log(`Current tab is: ${tabId}`);
  }

  render() {
    return (
      <nav className="navigation">
        <ul className="tab__container">
          {
            this.props.tabList.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  id={tab.id}
                  isCurrent={this.props.currentTab === tab.id}
                  handleClick={this.handleClick}
                  title={tab.title}
                  url={tab.url}
                />
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

export default TabNavigation;
