import React, { Component } from "react";

class R024_ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state 선언, 컴포넌트내에서 전역변수로 사용
      StateString: this.props.reactString,
      StateNumber: 200,
    };
  }

  render() {
    return (
      <div style={{ padding: "0px" }}>
        {this.state.StateString}
        {this.state.StateNumber}
      </div>
    );
  }
}

export default R024_ReactState;
