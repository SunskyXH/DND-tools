import React from 'react';
import { NavBar, Card, WingBlank, WhiteSpace, Icon, List, InputItem, Popup, Stepper,Button } from 'antd-mobile';
import { browserHistory } from 'react-router';
import { createForm } from 'rc-form';
const Item = List.Item;
const Brief = Item.Brief;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  // Note: the popup content will not scroll.
  wrapProps = {
    // onTouchStart: e => e.preventDefault(),
  };
}

class BuildCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profession:'',
      race:'',
    };
    this.goBack = this.goBack.bind(this);
    this.chooseProfession = this.chooseProfession.bind(this);
    this.onCloseProfession = this.onCloseProfession.bind(this);
    this.chooseRace = this.chooseRace.bind(this);
    this.onCloseRace = this.onCloseRace.bind(this);
  }
  goBack () {
    browserHistory.push('/');
  }
  chooseProfession () {
    Popup.show(<div>
      <List renderHeader={() => (
        <div style={{ position: 'relative' }}>
          选择职业
          <span
            style={{
              position: 'absolute', right: 3, top: -5,
            }}
            onClick={() => this.onCloseProfession('')}
          >
            <Icon type="cross" />
          </span>
        </div>)}
        className="popup-list"
      >
        {['战士', '圣武士', '武僧', '法师', '术士'].map((profession, index) => (
          <List.Item key={index} onClick={() => this.onCloseProfession(profession) }>{profession}</List.Item>
        ))}
      </List>
    </div>, { animationType: 'slide-up', wrapProps });
  }
  onCloseProfession(profession) {
    this.setState({ profession });
    Popup.hide();
  }
  chooseRace () {
    Popup.show(<div>
      <List renderHeader={() => (
        <div style={{ position: 'relative' }}>
          选择种族
          <span
            style={{
              position: 'absolute', right: 3, top: -5,
            }}
            onClick={() => this.onCloseRace('')}
          >
            <Icon type="cross" />
          </span>
        </div>)}
        className="popup-list"
      >
        {['人类', '精灵', '半身人', '兽人', '半兽人'].map((race, index) => (
          <List.Item key={index} onClick={() => this.onCloseRace(race) }>{race}</List.Item>
        ))}
      </List>
    </div>, { animationType: 'slide-up', wrapProps });
  }
  onCloseRace(race) {
    this.setState({ race });
    Popup.hide();
  }
  render () {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar
          mode='dark'
          leftContent="Cards"
          onLeftClick={this.goBack}
        >BuildCard</NavBar>
        <List>
          <InputItem
              {...getFieldProps('name')}
              clear
              placeholder="名称"
              >人物名称</InputItem>
            <Item
              {...getFieldProps('profession')}
              extra={this.state.profession}
              arrow="horizontal"
              onClick={this.chooseProfession}
              >职业</Item>
              <Item
                {...getFieldProps('race')}
                extra={this.state.race}
                arrow="horizontal"
                onClick={this.chooseRace}
                >种族</Item>
              <Item
                {...getFieldProps('level')}
                extra={<Stepper showNumber size="small" min={0} defaultValue={1} />}
                >初始等级</Item>
        </List>
        <div style={{ margin: '32px 8px' }}>
        <Button type="primary" >确认</Button>
      </div>
      </div>

    )
  }
}
BuildCard = createForm()(BuildCard);
export default BuildCard
