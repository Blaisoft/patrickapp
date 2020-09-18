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
   
        {/* /.col-lg-12 */}
      </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="white-box">
          <h3 className="box-title">All User</h3>
          <table className="table table-striped table-bordered" id="editable-datatable">
            <thead>
              <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>Date of inscription</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr id={1} className="gradeX">
                <td>Munezero</td>
                <td>Blaise </td>
                <td>blaisezechias@gmail.com</td>
                <td className="center">Ngagara</td>
                <td className="center">12123</td>
                <td>09/11/2020</td>
                <td>+257 72415986</td>
                <td>Male</td>
                <td className="center">Burundi</td>
              </tr>
           
             
            </tbody>
            <tfoot>
              <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>Date of inscription</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Country</th>
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
