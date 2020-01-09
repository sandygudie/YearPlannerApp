import React, { Component } from 'react';

import GoalList from './components/GoalList';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       goals:[],
       newGoal: ""
    }
    
   this.handleInput = this.handleInput.bind(this);
   this.handlesubmit = this.handleSubmit.bind(this);
   this.deleteGoal = this.deleteGoal.bind(this);
   this.toggleComplete = this.toggleComplete.bind(this);
  }
  

  handleInput(event){
    this.setState({
      newGoal: event.target.value
    });

  }

  handleSubmit(event){
    this.addGoal(this.state.newGoal);
    event.preventDefault();
  }

  addGoal(goalValue){
    const newGoal = {
      id: 1 + this.state.goals.length,
      value: goalValue,
      completed: false
    };
    
    let list = [...this.state.goals];
    list.push(newGoal);

    this.setState({
      goals: list,
      newGoal: ""
    });
  }

  deleteGoal(id){
    let presentList = [...this.state.goals];
    let updatedList = presentList.filter(goal => goal.id !== id);

    this.setState({
      goals: updatedList});
  }

  toggleComplete(id){
    let presentGoals = this.state.goals;
    presentGoals.forEach(goal => {
      if(goal.id === id){
        goal.completed = !goal.completed;
      } 
    });
    this.setState({
      goals: presentGoals
    })
  }

  
  render() {
    return (
      <div className="App">
        <h1>Year Planner</h1>
        <div className="header">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input placeholder="Enter Goal Here..."
                  value={this.state.newGoal}
                  onChange={(e) => this.handleInput(e)} />
            <button type="submit">Add Goal</button>
          </form>
          
        </div>
        
        <GoalList goals={this.state.goals} deleteGoal={this.deleteGoal}  toggleComplete={this.toggleComplete}/>
        
      </div>
    )
  }
}


export default App;
