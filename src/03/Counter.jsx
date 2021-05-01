import React, { Component } from 'react';

class Counter extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            count: props.count,
        };
    }

    increaseCount = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    render() {
        return (
            <div>
                현재 카운트: {this.state.count}
                <button onClick={this.increaseCount}>카운트 증가</button>
            </div>
        );
    }
}

export default Counter;
