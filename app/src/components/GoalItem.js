import React, { Component } from 'react'

 class GoalItem extends Component {

    completedStyle = () => {
        return {
            textDecoration: this.props.goal.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        return (
            <li>
                <div>
                    <input type="checkbox" id="goal-checkbox" checked={this.props.goal.completed} onChange={() => this.props.toggleComplete(this.props.goal.id)}/>
                    <label htmlFor="goal-checkbox" className="item-checkbox" style={this.completedStyle()}>{this.props.goal.value}</label>
            
                </div>
                
                <button className="delete" onClick={() => this.props.deleteGoal(this.props.goal.id)}> Delete</button>
            </li>
        )
    }
}

export default GoalItem
