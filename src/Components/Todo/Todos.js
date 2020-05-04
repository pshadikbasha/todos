import React,{useEffect} from 'react';
import TodoItem from './TodoItem';
import PreLoader from '../Layout/Preloader';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTodos} from '../../redux/actions/todoaction';
const Todos=({todo:{todos,loading},getTodos})=>{

   
    useEffect(()=>{
        getTodos();
        //eslint-disable-next-line
    },[])
    if(loading || todos===null){
        return <PreLoader></PreLoader>
    }
    return(
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>TODO</h4>

            </li>
            {!loading&&todos.length===0?(<p className="center">No Todo To Show</p>):(todos.map(todo=><TodoItem key={todo.id}todo={todo}></TodoItem>))}
            
        </ul>
    )
    }
    const mapStateToProps=state=>({
        todo:state.todo
    })
    Todos.propTypes={
        todo:PropTypes.object.isRequired,
        getTodos:PropTypes.func.isRequired,

    }
    export default connect(mapStateToProps,{getTodos} )(Todos);