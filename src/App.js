import React, { Component } from 'react';
import './App.css';
import Control from './components/common/Control';
import Output from './components/Output';

type State = {
  outputValue: string;
};

const DIGITS = {
  ZERO : '0',
  ONE  : '1',
  TWO  : '2',
  THREE: '3',
  FOUR : '4',
  FIVE : '5',
  SIX  : '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE : '9'
};

const SIGNS = {
  PLUS : '+',
  MINUS: '-'
};

class App extends Component<{}, State> {
  state = {
    outputValue: ''
  };
  
  constructor(props, state) {
    super(props, state);
    
    this.onControlClick = this.onControlClick.bind(this);
  }
  
  onControlClick(value: string) {
    if (this.isSign(value)) {
      if (this.isSign(this.state.outputValue.substr(-1))) {
        console.log('Cant sign');
        return;
      }
    }
    this.setState(prevState => ({outputValue: prevState.outputValue + value}));
  }
  
  isSign(value: string): boolean {
    return Object.values(SIGNS).find(s => s === value) !== undefined;
  }
  
  render() {
    return (
        <div className="container">
          <Output value={this.state.outputValue}/>
          
          <div className="controls">
            <Control onClick={this.onControlClick} value={DIGITS.NINE}/>
            <Control onClick={this.onControlClick} value={DIGITS.EIGHT}/>
            <Control onClick={this.onControlClick} value={DIGITS.SEVEN}/>
            <Control onClick={this.onControlClick} value={DIGITS.SIX}/>
            <Control onClick={this.onControlClick} value={DIGITS.FIVE}/>
            <Control onClick={this.onControlClick} value={DIGITS.FOUR}/>
            <Control onClick={this.onControlClick} value={DIGITS.THREE}/>
            <Control onClick={this.onControlClick} value={DIGITS.TWO}/>
            <Control onClick={this.onControlClick} value={DIGITS.ONE}/>
            <Control onClick={this.onControlClick} value={DIGITS.ZERO}/>
            <Control onClick={this.onControlClick} value={SIGNS.PLUS}/>
            <Control onClick={this.onControlClick} value={SIGNS.MINUS}/>
          </div>
        </div>
    );
  }
}

export default App;
