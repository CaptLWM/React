import React, { Component } from "react";

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch("http://date.jsontest.com/"); //기다렸다가 데이터 오면 담음
    const body = await response.json(); // 데이터 json 형태로 변경
    alert(body.date);
  };

  render() {
    return <h1>fetch get</h1>;
  }
}

export default R059_FetchGet;
