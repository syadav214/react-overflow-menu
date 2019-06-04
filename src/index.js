import React, { Component } from 'react';

class OverflowMenu extends Component {
  constructor(props) {
    super();
    this.overflowMenuAlignDirection = props.className
      ? props.className
      : 'text-right';
    this.menuItems = props.menuItems ? props.menuItems : [];
    this.state = { isDisplayMenuItems: false };
  }

  toggleOverflowMenu = () =>
    this.setState({ isDisplayMenuItems: !this.state.isDisplayMenuItems });

  menuItemClick = e => {
    this.setState({ isDisplayMenuItems: false });
    if (this.props.menuItemClick) {
      this.props.menuItemClick(e);
    }
  };

  render() {
    const { isDisplayMenuItems } = this.state;

    return (
      <div
        className={this.overflowMenuAlignDirection}
        style={{ position: 'relative' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={this.toggleOverflowMenu}
        >
          <circle cx="8" cy="6" r="2" />
          <circle cx="8" cy="11" r="2" />
          <circle cx="8" cy="16" r="2" />
        </svg>
        {isDisplayMenuItems && this.menuItems.length > 0 && (
          <div
            className="list-group"
            style={{
              position: 'absolute',
              top: '80%',
              right: '2%',
              zIndex: -1
            }}
          >
            {this.menuItems.map((btn, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  className="list-group-item list-group-item-action"
                  id={btn.id}
                  onClick={this.menuItemClick}
                >
                  {btn.text}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default OverflowMenu;
