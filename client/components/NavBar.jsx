import React from 'react'
import {Link} from 'react-router-dom'

export default function (props) {
  return (
    <div className="container">
      <div className="sideBar">

        <Link to="/" className="home-link"><h1>Company business travel platform</h1></Link>
          <ul>
            <li><Link className="nav-button" to={props.pathHome}>home</Link></li>
            <li><Link className="nav-button" to={props.pathSubmit}> submit a new request</Link></li>
            <li><Link className="nav-button" to={props.pathAllRequests}> view all requests</Link></li>
          </ul>
      </div>

    </div>
  )
}
