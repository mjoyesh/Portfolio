import React, {Component} from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;