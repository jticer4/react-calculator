import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">0</div>
         <div className="calculator-keypad">
				<div className="input-keys">
					<div className="function-keys">
						<button className="calculator-key key-clear btn">AC</button>
						<button className="calculator-key key-sign btn">+/-</button>
						<button className="calculator-key key-percent btn">%</button>
						<button className="calculator-key key-divide btn">/</button>
					</div>
					<div className="digit-keys">
						<div className="row-1">
							<button className="calculator-key key-1 btn">1</button>
							<button className="calculator-key key-2 btn">2</button>
							<button className="calculator-key key-3 btn">3</button>
							<button className="calculator-key key-multiply btn">*</button>
						</div>
						<div className="row-2">
							<button className="calculator-key key-4 btn">4</button>
							<button className="calculator-key key-5 btn">5</button>
							<button className="calculator-key key-6 btn">6</button>
							<button className="calculator-key key-subtract btn">-</button>
						</div>
						<div className="row-3">
							<button className="calculator-key key-7 btn">7</button>
							<button className="calculator-key key-8 btn">8</button>
							<button className="calculator-key key-9 btn">9</button>
							<button className="calculator-key key-add btn">+</button>
						</div>
						<div className="row-4">
							<button className="calculator-key key-0 btn">0</button>
							<button className="calculator-key key-decimal btn">.</button>
							<button className="calculator-key key-equals btn">=</button>
						</div>
					</div>
				</div>
			</div>
      </div>
    );
  }
}

export default Calculator;
