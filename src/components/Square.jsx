import React from "react";

export class Square extends React.Component {
    render() {
        const buttonNumber = this.props.value;
        return (
            <button
                className="square"
                value={this.props.value}
                onClick={function () {
                    console.log("click: " + buttonNumber);
                }}
            >
                {this.props.value}
            </button>
        );
    }
}
