import React ,{useEffect}from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from '../src/Components/Layout/SearchBar';
import Todos from './Components/Todo/Todos';
import AddBtn from '../src/Components/Layout/AddBtn';
import AddTodoModal from '../src/Components/Todo/AddTodoModal';
import EditTodoModal from '../src/Components/Todo/EditTodoModal';
import AddUserModal from '../src/Components/Users/AddUserModal';
import UserListModal from './Components/Users/UserListModal';
import {Provider} from 'react-redux';
import store from './redux/store';
const App=()=>{
  useEffect(()=>{
    M.AutoInit();
  })
 return(
   <Provider store={store}>
     <React.Fragment>
       <SearchBar></SearchBar>
       <div className="container">
         <AddBtn></AddBtn>
         <AddTodoModal></AddTodoModal>
         <EditTodoModal></EditTodoModal>
         <AddUserModal></AddUserModal>
         <UserListModal></UserListModal>
        <Todos></Todos>

       </div>
     </React.Fragment>
     </Provider>
   )
}

export default App;

