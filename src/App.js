import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';

class Calculator extends React.Component {
	// sets default state values
	state = {
		value: null,
		displayValue: '0',
		waitingForOperand: false,
		operator: null
	}

	//takes the display value and changes it to the digit inputted
	inputDigit(digit) {
		const {displayValue, waitingForOperand} = this.state

		//if waitingForOperand is true then clear the display and input the new value, otherwise append the digit to the end of the string
		if(waitingForOperand) {
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false
			})
		} else {
			//if the display value is 0 then replace it with the digit, otherwise append the digit to the end of the string
			this.setState({
				displayValue: displayValue === '0' ? String(digit) : displayValue + digit
			})
		}
	}

	//adds a decimal to the display value
	inputDecimal() {
		const {displayValue, waitingForOperand} = this.state

		//if waiting for operand is true clear the display and input a decimal and set waitingForOperand to false
		if(waitingForOperand) {
			this.setState({
				displayValue: '.',
				waitingForOperand: false
			})
		} else {
			//only if we don't have a decimal value will we make a change to the display value
			if(displayValue.indexOf('.') === -1) {
				this.setState({
					displayValue: displayValue + '.',
					waitingForOperand: false
				})
			}
		}
	}

	//resets the display value to 0
	clearDisplay() {
		const {displayValue} = this.state
		this.setState({
			displayValue: '0'
		})
	}

	//switches the sign from negative to positive and vice versa
	switchSign() {
		const {displayValue} = this.state

		//if the character at index 0 is a - then remove it, otherwise add a - before the display value
		this.setState({
			displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
		})
	}

	//change the display value to a percentage
	changeToPercent() {
		const {displayValue, operator} = this.state
		//parse displayValue and return a floating point number
		const value = parseFloat(displayValue)

		//divide the floating point value by 100 and return it as a string
		this.setState({
			displayValue: String(value / 100)
		})
	}

	//executes the inputted operation
	executeOperation(nextOperator) {
		const {displayValue, operator, value} = this.state
		//parse displayValue and return a floating point number
		const nextValue = parseFloat(displayValue)

		//sets up the logic for the different operations that can occur, passing into different functions the arguments of the previous and next values
		const operations = {
			'/': (prevValue, nextValue) => prevValue / nextValue,
			'*': (prevValue, nextValue) => prevValue * nextValue,
			'+': (prevValue, nextValue) => prevValue + nextValue,
			'-': (prevValue, nextValue) => prevValue - nextValue,
			'=': (prevValue, nextValue) => nextValue
		}

		//if there is no previous value, and they hit an operator key then save the current display value
		if(value == null) {
			this.setState({
				value: nextValue
			})
			//if there is an operator then search the operations array using the operator and plug the currentValue and nextValue
		} else if(operator) {
			const currentValue = value || 0
			const computedValue = operations[operator](currentValue, nextValue)

			//set the value and the displayValue to the computed value
			this.setState({
				value: computedValue,
				displayValue: String(computedValue)
			})
		}

		//set waitingForOperand to true when operator is entered. Assign the next operator to the operator property in state
		this.setState({
			waitingForOperand: true,
			operator: nextOperator
		})
	}

	render() {
		const {displayValue} = this.state

		return (
			<div className="calculator container">
				<div className="container title">
					<h1 className="text-center">
						React.JS Calculator
					</h1>
					<h3 className="text-center">By James Ticer</h3>
					<hr/>
				</div>

				<div className="container" id="display">
					<div className="row">
						<div className="calculator-display text-right">{displayValue}</div>
					</div>
				</div>
				<div className="calculator-keypad container">

					<div className="function-keys row">
						<button className="calculator-key key-clear btn btn-default btn-lg col-xs-3"
								  onClick={() => this.clearDisplay()}>AC
						</button>
						<button className="calculator-key key-sign btn btn-default btn-lg col-xs-3"
								  onClick={() => this.switchSign()}>+/-
						</button>
						<button className="calculator-key key-percent btn btn-default btn-lg col-xs-3"
								  onClick={() => this.changeToPercent()}>%
						</button>
						<button className="calculator-key key-divide btn btn-default btn-lg col-xs-3"
								  onClick={() => this.executeOperation('/')}>/
						</button>
					</div>

					<div className="row">
						<button className="calculator-key key-7 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(7)}>7
						</button>
						<button className="calculator-key key-8 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(8)}>8
						</button>
						<button className="calculator-key key-9 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(9)}>9
						</button>
						<button className="calculator-key key-multiply btn btn-default btn-lg col-xs-3"
								  onClick={() => this.executeOperation('*')}>*
						</button>
					</div>

					<div className="row">
						<button className="calculator-key key-4 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(4)}>4
						</button>
						<button className="calculator-key key-5 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(5)}>5
						</button>
						<button className="calculator-key key-6 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(6)}>6
						</button>
						<button className="calculator-key key-subtract btn btn-default btn-lg col-xs-3"
								  onClick={() => this.executeOperation('-')}>-
						</button>
					</div>

					<div className="row">
						<button className="calculator-key key-1 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(1)}>1
						</button>
						<button className="calculator-key key-2 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(2)}>2
						</button>
						<button className="calculator-key key-3 btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDigit(3)}>3
						</button>
						<button className="calculator-key key-add btn btn-default btn-lg col-xs-3"
								  onClick={() => this.executeOperation('+')}>+
						</button>
					</div>

					<div className="row">
						<button className="calculator-key key-0 btn btn-default btn-lg col-xs-6"
								  onClick={() => this.inputDigit(0)}>0
						</button>
						<button className="calculator-key key-decimal btn btn-default btn-lg col-xs-3"
								  onClick={() => this.inputDecimal()}>.
						</button>
						<button className="calculator-key key-equals btn btn-default btn-lg col-xs-3"
								  onClick={() => this.executeOperation('=')}>=
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
