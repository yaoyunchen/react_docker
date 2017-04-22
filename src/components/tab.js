var React = require('react');
var ReactDOM = require('react-dom');

class Tab extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.id);
  }

  render() {
    return (
      <li className={(this.props.isCurrent ? 'current' : null)}>
        <a onClick={this.handleClick} href={this.props.url}>
          {this.props.title}
        </a>
      </li>
    )
  }
}

export default Tab;
