import React from 'react';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import AuthContext from './context/auth';
import ToDo from './components/todo/todo'


class App extends React.Component {

  render() {
    return (
      <AuthContext>
        <Login />

        <Auth>
          <div>Any valid user can see this</div>
        </Auth>

        <Auth capability="create">
          <div>Users with create access can see this</div>
        </Auth>

        <Auth capability="update">
          <div>Users with update access can see this</div>
        </Auth>

        <Auth capability="delete">
          <div>Users with delete access can see this</div>
        </Auth>

        <Auth capability="read">
          <ToDo></ToDo>
        </Auth>

      </AuthContext>
    );
  }
}

export default App;
