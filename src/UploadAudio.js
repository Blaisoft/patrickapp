import React, { Component } from 'react'

export default class UploadVideo extends Component {
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
                <label className="col-md-12">Title
                </label>
                <div className="col-md-12">
                  <input type="text" id="example-email" name="example-email" className="form-control" placeholder="Enter Title" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="example-phone">Author
                </label>
                <div className="col-md-12">
                  <input type="text" id="example-phone" name="example-phone" className="form-control" placeholder="Enter the name of author" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="pwd">Publish date
                </label>
                <div className="col-md-12">
                  <input type="date" id="pwd" name="pwd" className="form-control" placeholder="Enter Date" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12" htmlFor="furl">Address
                </label>
                <div className="col-md-12">
                  <input type="text" id="furl" name="furl" className="form-control" />
                </div>
              </div>

              <div class="form-group">
                 <label class="col-md-12">Description</label>
                 <div class="col-md-12">
                   <textarea class="form-control" rows="3"></textarea>
                </div>
             </div>
            </form>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="white-box">
            <form className="form-material form-horizontal">
              
              <div className="form-group">
                <label className="col-md-12" htmlFor="turl">Old Price Streaming
                </label>
                <div className="col-md-12">
                  <input type="Number" id="turl" name="turl" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="gurl">Actual Price Streaming
                </label>
                <div className="col-md-12">
                  <input type="number" id="gurl" name="gurl" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12" htmlFor="turl">Old Price Downloading
                </label>
                <div className="col-md-12">
                  <input type="Number" id="turl" name="turl" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12" htmlFor="gurl">Actual Price Streaming
                </label>
                <div className="col-md-12">
                  <input type="number" id="gurl" name="gurl" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12" htmlFor="inurl">Cover of the Audio
                </label>
                <div className="col-md-12">
                  <input type="file" id="inurl" name="inurl" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-12" htmlFor="inurl"> Upload Audio
                </label>
                <div className="col-md-12">
                  <input type="file" id="inurl" name="inurl" className="form-control" />
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
