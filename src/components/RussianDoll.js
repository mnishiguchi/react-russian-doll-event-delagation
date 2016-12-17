import React, { Component } from 'react'
import NotificationSystem   from 'react-notification-system'

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      zIndex    : 10,
      fontSize  : '1rem',
      background: 'rgba(22, 82, 124, 0.8)',
      color     : 'rgb(202,178,161)'
    }
  }
}

const B1 = (props) => {
  return (
    <section id="B1">
      B1
      {props.children}
    </section>
  )
}
const B2 = (props) => {
  return (
    <section id="B2">
      B2
      {props.children}
    </section>
  )
}

class RussianDoll extends Component {
  render() {
    return (
      <section
        id="RussianDoll"
        onClick={e => this._handleAllEvents(e)}
        onDoubleClick={e => this._handleAllEvents(e)}
        onMouseOver={e => this._handleAllEvents(e)}
        onMouseLeave={e => this._handleAllEvents(e)}
      >

        <NotificationSystem
          ref="notificationSystem"
          style={notificationStyle}
        />

        RusianDoll
        <br />
        <small>I have the event listener.</small>
        <B1>
          <B2>
            <section id="bottom">
              bottom
            </section>
          </B2>
        </B1>
      </section>
    )
  }

  componentDidMount() {
    // Set up the notification system.
    this._notificationSystem = this.refs.notificationSystem
  }

  _addNotification(message, level='success') {
    this._notificationSystem.addNotification({message, level})
  }

  /**
   * http://stackoverflow.com/a/32562118/3837223
   * https://facebook.github.io/react/docs/events.html#mouse-events
   */
  _handleAllEvents = (event) => {
    // Ignore notification-system elements
    const r = new RegExp("notification")
    if (r.test(event.target.classList[0])) {
      this._addNotification( `Notification was ${event.type}'d` )
      return true
    }

    this._addNotification( `${event.target.id} was ${event.type}'d` )
  }
}

export default RussianDoll
