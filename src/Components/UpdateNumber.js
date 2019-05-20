import React, { Component, createRef } from 'react'
import store from '../store'
import {UPDATE_FAVORITE_NUMBER} from '../store'

export class UpdateNumber extends Component {
    constructor(){
        super()
        this.state = {}
    }

    numberInput = createRef()

    UpdateNumber(favoriteNumber){
        store.dispatch({favoriteNumber, type: UPDATE_FAVORITE_NUMBER})
    }

    render() {
        return (
        <div>
           <input
           placeholder='favorite number'
           onChange={() => this.UpdateNumber(this.numberInput.current.value)}
           ref={this.numberInput} /> 
        </div>
        )
    }
}

export default UpdateNumber
