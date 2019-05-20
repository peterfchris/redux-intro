import React, { Component } from 'react'
import store from '../store'

export class FavoriteNumber extends Component {
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
        <h1>Favorite Number: {this.state.store.favoriteNumber}</h1>
      </div>
    )
  }
}

export default FavoriteNumber
