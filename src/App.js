// Webpack을 써서 import 이런거 쓸 수 있음.
import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import CalcButton from './CalcButton.js';
import MyName from './MyName.js';
import Counter from './Counter.js';

class App extends Component {
  render() {
    const value = 1;
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    const btnStyle = {
      backgroundColor: 'white',
      padding: '10px 20px',
      border: '1px solid gray',
      fontSize: '15px'
    };


    return (
      <Fragment>
      {/* 주석 1 */}
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
      </div>
      <div style={style}>
        {
          (() => {
            if (value === 1) return ( <div>하나</div> );
            if (value === 2) return ( <div>둘</div> );
            if (value === 3) return ( <div>셋</div> );
          })()
        }
      </div>
      <CalcButton btnStyle={btnStyle} symbol="+">+</CalcButton>
      <CalcButton btnStyle={btnStyle} symbol="-">-</CalcButton>
      <CalcButton >x</CalcButton>
      <MyName name='곰찌'></MyName>
      <Counter/>
      </Fragment>
    );
  }
}

export default App;
