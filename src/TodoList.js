import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './style.css'



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InputValue: '',
            List: []
        }
        this.HandleGetValue = this.HandleGetValue.bind(this);
        this.HandleChangeList = this.HandleChangeList.bind(this);
        this.HandleItemDelete = this.HandleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <label htmlFor='insertArea'>Enter</label>
                <input
                    id='insertArea'
                    className='input'
                    value={this.state.InputValue}
                    onChange={this.HandleGetValue}
                />
                <button
                    onClick={this.HandleChangeList}
                >Submit</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.List.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    index={index}
                    item={item}
                    HandleItemDelete={this.HandleItemDelete}
                />
            )
        })
    }

    HandleGetValue(e) {
        const value = e.target.value;
        this.setState(() => ({
            InputValue: value
        }))
    }

    HandleChangeList() {
        this.setState((prevState) => {
            const list = [...prevState.List, prevState.InputValue]
            return {
                List: list,
                InputValue: ''
            }
        });
    }

    HandleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.List]
            list.splice(index, 1)
            return {List:list}
        })
    }

}

export default TodoList;