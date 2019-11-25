import React, { Component } from 'react';
import './App.css';

class MyButton extends Component {
  render() {
    return (
      <button
        onClick={() => { this.props.handleClick(this.props.label); }}>
        {this.props.label}
      </button>
    )
  }
}

class MyLabel extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      labelText: ''
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText })
  }

  render() {
    return (
      <div className="App">
        <MyLabel
          text={this.state.labelText === '' ? "Escrevendo no label" : this.state.labelText}
        />
        <MyButton handleClick={this.setLabelText} label="Button A" />
        <MyButton handleClick={this.setLabelText} label="Button B" />
        <MyButton handleClick={this.setLabelText} label="Button C" />
        <MyButton handleClick={this.setLabelText} label="Button D" />
      </div>
    );
  }
}

export default App;
