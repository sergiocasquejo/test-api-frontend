import React from 'react';

class ToggleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    render() {
        return (
            <div>
                <div className="head" onClick={() => { this.setState({ toggle: ! this.state.toggle }) }}>{ this.props.head }</div>
                {
                    this.state.toggle &&
                    <div className="body">
                    <hr />
                    {
                        this.props.body
                    }
                    </div>
                }
            </div>
        )
    }
}

export default ToggleRow;