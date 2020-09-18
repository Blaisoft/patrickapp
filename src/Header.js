import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
   <nav className="navbar navbar-default navbar-static-top m-b-0">
    <div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i className="ti-menu" /></a>
    <div className="top-left-part"><a className="logo" href="/"><b><img src="" alt="logo" /></b><span className="hidden-xs"><strong>Pastor</strong>Patrick</span></a></div>
    <ul className="nav navbar-top-links navbar-left hidden-xs">
      <li><a href="javascript:void(0)" className="open-close hidden-xs waves-effect waves-light"><i className="icon-arrow-left-circle ti-menu" /></a></li>
      <li>
        <form role="search" className="app-search hidden-xs">
          <input type="text" placeholder="Search..." className="form-control"/> <a href=" "><i className="fa fa-search" /></a> </form>
      </li>
    </ul>
    <ul className="nav navbar-top-links navbar-right pull-right">
     
      <li className="dropdown">
        <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="/"> <img src="../plugins/images/users/1.jpg" alt="user-img" width={36} className="img-circle" /><b className="hidden-xs">Pasteur Patrick</b> </a>
        <ul className="dropdown-menu dropdown-user animated flipInY">
          <li><a href="/profile"><i className="ti-user" />  My Profile</a></li>
          <li><a href="/Admin"><i className="ti-settings" />  Account Setting</a></li>
        </ul>
      </li>
    </ul>
  </div>

</nav>

            </div>
        )
    }
}
