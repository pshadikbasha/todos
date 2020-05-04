import React ,{useState}from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../../redux/actions/todoaction';
import UserSelectOption from '../Users/UserSelectOption';
const AddTodoModal=({addTodo})=>{
    const[message,setMessage]=useState('');
    const[attention,setAttention]=useState(false);
    const[user,setUser]=useState('')
    const onSubmit=()=>{
        if(message===''|| user===''){
            M.toast({html:'Plese add todo and and user'})
        }else{
           const newLog={
               message,
               attention,
               user,
               date:new Date()
           }
           addTodo(newLog);
           M.toast({html:`Todo added by ${user}`})
            setMessage('');
            setUser('');
            setAttention(false);
        }
    }
    return(
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter ToDo</h4>
                <div className="row">
                <div className="input-field">
                    <input type='text' name="message" value={message} onChange={e=>setMessage(e.target.value)}></input>
                    <label htmlFor="message" className="active">Enter Todo Here</label>
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
AddTodoModal.propTypes={
    addTodo:PropTypes.func.isRequired,
}
const modalStyle={
  width:'75%',
  height:'75%'
}
export default connect(null,{addTodo})(AddTodoModal);