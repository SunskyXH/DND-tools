import React from 'react';
import { NavBar, Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile';
import { browserHistory } from 'react-router';
const cards = [
  {
    "name": "皮皮猪",
    "profession":"圣武士",
    "level": "1"
  },{
    "name": "皮皮猪二号",
    "profession":"战士",
    "level": "1"
  }
]

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addCard = this.addCard.bind(this);
  }
  addCard () {
    browserHistory.push('/buildcard');
  }
  render () {
    return(
      <div>
        <NavBar
          mode='dark'
          iconName=""
          rightContent={<Icon type="plus" onClick={this.addCard}/>}
        >Cards</NavBar>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          {cards.map((card,k) =>
            <div key={k}>
              <Card >
                <Card.Header
                  title={card.name}
                  extra={<span>{card.profession}</span>}
                />
                <Card.Body>
                  <div><Icon type="user" />等级:{card.level}</div>
                </Card.Body>
                <Card.Footer content="" extra={<Icon type="ellipsis" />} />
              </Card>
              <WhiteSpace size="lg" />
            </div>
          )}
        </WingBlank>
      </div>

    )
  }
}
