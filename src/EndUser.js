import React, { Component } from 'react'

export default class EndUser extends Component {
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
        <div className="col-sm-6">
          <div className="white-box">
            <form className="form-material form-horizontal">
              <div className="form-group">
                <label className="col-md-12">Name
                </label>
                <div className="col-md-12">
                  <input type="text" id="example-email" name="example-email" className="form-control" placeholder="enter Name" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="example-phone">Last Name
                </label>
                <div className="col-md-12">
                  <input type="text" id="example-phone" name="example-phone" className="form-control" placeholder="enter the LastName" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="pwd">date of inscription
                </label>
                <div className="col-md-12">
                  <input type="date" id="pwd" name="pwd" className="form-control" placeholder="enter Date" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="cpwd">Telephone
                </label>
                <div className="col-md-12">
                  <input type="number" id="cpwd" name="cpwd" className="form-control" placeholder="+257 999999" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="cpwd">Email
                </label>
                <div className="col-md-12">
                  <input type="email" id="cpwd" name="cpwd" className="form-control" placeholder="Enter Your Email " />
                </div>
              </div>

            </form>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="white-box">
            <form className="form-material form-horizontal">
            <div className="form-group">
                <label className="col-md-12" htmlFor="cpwd">Address
                </label>
                <div className="col-md-12">
                  <input type="text" id="cpwd" name="cpwd" className="form-control" placeholder="Enter Your Address " />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="turl">Password
                </label>
                <div className="col-md-12">
                  <input type="password" id="turl" name="turl" className="form-control" />
                </div>
              </div>
              <div class="form-group">
                 <label class="col-sm-12"aria-selected desable >Gender</label>
                    <div class="col-sm-12">
                       <select class="form-control">
                          <option>Select Gender</option>
                           <option>Male</option>
                            <option>Female</option>
                             </select>
                     </div>
                </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="gurl"> Country
                </label>
                <div className="col-md-12">
                  <input type="text" id="gurl" name="gurl" className="form-control" />
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
