import React from 'react';
import { NavBar, Card, WingBlank, WhiteSpace, Icon } from 'antd-mobile';
import { browserHistory } from 'react-router'
import { RadialBarChart, RadialBar, Legend } from 'Recharts';
const prop = [
  { name:'STR', value:13, fill: '#8884d8' },
  { name:'DEX', value:11, fill: '#83a6ed' },
  { name:'INS', value:10, fill: '#8dd1e1' },
  { name:'WIZ', value:10, fill: '#82ca9d' },
  { name:'CON', value:12, fill: '#a4de6c' },
  { name:'CHA', value:12, fill: '#d0ed57' },
];
const style = {
  	top: 0,
  	left: 350,
  };
const PropChart = React.createClass({
	render () {
  	return (
      <RadialBarChart width={500} height={300} cx={150} cy={200} innerRadius={20} outerRadius={140} barSize={15} data={prop}>
        <RadialBar minAngle={15} label background clockWise={true} dataKey='value'/>
        <Legend iconSize={20} width={120} height={300} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
      </RadialBarChart>
    );
  }
})
const card = {
  "name":"皮皮猪",
  "race":"人类",
  "profession":"圣武士",
  "level":1
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
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
        <div className="myCard">
          <WingBlank size="lg">
          <p><Icon type='user' /> 名字:{card.name}</p>
          <p><Icon type='smile' /> 职业:{card.profession}</p>
          <p><Icon type="smile-circle" /> 种族:{card.race}</p>
          <p><Icon type="tag" /> LV:{card.level}</p>
          <PropChart />
          </WingBlank>
        </div>
      </WingBlank>
      </div>
    )
  }
}
