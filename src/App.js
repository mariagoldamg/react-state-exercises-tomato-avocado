
import './App.css';
import { Component } from 'react';
import Avocado from './Avocado';
import Tomato from './Tomato';

class App extends Component {

  state = {
    show: true
  }


  render (){
    const btnText = this.state.show ? "TOMATO" : "AVOCADO";
  return (
   
    <div className="App">
   <p>{this.state.show ? <Avocado/> : <Tomato/>}</p>
   <button onClick = {()=>{this.setState({show: ! this.state.show})}}>{ btnText }</button>
    </div>
  );
}


  }
export default App;
