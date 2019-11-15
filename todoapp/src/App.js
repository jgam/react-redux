import React,{Component} from 'react';
import Name from './Name.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem: "",
      list: []
    };
  }

  updateInput(key, value){
    this.setState({[key]:value});
  }

  addItem(){
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:''
    });
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList});
  }


  render(){
    return (
      <div className="App">
        <h1 className='title'>Todo App</h1>
          <Name name="jimmy"/>
          <input 
            type='text'
            placeholder="what will you do today?"
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
          />
          <button onClick={()=>this.addItem()}></button>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={()=> this.deleteItem(item.id)}>
                    <i>x</i>
                  </button>
                </li>
              );
            })}
          </ul>
      </div>
    );
  }
  
}

export default App;
