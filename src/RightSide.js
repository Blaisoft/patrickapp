import React, { Component } from 'react'

export default class RightSide extends Component {
    render() {
        return (
            <div>
                    <div className="right-sidebar">
                      <div className="slimscrollright">
                        <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
                        <div className="r-panel-body">
                          <ul>
                            <li><b>Layout Options</b></li>
                            <li>
                              <div className="checkbox checkbox-info">
                                <input id="checkbox1" type="checkbox" className="fxhdr" />
                                <label htmlFor="checkbox1"> Fix Header </label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox checkbox-warning">
                                <input id="checkbox2" type="checkbox" className="fxsdr" />
                                <label htmlFor="checkbox2"> Fix Sidebar </label>
                              </div>
                            </li>
                            <li>
                              <div className="checkbox checkbox-success">
                                <input id="checkbox4" type="checkbox" className="open-close" />
                                <label htmlFor="checkbox4"> Toggle Sidebar </label>
                              </div>
                            </li>
                          </ul>
                          <ul id="themecolors" className="m-t-20">
                            <li><b>With Light sidebar</b></li>
                            <li><a href="javascript:void(0)" theme="default" className="default-theme">1</a></li>
                            <li><a href="javascript:void(0)" theme="green" className="green-theme">2</a></li>
                            <li><a href="javascript:void(0)" theme="gray" className="yellow-theme">3</a></li>
                            <li><a href="javascript:void(0)" theme="blue" className="blue-theme working">4</a></li>
                            <li><a href="javascript:void(0)" theme="purple" className="purple-theme">5</a></li>
                            <li><a href="javascript:void(0)" theme="megna" className="megna-theme">6</a></li>
                            <li><b>With Dark sidebar</b></li>
                            <br />
                            <li><a href="javascript:void(0)" theme="default-dark" className="default-dark-theme">7</a></li>
                            <li><a href="javascript:void(0)" theme="green-dark" className="green-dark-theme">8</a></li>
                            <li><a href="javascript:void(0)" theme="gray-dark" className="yellow-dark-theme">9</a></li>
                            <li><a href="javascript:void(0)" theme="blue-dark" className="blue-dark-theme">10</a></li>
                            <li><a href="javascript:void(0)" theme="purple-dark" className="purple-dark-theme">11</a></li>
                            <li><a href="javascript:void(0)" theme="megna-dark" className="megna-dark-theme">12</a></li>
                          </ul>

                        </div>
                      </div>
                    </div>

            </div>
        )
    }
}
