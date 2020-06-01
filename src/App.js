import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';


class App extends Component{
  constructor (props){
    super(props)
    this.inputRef = React.createRef();
  }
  state = {
    InputType : {
      text : 'text',
      email : 'email',
      password : 'password'
    },
    Textvalue : ''

  }

  focusTextInput = () => {
    this.textInput.current.focus();
  }

 onChangeHandler = (event) => {
    this.setState({Textvalue: event.target.value})
  }

  render(){
    return(
      <div className="App">
        <h1>Form validation</h1>
        <Input  type="text" value={this.state.Textvalue} changed={(event) => {this.onChangeHandler(event)}}/>
        <Input type="email" value={this.state.Textvalue} changed={(event) => {this.onChangeHandler(event)}}/>
        <Input type="password" value={this.state.Textvalue} changed={(event) => {this.onChangeHandler(event)}}/>
        
      </div>
    )
  }

}


export default App;
