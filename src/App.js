import React from 'react';
import StaffManagerPage from './page/staffmanager/StaffManagerPage';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">Trang chủ</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Hệ Thống</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Lập phiếu</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Phiếu mua hàng</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Thẻ Kho</a>
                  <a className="dropdown-item" href="#">Phiếu đề nghị</a>
                  <a className="dropdown-item" href="#">Phiếu xuất</a>
                  <a className="dropdown-item" href="#">Phiếu giao ca</a>
                  <a className="dropdown-item" href="#">Hóa đơn bán hàng</a>
                  <a className="dropdown-item" href="#">Đơn đặt hàng</a>
                  <a className="dropdown-item" href="#">Phiếu giao hàng</a>
                  <a className="dropdown-item" href="#">Phiếu kiểm kê</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Danh mục</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Danh mục nhân viên</a>
                  <a className="dropdown-item" href="#">Danh mục khách hàng</a>
                  <a className="dropdown-item" href="#">Danh mục nhà cung cấp</a>
                  <a className="dropdown-item" href="#">Danh mục Hàng hóa</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Báo cáo</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Tra cứu</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Danh mục</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">Action 1</a>
                  <a className="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <StaffManagerPage>

        </StaffManagerPage>
      </React.Fragment>
    );
  }

}

export default App;
