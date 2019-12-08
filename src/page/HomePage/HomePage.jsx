import React, { Component } from 'react';
import Loginpage from '../Login/Loginpage';
import MainPage from '../mainpage/MainPage'
import {connect} from 'react-redux'

//css
import './style.css'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin: false
        }
    }

    render() {
        let {id}=this.props.loginUser;
        console.log(this.state.isLogin)
        return (
            <React.Fragment>
                {this.props.loginUser.id!==0?<MainPage />:<Loginpage />}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state=>{
    return {
        loginUser : state.user
    }
}

export default connect(mapStateToProps,null)(HomePage);