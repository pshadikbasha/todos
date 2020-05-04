import React,{useEffect} from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUsers} from '../../redux/actions/userAction';
const UserListModal=({getUsers,user:{users,loading}})=>{

    // const [users,setUsers]=useState([]);
    // const[loading,setLoading]=useState(false);
    useEffect(()=>{
        getUsers();
        //eslint-disable-next-line
    },[])
    // const getUsers=async ()=>{
    //     setLoading(true);
    //     const res=await fetch('/users')
    //     const data=await res.json();
    //     setUsers(data);
    //     setLoading(false)
    // }
    return(
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'> 
                <h4>User List</h4>
                <ul className='collection'>
                    {!loading&&users!==null&&users.map(user=><UserItem key={user.id} user={user}></UserItem>)}
                </ul>
            </div>

        </div>
       
    )
    }
    UserListModal.propTypes={
        user:PropTypes.object.isRequired,
        getUsers:PropTypes.func.isRequired
    }
    const mapStateToProps=state=>({
        user:state.user,

    })
    export default connect(mapStateToProps,{getUsers})(UserListModal);