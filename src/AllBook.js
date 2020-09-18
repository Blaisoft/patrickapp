import React, { Component } from 'react'

export default class AllBook extends Component {
  componentDidMount(){
    const script=document.createElement('script')
    script.src='js/table'
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
            
            </div>


    <div className="row">
      <div className="col-lg-12">
        <div className="white-box">
                <h3 className="box-title">All Books</h3>
                    <table className="table table-striped table-bordered" id="editable-datatable">
                      <thead>
                        <tr>
                              <th>Cover</th>
                              <th>Title</th>
                              <th>Author</th>
                              <th>Address</th>
                              <th>Publish date</th>
                              <th>Page count</th>
                              <th>Old Price</th>
                              <th>Actual Price</th>
                              <th>Active</th>
                              <th >Dactivate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr id={1} className="gradeX">
                          <td>photo</td>
                          <td>Be careful for what you call impossible</td>
                          <td>Pasteur Patrick NGENDAKUMANA</td>
                          <td className="center">Kigobe</td>
                          <td className="center">09/11/2012</td>
                          <td>50</td>
                          <td>26$ or 12000fbu </td>
                          <td>2$ or 10000fbu</td>
                          <td className="center">On</td>
                          <td className="center">Off</td>

                        </tr>
                    
                      
                      </tbody>
                      <tfoot>
                        <tr>
                            <th>Photo</th>
                              <th>Title</th>
                              <th>Author</th>
                              <th>Address</th>
                              <th>Publish date</th>
                              <th>Page count</th>
                              <th>Old Price</th>
                              <th>Actual Price</th>
                              <th>Active</th>
                              <th >Dactivate</th>
                        </tr>
                      </tfoot>
                    </table>
        </div>
      </div>
    </div>
 
  </div>
</div>
</div>


    )
  }
}
