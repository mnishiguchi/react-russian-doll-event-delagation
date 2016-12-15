import React, { Component } from 'react';

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
    return (
      <section className="RussianDoll">
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
}

export default RussianDoll;
