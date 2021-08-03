import React from "react";
import "./Login.css";
import * as c from "../../utils/constants/constants";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {TextField,InputAdornment,IconButton} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class Login extends React.Component {
  state = {
    showPassword: false,
    userName: "",
    password: "",
    signInSuccess: ''
 
    
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleSubmit = () => {
   
    this.setState({ signInSuccess: true }, () => {
        this.handlePageChange(this.state.signInSuccess);
        });

      
  };
  handlePageChange = (msg) => {
    var _props = this.props;
    if (msg === true) {
      setTimeout(function () {
        _props.history.push(c.PAGE_URLS[c.PAGE_DASHBOARD]);
      }, 1500);
    }
  };
  findKey = (e) => {
  
      if(e.key === 'Enter'){
         this.handleSubmit();
       }else
         return;
   }
 
  render() {
  
    return (
      <>
        <div className="login-page" onKeyPress = {(e) => this.findKey(e)}>
          <div className = 'bottom-box'>
          <div className="cardStyle">
          

            <div className="user-input-username">
              <p className="text-style">Username</p>
             
          
             <TextField variant = 'outlined' 
           
             error = {this.state.signInSuccess === false && 'true'}
             margin = 'dense' 
             className = 'text-box' 
             value = {this.state.userName}
             onChange={(event) =>
              this.setState({ userName: event.target.value,signInSuccess : '' })
            }/>
            </div>
            <div className="user-input-pwd">
              <p className="text-style">Password</p>
             
              <TextField 
               error = {this.state.signInSuccess === false && 'true'}
              variant = 'outlined' 
              margin = 'dense' 
              className =  'text-box' 
              value = {this.state.password}
              onChange={(event) =>
                this.setState({ password: event.target.value,signInSuccess : '' })
              }
              type={this.state.showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }} />
            </div>
            <div className="user-input-login" style = {{marginTop : '1.5em'}}>
              <div><button className="button-style" type="submit" onClick = {this.handleSubmit}>
                 <p className="button-text">Login</p>
               
              </button></div>
              <div>
              <p className = 'forgot-pwd'></p>
              </div>
            </div>
            {this.state.signInSuccess === false ?
            <div className = 'msg-div'>
              <ErrorIcon color = 'secondary'/>
              
            <p className = 'error-msg'>Invalid Credentials. Please try again.</p>
            
            </div>
            : this.state.signInSuccess === true ?
            <div className = 'msg-div'>
             <CheckCircleIcon style = {{color : 'green'}}/>
             <p className = 'success-msg'>Login Success.</p>
             </div>
             : null
            }
         
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;