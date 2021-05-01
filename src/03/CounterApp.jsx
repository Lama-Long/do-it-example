import React, { Component } from 'react';
import Counter from './Counter2';

class CounterApp extends Component {
    render() {
        return <Counter count={this.props.count} onAdd={this.props.onAdd} />;
    }
}

export default CounterApp;
