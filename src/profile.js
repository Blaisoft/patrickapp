import React, { Component } from 'react'

export default class profile extends Component {
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
   
        {/* /.col-lg-12 */}
      </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="white-box">
          <h3 className="box-title">All User</h3>
          <table className="table table-striped table-bordered" id="editable-datatable">
            <thead>
              <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    
              </tr>
            </thead>
            <tbody>
              <tr id={1} className="gradeX">
                <td>Photo</td>
                <td>Munezero</td>
                <td>Blaise </td>
                <td>blaisemunezero9@gmail.com</td>
                <td className="center">12123</td>
              </tr>
           
             
            </tbody>
            <tfoot>
              <tr>
              <th>Photo</th>
               <th>Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Password</th>
              </tr>
            </tfoot>
          </table>
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
