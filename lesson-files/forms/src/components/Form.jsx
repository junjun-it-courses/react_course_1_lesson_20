import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: this.props.text };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`A name was submitted: ${this.state.text}`);
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default Form;