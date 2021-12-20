import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "./actions";

class StrAddButton extends Component {
  render() {
    return (
      // <input value='Add200' type="button" onClick={this.addString}/>
      <input value="Add200" type="button" onClick={this.props.addString} />
    );
  }

  // addString = () => {
  //     this.props.store.dispatch(add());
  // }
}

let mapDispatchToProps = (dispatch, props) => {
  console.log("Props from App.js : " + props.AppProp);
  return {
    addString: () => dispatch(add()),
  };
};

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;

/*
index.js
1. store 생성 {
     state:{
         str:'react'
     }
     data(action):{
         if(action.type=ADD)
            return state {
                str:state.str + '200'
            }
     }
     return state
}
2. this.props {
    indexProp:'react
} -> App

App.js
1. connect()로 store연결
    store.state->this.props {
        str:'react'
    }
*/
