import React, { Component } from 'react';
import GoalItem from './GoalItem';
import '../GoalList.css';

 class GoalList extends Component {
    

    render() {

        const goalEntries = this.props.goals;
        const listItems = goalEntries.map(goal => <GoalItem key={goal.id} goal={goal} deleteGoal={this.props.deleteGoal} toggleComplete={this.props.toggleComplete}/>);
        
        return (
            <div className="goalList">
                <ul>
                {listItems}
                </ul>                 
            </div>
        )
    }
}

export default GoalList
