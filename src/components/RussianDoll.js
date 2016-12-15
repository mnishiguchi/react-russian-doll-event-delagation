import React, { Component } from 'react';
import NotificationSystem   from 'react-notification-system';

const B1 = (props) => {
  return (
    <section className="B1">
      This is B1
      {props.children}
    </section>
  )
}
const B2 = (props) => {
  return (
    <section className="B2">
      This is B2
      {props.children}
    </section>
  )
}

class RussianDoll extends Component {

  render() {
    const notificationStyles = {
      NotificationItem: { // Override the notification item
        DefaultStyle: { // SearchPagelied to every notification, regardless of the notification level
          zIndex    : 10,
          fontSize  : '20px',
          background: 'rgba(22, 82, 124, 0.8)',
          color     : 'rgb(202,178,161)'
        }
      }
    };

    return (
      <section
        className="RussianDoll"
        onClick={e => this._handleAllEvents(e)}
        onDoubleClick={e => this._handleAllEvents(e)}
        onMouseOver={e => this._handleAllEvents(e)}
        onMouseLeave={e => this._handleAllEvents(e)}
      >

        <NotificationSystem
          ref="notificationSystem"
          style={notificationStyles}
        />

        <B1>
          <B2>
            <section className="bottom">
              This is the bottom.
            </section>
          </B2>
        </B1>
      </section>
    );
  }

  componentDidMount() {
    // Set up the notification system.
    this._notificationSystem = this.refs.notificationSystem;
  }

  _addNotification(message, level='success') {
    this._notificationSystem.addNotification({message, level});
  }

  /**
   * http://stackoverflow.com/a/32562118/3837223
   * https://facebook.github.io/react/docs/events.html#mouse-events
   */
  _handleAllEvents = (event) => {
    const eventType   = event.type;
    const targetClass = event.target.classList[0];

    // Ignore notification-system elements
    var r = new RegExp("notification")
    if (r.test(targetClass)) { return true; }

    this._addNotification( `${targetClass} was ${eventType}ed` );
  }
}

export default RussianDoll;
