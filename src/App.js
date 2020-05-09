import React, {Component} from 'react';
import Additem from "./component/Additem/Additem";
import Todoitem from "./component/Todoitem/Todoitem";

class App extends Component {

  state = {
    message: "",

    items : [
      {id: 1, name: "Ahmed", age: 24},
      {id: 2, name: "Omar", age: 25},
      {id: 3, name: "Yassin", age: 26},

    ]
  }

deleteItem = (itemid) => {  
  const items = this.state.items;
  
  items.map((item, index) => {

    if (item.id === itemid) {
      items.splice(index, 1)
       
      if(items.length === 0){
          this.setState({items: items})
          return this.setState({
            message: "No item to show"
          })
      }
      return this.setState({items: items})
    }

    return true
  
  })
}

addItem = (item) => {
  item.id = Math.random()
  let items = this.state.items;
  let length = items.length
  if(length === 0){
    this.setState({message : ""})
  }

  items.push(item)
  this.setState({items})
}


  render(){

    return (
      <div className="App container">
        <h1>Todo App</h1>

        <Todoitem items={this.state.items} deleteItem={this.deleteItem} message={this.state.message} />
        <Additem addItem={this.addItem} />

        
      </div>
    );
  

  }
}

export default App;
