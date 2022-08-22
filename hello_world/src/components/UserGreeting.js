import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {
    let message = this.state.isLoggedIn ? <div>Welcome Graveetone</div> : <div>Welcome Guest</div>
    // if (this.state.isLoggedIn) {
    return (
        message
    )
    // }
    // else
    // {
        // return (
            // <div>  Welcome Guest </div>
        // )
    // }
  }
}

export default UserGreeting