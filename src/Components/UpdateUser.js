import React, { Component, createRef } from 'react'
import store from '../store'
import {UPDATE_USERNAME} from '../store'

export class UpdateUser extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    usernameInput = createRef()

    updateUsername(username){
        store.dispatch({username, type: UPDATE_USERNAME})
    }
  
    render() {
    return (
      <div>
        <input 
        placeholder='username'
        onChange={() => this.updateUsername(this.usernameInput.current.value)}
        ref={this.usernameInput} />
      </div>
    )
  }
}

export default UpdateUser

