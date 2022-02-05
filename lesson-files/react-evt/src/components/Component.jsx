import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>{`${this.state.count} clicks`}</button>
            </form>
        );
    }
}

export default Component;