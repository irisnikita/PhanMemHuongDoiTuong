import React, { Component } from 'react';
import axios from 'axios';

//Components
import Staff from '../../commponents/staff';

import './../staffmanager/style.css';

class StaffManagerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liststaff: [
      ]
    };
  }

  componentDidMount(){
      axios
      .get('http://localhost:5000/')
      .then(res=>{
          this.setState({
              liststaff: res.data.nhanvien
          })
      })
      .catch(err=>{
          console.log(err);
      })
  }

  onEdit=(index)=>{
    console.log(index);
  }

  showRowStaff = () => {
    let { liststaff = {} } = this.state;
    let result = null;

    result = liststaff.map((staff, index) => {
      return (
          <Staff key={index} staff={staff} index={index}/>
        );
    });

    return result;
  };

  render() {
    return (
      <div className='container-fluid'>
        <h2>Quản lý nhân viên</h2>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <form>
              <div className='form-row'>
                <div className='form-group col-6 pl-0'>
                  <label htmlFor='msnv'>Mã số nhân viên</label>
                  <input
                    id='msnv'
                    className='form-control'
                    type='number'
                    name=''
                  />
                </div>
                <div className='form-group col-6 pl-0'>
                  <label htmlFor='phone'>Số điện thoại</label>
                  <input
                    id='phone'
                    className='form-control'
                    type='number'
                    name=''
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-6 pl-0'>
                  <label htmlFor='name'>Họ tên</label>
                  <input
                    id='name'
                    className='form-control'
                    type='text'
                    name=''
                  />
                </div>
                <div className='form-group col-6 pl-0'>
                  <label htmlFor='address'>Địa chỉ</label>
                  <input
                    id='address'
                    className='form-control'
                    type='text'
                    name=''
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-6 pl-0'>
                  <label htmlFor='my-input'>Text</label>
                  <input
                    id='my-input'
                    className='form-control'
                    type='text'
                    name=''
                  />
                </div>
                <div className='form-group col-6 pl-0'>
                  <label htmlFor='my-input'>Text</label>
                  <input
                    id='my-input'
                    className='form-control'
                    type='text'
                    name=''
                  />
                </div>
              </div>
            </form>
          </div>
          <div className='col-0 col-sm-6'>
            <div className='mt-20'>
              <button type='button' className='btn btn-primary size-120 mr-20'>
                <i className='fas fa-plus'></i>
                Thêm
              </button>
              <button type='button' className='btn btn-info size-120  mr-20'>
                <i className='fas fa-search'></i>
                Tìm
              </button>
            </div>
          </div>
        </div>
        <table className='table'>
          <thead>
            <tr className='table-danger'>
              <th>STT</th>
              <th>Mã số nhân viên</th>
              <th>Họ tên</th>
              <th>Năm sinh</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ</th>
              <th>Mã chức vụ</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.showRowStaff()}
           </tbody>
        </table>
      </div>
    );
  }
}

export default StaffManagerPage;
