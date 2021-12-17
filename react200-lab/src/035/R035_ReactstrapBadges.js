import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class R035_ReactstrapBadges extends Component {
  render() {
    return (
      //Badge 부모 밑에 새로 항목 집어 넣고 싶을때 사용
      <div>
        <h1>
          PRODUCT NAME <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>
          pill
        </Badge>
        <Badge href="http://example.com" color="light">
          GoLink
        </Badge>
      </div>
    );
  }
}

export default R035_ReactstrapBadges;
