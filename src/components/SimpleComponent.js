// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  
    constructor(){
        super()
        this.state = { mood: "happy" }
    }

    onHandleClick = () => {{
        this.setState({
            mood: "sad"
        })
    }}

    render() {
        return (
            <div onClick={this.onHandleClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent