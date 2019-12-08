import React, { Component,Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//component
import StaffManagerPage from './../staffmanager/StaffManagerPage';
import HomePage from '../HomePage/HomePage'

import { connect } from 'react-redux';
import * as config from './../../constants/config';
import { Link, Redirect, BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import axios from 'axios';
import { json } from 'graphlib';
import routes from '../../routes'

import {actLogoutOut} from '../../page/Login/actions/index'

const MAIN_PAGE='/mainpage';

class MainPage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    
    this.state = {
      UserLogin: {
        id: 0,
        nameUser: '',
        passwordUser: '',
        email: '',
        isLogin: 0
      },
      islogin: true

    };
  }
  
  componentDidUpdate(){

  }
  onLogOut=()=>{
    this.setState({
      islogin:false
    })
    localStorage.clear()
    this.props.onLogOut();
  }
  render() {
    return (
      <React.Fragment>
       <Router>
        <nav className='navbar navbar-expand-sm navbar-light bg-light fixed'>
          <Link className='navbar-brand' to={`/`}>
            Trang chủ
          </Link>
          <button
            className='navbar-toggler d-lg-none'
            type='button'
            data-toggle='collapse'
            data-target='#collapsibleNavId'
            aria-controls='collapsibleNavId'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='collapsibleNavId'>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdownId'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Hệ Thống
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <a className='dropdown-item' href='#'>
                    Action 1
                  </a>
                  <a className='dropdown-item' href='#'>
                    Action 2
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdownId'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Lập phiếu
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <a className='dropdown-item' href='#'>
                    Phiếu mua hàng
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='#'>
                    Thẻ Kho
                  </a>
                  <a className='dropdown-item' href='#'>
                    Phiếu đề nghị
                  </a>
                  <a className='dropdown-item' href='#'>
                    Phiếu xuất
                  </a>
                  <a className='dropdown-item' href='#'>
                    Phiếu giao ca
                  </a>
                  <a className='dropdown-item' href='#'>
                    Hóa đơn bán hàng
                  </a>
                  <a className='dropdown-item' href='#'>
                    Đơn đặt hàng
                  </a>
                  <a className='dropdown-item' href='#'>
                    Phiếu giao hàng
                  </a>
                  <a className='dropdown-item' href='#'>
                    Phiếu kiểm kê
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdownId'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Danh mục
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <Link className='dropdown-item' to={`/staffs`}>
                    Danh mục nhân viên
                  </Link>
                  <a className='dropdown-item' href='#'>
                    Danh mục khách hàng
                  </a>
                  <a className='dropdown-item' href='#'>
                    Danh mục nhà cung cấp
                  </a>
                  <a className='dropdown-item' href='#'>
                    Danh mục Hàng hóa
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdownId'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Báo cáo
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <a className='dropdown-item' href='#'>
                    Action 1
                  </a>
                  <a className='dropdown-item' href='#'>
                    Action 2
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdownId'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Tra cứu
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <a className='dropdown-item' href='#'>
                    Action 1
                  </a>
                  <a className='dropdown-item' href='#'>
                    Action 2
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='dropdownId'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Danh mục
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownId'>
                  <a className='dropdown-item' href='#'>
                    Action 1
                  </a>
                  <a className='dropdown-item' href='#'>
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-sm-2'
                type='text'
                placeholder='Search'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='button'
                onClick={this.onLogOut}
              >
                SignOut
              </button>
            </form>
          </div>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {
            routes.map((route,idx)=>{
              return route.component ? (
                <Route key={idx} path={route.path} exact={route.exact} name={route.name} 
                render={props=>(<route.component {...props} />)}/>
              ):(null)
            })
          }
          <Redirect to={'/staffs'}/>
        </Switch>
        </Suspense>
       </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userIsLogin: state.user
  };
};
const mapDispatchToProps = (dispatch,props)=>{
  return {
     onLogOut : ()=>{
       dispatch(actLogoutOut());
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
