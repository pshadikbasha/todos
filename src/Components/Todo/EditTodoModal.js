import React ,{useState,useEffect}from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {updateTodo} from '../../redux/actions/todoaction';
import UserSelectOption from '../Users/UserSelectOption';
 
const EditTodoModal=({current,updateTodo})=>{
    const[message,setMessage]=useState('');
    const[attention,setAttention]=useState(false);
    const[user,setUser]=useState('')
    useEffect(()=>{
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setUser(current.user)
        }
    },[current])
    const onSubmit=()=>{
        if(message===''|| user===''){
            M.toast({html:'Plese add todo and and user'})
        }
        else{
            const upTodo={
                id:current.id,
                message,
                attention,
                user,
                date:new Date()
            }
            updateTodo(upTodo);
            M.toast({html:`todo updated by ${user}`})
            setMessage('');
            setUser('');
            setAttention(false);
        }
    }
    return(
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>
                <div className="row">
                <div className="input-field">
                    <input type='text' name="message" value={message} onChange={e=>setMessage(e.target.value)}></input>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <select name="user" value={user} className="browser-default" onChange={e=>setUser(e.target.value)}>
                    <option value="" disabled>select User</option>
                    <UserSelectOption></UserSelectOption>
                    </select>

                </div>

          

            </div>
            </div>
            <div className="row">
            <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
                
            </div>
        <div className="modal-footer">
            <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
        </div>
        </div>
    )
}
const modalStyle={
  width:'75%',
  height:'75%'
}
EditTodoModal.propTypes={
    current:PropTypes.object,
    updateTodo:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
    current:state.todo.current
})
export default connect(mapStateToProps,{updateTodo})(EditTodoModal);