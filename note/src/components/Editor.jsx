import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    render() {
        return (
            <div className="parent">
                <div className="input-text1">
                    <h3>Input</h3>
                    <textarea
                        className="input-text2"
                        onChange={this.handleInputChange}
                        value={this.state.inputText}
                    />
                </div>
                <div className="output-text1">
                    <h3>Pro Note</h3>
                    <textarea className='output-text2' value={this.state.inputText} readOnly/>

                </div>
            </div>
        );
    }
}

export default Editor;