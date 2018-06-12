import React from 'react';

class GroceryForm extends React.Component {
state = { name: ""}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.addGrocery(this.state.name);
  this.setState({ name: ""})
}

handleChange = (e) => {
  this.setState({ name: e.target.value});
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <input 
        placeholder="Add a grocery item"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
    </form>
    )
  }
}

export default GroceryForm;