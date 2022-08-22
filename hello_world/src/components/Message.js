import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello visitor'
        }
    }

    change_message() {
        this.setState(
            {
                message: 'Thank you for subscribing!'
            }
        )
    }
    render() {
        return (
            <div>
                <h1> { this.state.message } </h1>
                <button onClick= {() =>  this.change_message() }>Subcribe</button>
            </div>
        )
    }
}

export default Message