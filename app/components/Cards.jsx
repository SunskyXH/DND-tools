import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return(
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="皮皮猪"
            extra={<span>圣武士</span>}
          />
          <Card.Body>
            <div>等级:1</div>
          </Card.Body>
          <Card.Footer content="" extra={<div>>></div>} />
        </Card>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="香香鱼"
            extra={<span>巡林客</span>}
          />
          <Card.Body>
            <div>等级:1</div>
          </Card.Body>
          <Card.Footer content="" extra={<div>>></div>} />
        </Card>
        <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="新建"
            />
            <Card.Body>
              <div>新建人物</div>
            </Card.Body>
            <Card.Footer content="" extra={<div>>></div>} />
          </Card>
          <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
}
