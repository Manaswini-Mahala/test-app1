import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import About from './cmp/About';
import Protected from './cmp/Protected';
import Auth from './cmp/Auth';
import Nav from './cmp/Nav';
import Box from './cmp/Box';
import Savings from './cmp/Savings';
import Expenses from './cmp/Expenses';
import Investments from './cmp/Investments';
import Account from './cmp/Account';
import ChangeAccountDetails from './cmp/ChangeAccountDetails';
import DeactivateAccount from './cmp/DeactivateAccount';
import DeleteAccount from './cmp/DeleteAccount';
import AccountDeactivated from './cmp/AccountDeactivated';
import AccountDeleted from './cmp/AccountDeleted';
import ChangeName from './cmp/ChangeName';
import ChangePassword from './cmp/ChangePassword';
import ChangeEmail from './cmp/ChangeEmail';
import NameChanged from './cmp/NameChanged';
import PasswordChanged from './cmp/PasswordChanged';
import EmailChanged from './cmp/EmailChanged';
import Error from './Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";





function App() {
  return (
    <div className="App">

      <div className='a1'>

        <Router>

          <Nav />

          <Switch>

            <Route exact path="/" ><Auth /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about" ><About /></Route>
            {/* <Route exact path="/savings" component={<Savings />} />
            <Route exact path="/expenses" component={<Expenses />} />
            <Route exact path="/investments" component={<Investments />} />
            <Route exact path="/account" component={<Account />} />
            <Route exact path="/changeaccountdetails" component={<ChangeAccountDetails />} />
            <Route exact path="/deactivateaccount" component={<DeactivateAccount />} />
            <Route exact path="/deleteaccount" component={<DeleteAccount />} />
            <Route exact path="/accountdeactivated" component={<AccountDeactivated />} />
            <Route exact path="/accountdeleted" component={<AccountDeleted />} />
            <Route exact path="/changename" component={<ChangeName />} />
            <Route exact path="/changepassword" component={<ChangePassword />} />
            <Route exact path="/changeemail" component={<ChangeEmail />} />
            <Route exact path="/namechanged" component={<NameChanged />} />
            <Route exact path="/passwordchanged" component={<PasswordChanged />} />
            <Route exact path="/emailchanged" component={<EmailChanged />} /> */}
            
            
            
            
            <Route component={<Error />} />
            
           
          </Switch>

        </Router>

      </div>


    </div>
  );
}

export default App;
