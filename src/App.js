import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import {Navbar, Jumbotron, Button} from 'react-bootstrap';

class Calculator extends React.Component {
	render() {
		return (
			/* creates the calculator container */
			<div className="calculator container-fluid">
				/* creates the top row for the calculator display*/
				<div className="row">
					<div className="calculator-display col-md-12">0</div>
				</div>
				/* div to contain all of the keys on the calculator */
				<div className="calculator-keypad">
					/* creates the second row */
					<div className="function-keys row">
						<button className="col-md-3 calculator-key key-clear btn btn-primary btn-lg">AC</button>
						<button className="col-md-3 calculator-key key-sign btn btn-info btn-lg">+/-</button>
						<button className="col-md-3 calculator-key key-percent btn btn-info btn-lg">%</button>
						<button className="col-md-3 calculator-key key-divide btn btn-warning btn-lg">/</button>
					</div>
					/* creates the third row */
					<div className="row">
						<button className="col-md-3 calculator-key key-7 btn btn-lg">7</button>
						<button className="col-md-3 calculator-key key-8 btn btn-lg">8</button>
						<button className="col-md-3 calculator-key key-9 btn btn-lg">9</button>
						<button className="col-md-3 calculator-key key-multiply btn btn-warning btn-lg">*</button>
					</div>
					/* creates the fourth row */
					<div className="row">
						<button className="col-md-3 calculator-key key-4 btn btn-lg">4</button>
						<button className="col-md-3 calculator-key key-5 btn btn-lg">5</button>
						<button className="col-md-3 calculator-key key-6 btn btn-lg">6</button>
						<button className="col-md-3 calculator-key key-subtract btn btn-warning btn-lg">-</button>
					</div>
					/* creates the fifth row */
					<div className="row">
						<button className="col-md-3 calculator-key key-1 btn btn-lg">1</button>
						<button className="col-md-3 calculator-key key-2 btn btn-lg">2</button>
						<button className="col-md-3 calculator-key key-3 btn btn-lg">3</button>
						<button className="col-md-3 calculator-key key-add btn btn-warning btn-lg">+</button>
					</div>
					/* creates the sixth row */
					<div className="row">
						<button className="col-md-6 calculator-key key-0 btn btn-lg">0</button>
						<button className="col-md-3 calculator-key key-decimal btn btn-lg">.</button>
						<button className="col-md-3 calculator-key key-equals btn btn-warning btn-lg">=</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
