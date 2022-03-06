import React, { Component } from 'react';

class Updaittime extends Component {
    constructor(props) {
        super(props);
            this.state = {
                time: new Date()
            }
    }
    setTime=()=> {
        this.setState({time: new Date()})
    }
    componentDidMount(){
        this.interVal = setInterval(() => this.setTime(), 1000);
    }
    componentWillUnmount(){
        this.interVal.clearInterVal();
    }
    render() {
        return (
            <div>
               { this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Updaittime;
