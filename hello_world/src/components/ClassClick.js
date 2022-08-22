import React, { Component } from 'react'

class ClassClick extends Component {
    clickHander() {
        alert('Hello');
    }
  render() {
    return (
      <div>
        <button onClick = { this.clickHander} >Click</button>
      </div>
    )
  }
}

export default ClassClick