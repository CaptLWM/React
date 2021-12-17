import React, { Component } from "react";

class R013_ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFuc: "React200",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1, 3);
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + ". Es5 Function");
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ". Arrow Function : " + this.state.arrowFuc);
  };

  // 콜백함수(나중에 실행되는 함수, setTimeout())에 함수 밖의 this를 bind 해주면
  // this를 컴포넌트로 사용할 수 있다.
  Function3() {
    var this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ". Es5 Callback Function noBind : ");
      console.log(this.state.arrowFuc);
    }, 100); //.bind(this),100로 해줘야 오류 발생하지 않음, 하나로 묶어줘야함
  }

  Function4() {
    setTimeout(
      function () {
        console.log("4. Es5 Callback Function Bind : " + this.state.arrowFuc);
      }.bind(this),
      100
    );
  }

  //ES6 방식으로 화살표 함수 사용할 경우 bind 사용할 필요 없음
  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Function : " + this.state.arrowFuc);
    }, 100);
  };

  render() {
    return <h2>[ THIS IS ArrowFunction ]</h2>;
  }
}

export default R013_ArrowFunction;
