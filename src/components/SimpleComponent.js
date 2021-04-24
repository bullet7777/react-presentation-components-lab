// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            mood:'happy'
        }

    }
    handleClick = () => {
        this.setState({
            mood: this.state.mood === 'sad' ? 'happy' :'sad'
        })
        
    }




    render() {
        return (
            <div onClick={this.handleClick}>
               {this.state.mood}
            </div>
        )
    }
}
