import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import axios from 'axios'


class App extends Component {
  state = {
    name: '',
    results: []
  }

  getInfo = (name) => {
    console.log(name);
    axios.get('https://api.github.com/search/repositories?q='+ name)
      .then(( data ) => {
        this.setState({
          results: data.data                          
        })
      })
  }

  handleInputChange = () => {
   this.setState({
     name: this.search.value
   })
 }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          search users here :
        </p> <hr/>
        <form>
       <input
         placeholder="Search..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <button onClick={this.getInfo(this.state.name)}>Search User</button>
       <p>Users</p>
       <p>{this.state.name}</p>
     </form>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
