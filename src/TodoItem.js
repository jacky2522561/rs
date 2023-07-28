import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        const {item} = this.props;
        if(nextProps.item != item){
            return true;
        }else{
            return false;
        }
    }

    render() {
        const {item} = this.props;
        console.log('hi');
        return (
            <div onClick={this.handleClick}>
                {item}
            </div>
        )
    }

    handleClick() {
        const {HandleItemDelete,index} = this.props;
        HandleItemDelete(index);
    }
}

TodoItem.propTypes = {
    item: PropTypes.string,
    index: PropTypes.number,
    HandleItemDelete: PropTypes.func
}

export default TodoItem;


