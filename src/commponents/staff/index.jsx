import React, { Component } from 'react';

class Staff extends Component {
  render() {
    let {index={}}=this.props;
    let {staff={}}=this.props;

    return (
      <React.Fragment>
        <tr className='table-success'>
          <td>{index}</td>
          <td>{staff.msnv}</td>
          <td>{staff.tennv}</td>
          <td>{staff.date}</td>
          <td>0979266679</td>
          <td>11/2 Lữ gia p 9 đà lạt Lâm Đồng</td>
          <td>1</td>
          <td>
            <button type='button' className='btn btn-secondary mr-20'>
              <i className='far fa-trash-alt'></i>
              Xóa
            </button>
            <button type='button' className='btn btn-success mr-20'>
              <i className='far fa-edit'></i>
              Sửa
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Staff;
