import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {delUsers} from '../../redux/actions/userAction';
import M from 'materialize-css/dist/js/materialize.min.js';
const UserItem=({user,delUsers})=>{
    const onDelete=()=>{
        delUsers(user.id);
        M.toast({html:'user deleted'})
    }
    return(
        <li className='collection-item'>
            <div>
                {user.firstName} {user.lastName}
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}
UserItem.propTypes={
    user:PropTypes.object.isRequired,
    delUser:PropTypes.func.isRequired,
}
export default connect(null,{delUsers})(UserItem);