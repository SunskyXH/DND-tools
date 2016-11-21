import React from 'react';
import { NavBar, Card, WingBlank, WhiteSpace, Icon, List, InputItem, Popup } from 'antd-mobile';
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
    this.state = { profession:'' };
    this.goBack = this.goBack.bind(this);
    this.chooseProfesstion = this.chooseProfesstion.bind(this);
    this.onCloseProfession = this.onCloseProfession.bind(this)
  }
  goBack () {
    browserHistory.push('/');
  }
  chooseProfesstion () {
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
              {...getFieldProps('name')}
              extra={this.state.profession}
              arrow="horizontal"
              onClick={this.chooseProfesstion}
              >职业</Item>
        </List>
      </div>

    )
  }
}
BuildCard = createForm()(BuildCard);
export default BuildCard
