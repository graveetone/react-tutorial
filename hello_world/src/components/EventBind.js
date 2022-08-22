import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
         message: 'Hello!'
      }
    //   this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage = () => {
        console.log(this);
        this.setState({
            message: 'Goodbye!'
        })
    }
  render() {
    return (
      <div>
        <button onClick={ this.changeMessage }>{this.state.message}</button>
      </div>
    )
  }
}

export default EventBind