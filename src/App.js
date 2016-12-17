import React, { Component } from 'react'
import RussianDoll          from './components/RussianDoll'
require('./App.css')

const A1 = (props) => {
  return (
    <section id="A1">
      A1
      <br />
      <small>I am outside RussianDoll.</small>
      {props.children}
    </section>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            React russian doll event delegation
            <br />
            <small>with one event listener</small>
          </h2>
        </div>
        <div className="App-intro">

          <A1 />
          <RussianDoll />
          <A1 />

        </div>
      </div>
    )
  }
}

export default App
