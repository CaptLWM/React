import React, { Component } from "react";

class R010_Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //
    // var s= '문자열', 숫자, object, 배열

    var varName = "react";
    console.log("varName1 : " + varName);
    var varName = "200"; // 'varName' is already defined  no-redeclare
    console.log("varName2 : " + varName);
    // let은 재정의 할 수 없음, 재사용은 가능
    let letName = "react";
    console.log("letName1 : " + letName);
    // let letName = '200' // Parsing error: Identifier 'letName' has already been declared
    letName = "react200";
    console.log("letName2 : " + letName);

    // const는 재정의, 재사용 불가
    const constName = "react";
    console.log("constName : " + constName);
    // const constName = '200' // Parsing error: Identifier 'constName' has already been declared
    // constName = 'react200' // Uncaught TypeError: Assignment to constant variable.
  }

  render() {
    return <h2>[ THIS IS Variable ]</h2>;
  }
}

export default R010_Variable;
