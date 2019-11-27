import React, { Component } from 'react';
import './Calculator.css';

import Display from '../components/Display'
import Button from '../components/Button'

export default class Calculator extends Component {

    state = {
        oldValueDisplay: "0",
        currentValueDisplay: "0",
        operationExists: false,
        executeOperation: false,
        previousOperation: null
    }

    addDigit = (digit) => {
        if (this.state.currentValueDisplay === "0" || this.state.operationExists) {
            this.setState({ currentValueDisplay: digit, operationExists: false });
        } else {
            const currentValueDisplay = this.state.currentValueDisplay + digit;
            this.setState({ currentValueDisplay });
        }
    }

    clearMemory = () => this.setState(
        { currentValueDisplay: "0", oldValueDisplay: "0", executeOperation: false });

    setOperation = (operation) => {
        const isEqual = operation === '=' ? this.state.previousOperation : operation

        if (this.state.executeOperation === true
            && (this.state.previousOperation === operation
                || operation === '=')) {
            this.setState({
                oldValueDisplay: this.getOperation(operation),
                currentValueDisplay: this.getOperation(operation)
            }, console.log(this.getOperation(this.state.previousOperation)));
        } else {
            this.setState({
                oldValueDisplay: this.state.currentValueDisplay,
                executeOperation: true
            });
        }

        this.setState({ operationExists: true, previousOperation: isEqual }/* ,
            console.log(`Atual: ${operation} Anterior: ${this.state.previousOperation}`) */)
    }

    getOperation = (operation) => {
        const oldValueDisplay = Number(this.state.oldValueDisplay);
        const currentValueDisplay = Number(this.state.currentValueDisplay);

        return operation === '+' ? oldValueDisplay + currentValueDisplay :
            operation === '-' ? oldValueDisplay - currentValueDisplay :
                operation === '*' ? oldValueDisplay * currentValueDisplay :
                    operation === '/' ? oldValueDisplay / currentValueDisplay :
                        this.getOperation(this.state.previousOperation)
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.currentValueDisplay} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}
