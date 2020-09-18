import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div>
  <div id="page-wrapper">
    <div className="container-fluid">
    <div className="row bg-title">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Pastor Patrick</h4>
      </div>
    </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="white-box">
            <form className="form-material form-horizontal">
              <div className="form-group ">
                <label className="col-md-12">Name
                </label>
                <div className="col-md-12">
                  <input type="text" id="example-email" name="example-email" className="form-control" placeholder="enter your name" autoComplete="off"/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="example-phone">Last Name
                </label>
                <div className="col-md-12">
                  <input type="text" id="example-phone" name="example-phone" className="form-control" placeholder="Enter your Last Name" autoComplete="off" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="pwd">Email
                </label>
                <div className="col-md-12">
                  <input type="email" id="pwd" name="pwd" className="form-control" placeholder="Enter your email" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="cpwd">Password
                </label>
                <div className="col-md-12">
                  <input type="password" id="cpwd" name="cpwd" className="form-control" placeholder="Enter your password" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="cpwd"> Confirm Password
                </label>
                <div className="col-md-12">
                  <input type="password" id="cpwd" name="cpwd" className="form-control" placeholder="Confirm your password" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12" htmlFor="cpwd"> Upload your Profil
                </label>
                <div className="col-md-12">
                  <input type="file" id="cpwd" name="cpwd" className="form-control" placeholder="Confirm your password" />
                </div>
              </div>

              <button type="submit" className="btn btn-info waves-effect waves-light m-r-10">Submit</button>
              <button type="submit" className="btn btn-inverse waves-effect waves-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /.container-fluid */}
  </div>
</div>

        )
    }
}
