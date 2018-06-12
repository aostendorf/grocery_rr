import React, { Component } from 'react';
import GroceryForm from './components/GroceryForm';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = { groceries: [] }

  componentDidMount() {
    fetch('/api/groceries')
      .then( res => res.json() )
      .then( groceries => this.setState({ groceries }) )
  }

  addGrocery = (name) => {
    const { groceries } = this.state;
    const id = Math.floor(( 1 + Math.random()) * 0x1000).toString()
    this.setState({ groceries: [...groceries, { id, name }] });
  }


  updateGrocery = (id) => {
    let groceries = this.state.groceries.map( t => {
      if (t.id === id)
        return { ...t, complete: !t.complete }
      return t;
    });
  
    this.setState({ groceries });
  }

  deleteGrocery = (id) => {
    const { groceries } = this.state;
    this.setState({ groceries: groceries.filter( t => t.id !== id ) })
  }

  render() {

    return (
      <div className="container">
      <GroceryForm addGrocery={this.addGrocery} />
      <GroceryList
      groceries={this.state.groceries}
      updateGrocery={this.updateGrocery}
      deleteGrocery={this.deleteGrocery}/>
      </div>
      
    );
  }
}


export default App;
