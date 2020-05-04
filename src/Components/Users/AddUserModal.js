import React ,{useState}from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addUsers} from '../../redux/actions/userAction';


const AddUserModal=({addUsers})=>{
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('')
    const onSubmit=()=>{
        if(firstName===''|| lastName===''){
            M.toast({html:'Plese add FirstName and LastName'})
        }else{
           addUsers({
               firstName,
               lastName
           })
           M.toast({html:`${firstName} ${lastName} is added`})
            setFirstName('');
            setLastName('');
        }
    }
    return(
        <div id='add-tech-modal' className="modal" >
            <div className="modal-content">
                <h4>New Users</h4>
                <div className="row">
                <div className="input-field">
                    <input type='text' name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
                    <label htmlFor="firstName" className="active">FirstName</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <input type='text' name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)}></input>
                    <label htmlFor="lastName" className="active">lastName</label>
                </div>
            </div>
        </div> 

          

          
        <div className="modal-footer">
            <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
        </div>
        </div>
    
    )
}
AddUserModal.propTypes={
    addUser:PropTypes.func.isRequired,
}

export default connect(null,{addUsers})(AddUserModal);