import React from 'react';

export default class Clock extends React.Component {
    render() {
        return (
            <h1>
                <span>Hello {new Date().toLocaleTimeString(this.props.local)}</span>
            </h1>
        );
    }
}