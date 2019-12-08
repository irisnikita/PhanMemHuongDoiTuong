import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Staff from '../../commponents/staff';
import Editstaff from '../../commponents/editstaff';

//action
import { actFetchStaffRequest } from '../../actions/index';

import './../staffmanager/style.css';

class StaffManagerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liststaff: [],
      message: false
    };
  }

  componentDidMount() {
    this.props.fetchAllStaffs();
    console.log(this.props.history)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
  }

  onEdit = index => {
    console.log(index);
  };

  showRowStaff = staffs => {
    let result = null;

    result = staffs.map((staff, index) => {
      return <Staff key={index} staff={staff} index={index} />;
    });

    return result;
  };

  render() {
    let { staffs } = this.props;
    return (
      <div className='container-fluid relative-main'>
        <h2>Quản lý nhân viên</h2>
        <Editstaff />
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
          <tbody >{this.showRowStaff(staffs)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    staffs: state.Staffs
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllStaffs: () => {
      dispatch(actFetchStaffRequest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffManagerPage);
