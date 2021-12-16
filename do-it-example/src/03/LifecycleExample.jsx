import React from 'react';

class LifecycleExample extends React.Component {
  // 2. props를 전달받아 this.state를 변경
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  // 1. 맨 처음에 생성될 때 한번만 호출된다. state, 변수를 초기화
  constructor(props) {
    super(props);
    // getDerivedStateFromProps를 사용하기 때문에
    // 경고 메세지를 건너뛰기위해 초기 상태를 설정합니다.
    this.state = {};
    console.log('constructor 호출');
  }
  // 4. render()함수 실행이후에 호출된다.
  //    화면에 모두 표현된 이후 해야하는 작업들은 여기에서 하면 된다
  componentDidMount() {
    console.log('componentDidMount 호출');
    // this.setState({ updated: true});
    this.forceUpdate();
  }
  // 6. DOM 정보를 변경할 때 사용한다.
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }
  //7. 컴포넌트가 소멸되기 직전에 호출되는 함수
  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }
  // 5. 컴포넌트의 변경된 내용이 가상 화면에 환성된 이후 호출되는 함수
  // 화면에 출력될 DOM 정보에 접근할 때 사용된다.
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    return {};
  }
  // 데이터 변화를 비교하여 화면을 새로 출력할지 말지 판단한다.
  // forceUpdate() 함수를 화면에 출력하면 이 함수는 호출되지 않는다.
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    return false;
  }
  // 3. 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출된다
  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifecycleExample;
