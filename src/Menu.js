import React, { Component } from 'react'
import UploadBook from './UploadBook'

export default class Menu extends Component {
    render() {
        return (
            <div>
          <div className="navbar-green-dark sidebar" role="navigation">
    <div className="sidebar-nav navbar-collapse slimscrollsidebar">
    <ul className="nav" id="side-menu">
      <li className="sidebar-search hidden-sm hidden-md hidden-lg">
        <div className="input-group custom-search-form">
          <input type="text" className="form-control" placeholder="Search..." /> <span className="input-group-btn">
            <button className="btn btn-default" type="button"> <i className="fa fa-search" /> </button>
          </span> </div>
      </li>
      <li className="user-pro">
        <a href="/" className="waves-effect active"><img src="../plugins/images/users/1.jpg" alt="user-img" className="img-circle" /> <span className="hide-menu">Pastor Patrick
            <span className="fa arrow" /></span>
        </a>
        <ul className="nav nav-second-level">
          <li><a href="/profile"><i className="ti-user" /> My Profile</a></li>
          <li><a href="/Admin"><i className="ti-settings" /> Account Setting</a></li>
        </ul>
      </li>
      <li> <a href="javascript:void(0);" className="waves-effect active"><i className="linea-icon linea-basic fa-fw text-danger" data-icon={7} /> <span className="hide-menu text-danger"> Administrator <span className="fa arrow" /></span></a>
            <ul className="nav nav-second-level">
            <li> <a href="/">Home</a> </li>
            
            </ul>
      </li>

      <li> <a href="javascript:void(0);" className="waves-effect active"><i className="fa fa-book p-r-10" /> <span className="hide-menu"> BOOK <span className="fa arrow" /></span></a>
        <ul className="nav nav-second-level">
          <li> <a href="/UploadBook">Upload Book</a> </li>
          <li> <a href="/AllBook">View All Book</a> </li>
          
        </ul>
      </li>
      <li> <a href="javascript:void(0);" className="waves-effect active"><i className="fa fa-graduation-cap p-r-10" /> <span className="hide-menu"> VIDEO <span className="fa arrow" /></span></a>
        <ul className="nav nav-second-level">
          <li> <a href="/UploadVideo">Upload Video</a> </li>
          <li> <a href="/AllVideo">View all Video</a> </li>
         
        </ul>
      </li>
      <li> <a href="javascript:void(0);" className="waves-effect active"><i className="fa fa-bars p-r-10" /> <span className="hide-menu"> AUDIO <span className="fa arrow" /></span></a>
        <ul className="nav nav-second-level">
          <li> <a href="/UploadAudio">Upload Audio</a> </li>
          <li> <a href="/AllAudio">View All Audio</a> </li>
          
        </ul>
      </li>
    
      <li> <a href="javascript:void(0);" className="waves-effect active"><i className="icon-people p-r-10" /> <span className="hide-menu"> ADD USER <span className="fa arrow" /></span></a>
        <ul className="nav nav-second-level">
          <li> <a href="/EndUser"> Add User</a></li>
          <li> <a href="/AllUser"> All User</a></li>
        </ul>
      </li>
      <li> <a href="javascript:void(0);" className="waves-effect active"><i className="icon-historique p-r-10" /> <span className="hide-menu"> HISTORIQUE <span className="fa arrow" /></span></a>
        <ul className="nav nav-second-level">
          <li> <a href="general-report.html">Historique</a></li>
          
        </ul>
      </li>
     
  
      <li><a href="/" className="waves-effect active"><i className="icon-logout fa-fw" /> <span className="hide-menu">Log out</span></a></li>
   
    </ul>
  </div>
</div>

            </div>
        )
    }
}
