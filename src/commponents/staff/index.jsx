import React, { Component } from 'react';
import { connect } from 'react-redux';

//action
import {
  actGetOneStaffRequest,
  actDeleteStaffRequest
} from './../../actions/index';

class Staff extends Component {
  onEdit = id => {
    this.props.getOneStaff(id);
  };

  onDelete = id => {
    this.props.deleteOneStaff(id);
  };

  render() {
    let { index = {} } = this.props;
    let { staff = {}} = this.props;
    return (
      <React.Fragment>
        <tr className='table-success'>
          <td>{index}</td>
          <td>{staff.msnv}</td>
          <td>{staff.tennv}</td>
          <td>{staff.date}</td>
          <td>{staff.phone}</td>
          <td>{staff.address}</td>
          <td>1</td>
          <td>
            <button
              type='button'
              className='btn btn-secondary mr-20'
              onClick={() => this.onDelete(staff.id)}
            >
              <i className='far fa-trash-alt'></i>
              Xóa
            </button>
            <button
              type='button'
              className='btn btn-success mr-20'
              onClick={() => this.onEdit(staff.id)}
            >
              <i className='far fa-edit'></i>
              Sửa
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getOneStaff: id => {
      dispatch(actGetOneStaffRequest(id));
    },
    deleteOneStaff: id => {
      dispatch(actDeleteStaffRequest(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(Staff);
