import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actInsertStaffRequest,actUpdateStaffRequest } from '../../actions/index';
import moment from 'moment'

class Editstaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      msnv: 0,
      tennv: '',
      date: '',
      phone: 0,
      address: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    let { staff } = nextProps;
    let { id } = nextProps.staff;
    var niceday = moment(staff[0].date).format("YYYY-MM-DD");
    if (id === 0) {
      alert('please reset lại Trang');
    } else {
      this.setState({
        id: staff[0].id,
        msnv: staff[0].msnv,
        tennv: staff[0].tennv,
        date: niceday,
        phone: staff[0].phone,
        address: staff[0].address
      });
    }
    
    console.log(niceday);
  }
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let { id, msnv, tennv, date, phone, address} = this.state;
    let staff = {
      id,
      msnv,
      tennv,
      date,
      phone,
      address
    };
    if (id === 0) {
      if (msnv.length === 0 || tennv.length === 0) {
        alert('Bạn cần nhập đầy đủ');
      } else {
        this.props.onAddStaff(staff);
      }
    }
    else{
      if (msnv.length === 0 || tennv.length === 0) {
        alert('Bạn cần nhập đầy đủ');
      } else {
        this.props.onUpdateStaff(staff);
      }
    }
    this.setState({
      id: 0,
      msnv: 0,
      tennv: '',
      date: '',
      phone: 0,
      address: ''
    });
  };

  render() {
    let { id, msnv, tennv, date, phone, address } = this.state;
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-12 col-sm-12'>
            <form onSubmit={this.onSubmit}>
              <div className='form-row'>
                <div className='form-group col-3 pl-0'>
                  <label htmlFor='msnv'>Mã số nhân viên</label>
                  <input
                    id='msnv'
                    className='form-control'
                    type='number'
                    name='msnv'
                    value={msnv}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group col-3 pl-0'>
                  <label htmlFor='phone'>Số điện thoại</label>
                  <input
                    id='phone'
                    className='form-control'
                    type='number'
                    name='phone'
                    value={phone}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group col-3 pl-0'>
                  <div className='mt-20'>
                    <button
                      type='submit'
                      className={`btn ${
                        id > 0 ? 'btn-danger' : 'btn-primary'
                      } size-120 mr-20`}
                    >
                      <i className={id > 0 ? 'far fa-edit' : 'fas fa-plus'}></i>
                      {id > 0 ? 'Sửa' : 'Thêm'}
                    </button>
                      <button
                        type='button'
                        className='btn btn-info size-120  mr-20'
                      >
                        <i className='fas fa-search'></i>
                        Tìm
                      </button>
                  </div>
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-3 pl-0'>
                  <label htmlFor='name'>Họ tên</label>
                  <input
                    id='name'
                    className='form-control'
                    type='text'
                    name='tennv'
                    value={tennv}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group col-3 pl-0'>
                  <label htmlFor='address'>Địa chỉ</label>
                  <input
                    id='address'
                    className='form-control'
                    type='text'
                    name='address'
                    value={address}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-3 pl-0'>
                  <label htmlFor='my-input'>Ngày sinh</label>
                  <input
                    id='my-input'
                    className='form-control'
                    type='date'
                    name='date'
                    value={date}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group col-3 pl-0'>
                  <label htmlFor='my-input'>Text</label>
                  <input id='my-input' className='form-control' type='text' />
                </div>
              </div>
            </form>
          </div>
          <div className='col-0 col-sm-6'></div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    staff: state.staff
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddStaff: staff => {
      dispatch(actInsertStaffRequest(staff));
    },
    onUpdateStaff: staff=>{
      dispatch(actUpdateStaffRequest(staff))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editstaff);
