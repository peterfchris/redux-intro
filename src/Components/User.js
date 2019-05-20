import React, { Component } from 'react'
import store from '../store'


export class User extends Component {
    constructor(){
        super()
        this.state = {
            store: store.getState()
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                store: store.getState()
            })
        })
    }

    render() {
        console.log(this.state)
        return (
        <div>
            <h1>Username: {this.state.store.username} </h1>
        </div>
        )
    }
}

export default User
