import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            formData: 'no data',
        };

        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new Data';
        const { formData } = this.state;

        this.setState({
            loading: false,
            formData: data + formData,
        });

        console.log('loading값', this.state.loading);
    }

    render() {
        const { loading, formData } = this.state;
        return (
            <div>
                <span>로딩중: {String(loading)}</span>
                <span>결과: {formData}</span>
            </div>
        );
    }
}

export default StateExample;
