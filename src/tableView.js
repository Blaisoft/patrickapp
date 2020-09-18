import React, { Component } from 'react'

export default class tableView extends Component {
  componentDidMount(){
    const script=document.createElement('script')
    script.src='js/tableview'
    script.async=true
    document.body.appendChild(script)
  }
  render() {
    return (
     <div>
  <div id="page-wrapper">
    <div className="container-fluid">
      <div className="row bg-title">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 className="page-title">Pasteur Patrick</h4>
        </div>
   
        {/* /.col-lg-12 */}
      </div>
      {/* /row */}
      <div className="row">
        <div className="col-sm-12">
          <div className="white-box">
            <h3 className="box-title m-b-0">All Book</h3>
            <div className="table-responsive">
              <table id="myTable" className="table table-striped">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>City</th>
                    <th>Publish date</th>
                    <th>Page count</th>
                    <th>Old Price</th>
                    <th>Actual Price</th>
                    <th>Active</th>
                    <th >Dactivate</th>

                  </tr>
                </thead>
                <tbody>
                              {/* content */}
                </tbody>
              </table>
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
