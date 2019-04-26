import React, { Component } from 'react';
import classNames from 'classnames/bind';
import CalcButton from './CalcButton.js';
import styles from './App.css';
const cx = classNames.bind(styles);

class Counter extends Component {
  state = {
    number: 1,
    display: 'Component-visible'
  }

  onChange = (e) => {
    let { value } = e.target;
    this.setState({
      number: value
    });
  }
  handleIncrease = () => {
    this.setState(
      ({ number }) => ({
        number: ++number
      })
    );
  }
  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: --number
      })
    );
  }


  render() {
    return (
      <div>
        <h1>숫자 카운팅</h1>
        {/* value 속성을 쓰면 readOnly속성에 더 적합하다고 defaultValue 쓰라함. */}
        <div>값 셋팅: <input type="text" id="num" onInput={this.onChange} defaultValue={this.state.number} /></div>
        <span>값: {this.state.number}</span>
        {/* 컴포넌트에 onClick event를 주려면 해당 컴포넌트에 직접
          onClick 이벤트를 걸어놔야 상위 컴포넌트에서 해당 함수를
          넘겨줄 수 있다. */}
        <CalcButton clickEvent={this.handleIncrease} symbol="+">+</CalcButton>
        <CalcButton clickEvent={this.handleDecrease} symbol="-">-</CalcButton>
        <br />
        <span id="helper" className={cx('compVisible')}>값 {this.state.number} 초과할 수 없습니다.</span>
      </div>
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    var helper = document.getElementById("helper");
    // 0이 false라서 10혀서 추가
    if(nextState.number || nextState.number == 0) {
      var input = document.getElementById("num");
      input.value = nextState.number;
      if(nextState.number < 5) {
      } else {
        nextState.number = 5;
        input.value = 5;
      }
    }
    return true;
  }

  // 컴포넌트 state 변화 감지 함수
  // This method doesn’t have access to the component instance.
  // Note that this method is fired on every render, regardless of the cause.
/*  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState);
    if(prevState.number > 5) {
      console.log("값 5를 초과함.");
      prevState.number = 5;
    }
    // 무조건 뭐라도 return 해야 에러안남.
    return true;
  }*/
}



export default Counter;
