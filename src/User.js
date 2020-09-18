import React, { Component } from 'react'

export default class UploadBook extends Component {
    render() {
        return (
            <div>
           <div id="page-wrapper">
  <div className="container-fluid">
    <div className="row bg-title">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Pastor Patrick</h4>
      </div>
     
      {/* /.col-lg-12 */}
    </div>
    {/*.row*/}
    <div className="row">
      <div className="col-md-6">
        <div className="white-box">
          <h3 className="box-title m-b-0">Save a user</h3>
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputuname">Name  </label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="ti-user" /></div>
                    <input type="text" className="form-control" id="exampleInputuname" placeholder="enter the name " />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Last Name</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="ti-user" /></div>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter the last name" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="ti-user" /></div>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Address</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="ti-home" /></div>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter address" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="ti-lock" /></div>
                    <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Enter address" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">confirm password</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i className="ti-lock" /></div>
                    <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Enter address" />
                  </div>
                </div>
           
                <div className="form-group">
                  <label htmlFor="exampleInputpwd2">Phone</label>
                  <div className="input-group">
                    <div className="input-group-addon"><i class="fas fa-mobile-alt"></i></div>
                    <input type="number" className="form-control" id="exampleInputpwd2" placeholder="+257" />
                  </div>
                </div>
              
                <div class="form-group">
                    <label class="col-sm-12">Gender</label>
                        <div class="col-sm-12">
                            <select class="form-control">
                                <option selected disabled >Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                </div>

               
                <div className="form-group">
                  <div className="checkbox checkbox-success">
                    <input id="checkbox1" type="checkbox" />
                    <label htmlFor="checkbox1"> Remember me </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                <button type="submit" className="btn btn-inverse waves-effect waves-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
   
      
   <div className="col-md-6">
   <div class="col-sm-6 ol-md-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Cover</h3>
                            <label for="input-file-now-custom-1">Picture of user</label>
                            <input type="file" id="input-file-now-custom-1" class="dropify" data-default-file="%PUBLIC_URL%/plugins/bower_components/dropify/src/images/test-image-1.jpg" />
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
