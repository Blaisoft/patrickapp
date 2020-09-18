import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Preloader from './Preloader'
import Content from './Content'
import UploadBook from './UploadBook'
import UploadVideo from './UploadVideo'
import User from './User'
import EndUser from './EndUser'
import AllBook from './AllBook'
import AllAudio from './AllAudio'
import AllVideo from './AllVideo'
import AllUser from './AllUser'
import Admin from './Admin'
import UploadAudio from './UploadAudio'

import profile from './profile'




import {BrowserRouter as Router, Route,Link} from "react-router-dom"
 


export default class App extends Component {
  render() {
    return (
      <div>
        <Preloader/>
        <Header/>
        <Menu/>

        <Router>
        <Route path="/" exact component={Content} />
        <Route path="/UploadBook" exact component={UploadBook} />
        <Route path="/UploadVideo" exact component={UploadVideo} />
        <Route path="/UploadAudio" exact component={UploadAudio} />

        <Route path="/User" exact component={User} />
        <Route path="/AllBook" exact component={AllBook} />
        <Route path="/AllVideo" exact component={AllVideo} />
        <Route path="/AllAudio" exact component={AllAudio} />
        <Route path="/AllUser" exact component={AllUser} />
        <Route path="/EndUser" exact component={EndUser} />
        <Route path="/Admin" exact component={Admin} />
        <Route path="/profile" exact component={profile} />



        </Router>
        <Footer/>
      </div>
    )
  }
}
