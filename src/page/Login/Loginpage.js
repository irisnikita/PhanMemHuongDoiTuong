import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actLoginUserRequest, actLoginUser, actLogin } from './actions/index';
import * as Config from './../../constants/config';
import axios from 'axios';

import './style.css';

var userlogin = null;
class Loginpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      nameUser: '',
      passwordUser: '',
      email: '',
      login: false
    };
  }

  componentDidUpdate(){
  }
  
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === ' checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let { id, nameUser, passwordUser, email } = this.state;
    let user = {
      id,
      nameUser,
      passwordUser,
      email
    };
    axios
      .get(`${Config.API_URL}/userlogin/${user.nameUser}`, 'GET', user)
      .then(res => {
        this.props.onLoginUser(res.data);
        if (res.data.passwordUser === this.state.passwordUser) {
          localStorage.setItem('userlogin',JSON.stringify(res.data))
          this.setState({
            login: true
          })
        } else {
          alert('Bạn đã nhập sai mật khẩu');
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className='container-fluid background'>
          <div className='row'>
            <div className='col-sm-9 col-md-7 col-lg-5 mx-auto'>
              <div className='card card-signin my-5'>
                <div className='card-body'>
                  <h5 className='card-title text-center'>Đăng nhập</h5>
                  <form className='form-signin' onSubmit={this.onSubmit}>
                    <div className='form-label-group'>
                      <input
                        type='text'
                        id='inputEmail'
                        className='form-control'
                        placeholder='Email address'
                        name='nameUser'
                        value={this.state.nameUser}
                        onChange={this.onChange}
                        required
                        autoFocus
                      />
                      <label htmlFor='inputEmail'>Tên đăng nhập</label>
                    </div>

                    <div className='form-label-group'>
                      <input
                        type='password'
                        id='inputPassword'
                        className='form-control'
                        placeholder='Password'
                        name='passwordUser'
                        value={this.state.passwordUser}
                        onChange={this.onChange}
                        required
                      />
                      <label htmlFor='inputPassword'>Mật Khẩu</label>
                    </div>

                    <div className='custom-control custom-checkbox mb-3'>
                      <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customCheck1'
                      />
                      <label
                        className='custom-control-label'
                        htmlFor='customCheck1'
                      >
                        Nhớ mật khẩu
                      </label>
                    </div>
                    <button
                      className='btn btn-lg btn-primary btn-block text-uppercase'
                      type='submit'
                    >
                      Sign in
                    </button>
                    <hr className='my-4' />
                    <button
                      className='btn btn-lg btn-google btn-block text-uppercase'
                      type='submit'
                    >
                      <i className='fab fa-google mr-2'></i> Sign in with Google
                    </button>
                    <button
                      className='btn btn-lg btn-facebook btn-block text-uppercase'
                      type='submit'
                    >
                      <i className='fab fa-facebook-f mr-2'></i> Sign in with
                      Facebook
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userlogin: state.user
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onLoginUser: user => {
      dispatch(actLoginUser(user));
    },
    onLoginSucces: () => {
      dispatch(actLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
