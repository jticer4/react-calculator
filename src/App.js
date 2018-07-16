import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';

class Calculator extends React.Component {
	// sets the default display value to 0
	state = {
		displayValue: '0'
	}

	//takes the display value and changes it to the digit inputted
	inputDigit(digit) {
		const { displayValue } = this.state

		//if the display value is 0 then replace it with the digit, otherwise append the digit to the end of the string
		this.setState({
			displayValue: displayValue === '0' ? String(digit) : displayValue + digit
		})
	}

	inputDecimal() {
		const { displayValue } = this.state

		//only if we don't have a decimal value will we make a change to the display value
		if (displayValue.indexOf('.') === -1) {
			this.setState({
				displayValue: displayValue + '.'
			})
		}

	}

	render() {
		const { displayValue } = this.state

		return (

			<div className="calculator container-fluid">

				<div className="row">
					<div className="calculator-display col-md-12">{displayValue}</div>
				</div>

				<div className="calculator-keypad">

					<div className="function-keys row">
						<button className="col-md-3 calculator-key key-clear btn btn-primary btn-lg">AC</button>
						<button className="col-md-3 calculator-key key-sign btn btn-info btn-lg">+/-</button>
						<button className="col-md-3 calculator-key key-percent btn btn-info btn-lg">%</button>
						<button className="col-md-3 calculator-key key-divide btn btn-warning btn-lg">/</button>
					</div>

						<div className="row">
							<button className="col-md-3 calculator-key key-7 btn btn-lg" onClick={() => this.inputDigit(7)}>7</button>
							<button className="col-md-3 calculator-key key-8 btn btn-lg" onClick={() => this.inputDigit(8)}>8</button>
							<button className="col-md-3 calculator-key key-9 btn btn-lg" onClick={() => this.inputDigit(9)}>9</button>
							<button className="col-md-3 calculator-key key-multiply btn btn-warning btn-lg">*</button>
						</div>

						<div className="row">
							<button className="col-md-3 calculator-key key-4 btn btn-lg" onClick={() => this.inputDigit(4)}>4</button>
							<button className="col-md-3 calculator-key key-5 btn btn-lg" onClick={() => this.inputDigit(5)}>5</button>
							<button className="col-md-3 calculator-key key-6 btn btn-lg" onClick={() => this.inputDigit(6)}>6</button>
							<button className="col-md-3 calculator-key key-subtract btn btn-warning btn-lg">-</button>
						</div>

						<div className="row">
							<button className="col-md-3 calculator-key key-1 btn btn-lg" onClick={() => this.inputDigit(1)}>1</button>
							<button className="col-md-3 calculator-key key-2 btn btn-lg" onClick={() => this.inputDigit(2)}>2</button>
							<button className="col-md-3 calculator-key key-3 btn btn-lg" onClick={() => this.inputDigit(3)}>3</button>
							<button className="col-md-3 calculator-key key-add btn btn-warning btn-lg">+</button>
						</div>

						<div className="row">
							<button className="col-md-6 calculator-key key-0 btn btn-lg" onClick={() => this.inputDigit(0)}>0</button>
							<button className="col-md-3 calculator-key key-decimal btn btn-lg" onClick={() =>this.inputDecimal()}>.</button>
							<button className="col-md-3 calculator-key key-equals btn btn-warning btn-lg">=</button>
						</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
