import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTodo,setCurrent} from '../../redux/actions/todoaction';
import M from 'materialize-css/dist/js/materialize.min.js';
const TodoItem=({todo,deleteTodo,setCurrent})=>{
    const onDelete=()=>{
        deleteTodo(todo.id);
        M.toast({html:'todo deleted'})
    }
    return(
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${todo.attention?'red-text':'blue-text'}`} onClick={()=>setCurrent(todo)}>{todo.message}</a>
                <br></br>
                <span className='grey-text'>
                    <span className="black-text">ID#{todo.id}</span>last updated by
                    <span className="black-text">{todo.user}</span>on {todo.date}
                </span>
                <a href="#!" onClick={onDelete}className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    deleteTodo:PropTypes.func.isRequired,
    setCurrent:PropTypes.func.isRequired,
}
export default connect(null,{deleteTodo,setCurrent})(TodoItem);
