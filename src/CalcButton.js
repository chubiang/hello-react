import React, { Component } from 'react';
// children 따로 설정안해줘도 태그안에 쓰면 부모 컴포넌트 태그안의 값
// 그대로 전달됨.
class CalcButton extends Component {
  render() {
    let { symbol, clickEvent, btnStyle, children } = this.props;
    return (
      <button onClick={clickEvent} style={btnStyle}>{children}</button>
    );
  }
}

CalcButton.defaultProps = {
  symbol: 'x',
  btnStyle: {
    backgroundColor: 'yellow',
    padding: '10px 20px',
    border: '1px solid gray',
    fontSize: '15px'
  },
  childrend:'x'
};

export default CalcButton;
