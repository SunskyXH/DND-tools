import React from 'react';
import { NavBar, Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile';
import { browserHistory } from 'react-router'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'Recharts';
const prop = [
  { name:'STR', value:13 },
  { name:'DEX', value:11 },
  { name:'CON', value:12 },
  { name:'INT', value:10 },
  { name:'WIS', value:10 },
  { name:'CHA', value:12 },
];
const PropChart = React.createClass({
	render () {
  	return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={prop} >
          <Radar name="name" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}  label={true} />
          <PolarGrid />
          <PolarAngleAxis dataKey="name"  />
          <PolarRadiusAxis tick={false}/>
        </RadarChart>
    );
  }
})
const card = {
  "name":"皮皮猪",
  "race":"人类",
  "profession":"圣武士",
  "level":1,
  "gander":"男",
  "ac":18,
  "bab":1,
  "character":"守序善良"
}
export default class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goBack = this.goBack.bind(this);
  }
  goBack () {
    browserHistory.push('/');
  }
  render () {
    return (
      <div>
        <NavBar
          mode='dark'
          leftContent="Cards"
          onLeftClick={this.goBack}
          >CardDetail</NavBar>
        <div className="myCard">
          <WingBlank size="lg">
          <p><Icon type='user' /> 名字:{card.name}</p>
          <p><Icon type='smile' /> 职业:{card.profession}/{card.character}</p>
          <p><Icon type="smile-circle" /> 种族:{card.race}/{card.gander}</p>
          <PropChart />
          <p><Icon type="tag" /> LV:{card.level} | AC:{card.ac} | BAB:{card.bab}</p>
          </WingBlank>
        </div>
      </div>
    )
  }
}
