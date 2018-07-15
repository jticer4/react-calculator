import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">0</div>
         <div className="calculator-keypad">
				<div className="input-keys">
					<div className="function-keys">
						<button className="calculator-key key-clear">AC</button>
						<button className="calculator-key key-sign">+/-</button>
						<button className="calculator-key key-percent">%</button>
						<button className="calculator-key key-divide">/</button>
					</div>
					<div className="digit-keys">
						<div className="row-1">
							<button className="calculator-key key-1">1</button>
							<button className="calculator-key key-2">2</button>
							<button className="calculator-key key-3">3</button>
							<button className="calculator-key key-multiply">*</button>
						</div>
						<div className="row-2">
							<button className="calculator-key key-4">4</button>
							<button className="calculator-key key-5">5</button>
							<button className="calculator-key key-6">6</button>
							<button className="calculator-key key-subtract">-</button>
						</div>
						<div className="row-3">
							<button className="calculator-key key-7">7</button>
							<button className="calculator-key key-8">8</button>
							<button className="calculator-key key-9">9</button>
							<button className="calculator-key key-add">+</button>
						</div>
						<div className="row-4">
							<button className="calculator-key key-0">0</button>
							<button className="calculator-key key-decimal">.</button>
							<button className="calculator-key key-equals">=</button>
						</div>
					</div>
				</div>
			</div>
      </div>
    );
  }
}

export default Calculator;
