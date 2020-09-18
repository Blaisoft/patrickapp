import React, { Component } from 'react'

export default class AllAudio extends Component {
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
          <h3 className="box-title">All Audio</h3>
          <table className="table table-striped table-bordered" id="editable-datatable">
            <thead>
              <tr>
                  
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Address</th>
                    <th>Publish date</th>
                    <th>Description</th>
                    <th>Old Price Streaming</th>
                    <th>Actual Price streaming</th>
                   < th>Old Price downloading</th>
                    <th>Actual Price downloading</th>
                    <th>Active</th>
                    <th >Dactivate</th>
              </tr>
            </thead>
                <tbody>
                <tr id={1} className="gradeX">
                
                    <td>photo</td>
                    <td>Audio Ubwiza bw'Imana </td>
                    <td>Pasteur Patrick NGENDAKUMANA</td>
                    <td className="center">Kigobe</td>
                    <td className="center">09/11/2020</td>
                    <td> haleluah </td>
                    <td>20$ or 2500fbu</td>
                    <td>15$ or 2000fbu</td>
                    <td>30$ or 3500fbu</td>
                    <td>20$ or 3000fbu</td>
                    <td>On</td>
                    <td>Off</td>

                </tr>
            
                
                </tbody>
            <tfoot>
              <tr>
                    <th>Cover</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Address</th>
                    <th>Publish date</th>
                    <th>Description</th>
                    <th>Old Price Streaming</th>
                    <th>Actual Price streaming</th>
                   < th>Old Price downloading</th>
                    <th>Actual Price downloading</th>
                    <th>Active</th>
                    <th >Dactivate</th> 
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
