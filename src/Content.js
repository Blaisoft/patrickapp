import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div>
                <div id="page-wrapper">
  <div className="container-fluid">
    <div className="row bg-title">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Pastor Patrick</h4> </div>
    
      {/* /.col-lg-12 */}
    </div>
    {/* .row */}
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">All End User</h3>
          <div className="text-right"> 
            <h1><sup><i className="ti-user" /></sup> 1200</h1>
          </div>
          <span className="text-success">20%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}> <span className="sr-only">20% Complete</span> </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">All Video</h3>
          <div className="text-right">
            <h1><sup><i className="ti-music" /></sup> 5000</h1>
          </div>
          <span className="text-danger">30%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}> <span className="sr-only">230% Complete</span> </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">All Book</h3>
          <div className="text-right"> 
            <h1><sup><i className="fa fa-book p-r-10" /></sup> 8000</h1>
          </div>
          <span className="text-info">60%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}> <span className="sr-only">20% Complete</span> </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="white-box">
          <h3 className="box-title">All Audio</h3>
          <div className="text-right"> 
            <h1><sup><i class="ti-music"></i></sup> 12000</h1>
          </div>
          <span className="text-inverse">80%</span>
          <div className="progress m-b-0">
            <div className="progress-bar progress-bar-inverse" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> <span className="sr-only">230% Complete</span> </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

            </div>
        )
    }
}
