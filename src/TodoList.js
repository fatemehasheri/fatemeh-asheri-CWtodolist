import React , {Component} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            list:['go gym','go school','go university', 'go hell'],
        }
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(){
        this.setState({list: [...this.state.list,this.state.value],value:' '})
    }

    render(){
        return(
        <ul>
            <li>
            <input type="text" value={this.state.value} onChange={e => {this.setState({value: e.target.value})}} />
            <button onClick={this.addTodo}>Add</button>
            
            </li>
            {this.state.list.map(todo=><li>{todo}</li>)}
        </ul>
        )
    }
}

export default TodoList ;