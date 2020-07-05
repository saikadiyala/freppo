import React from 'react';
function Nav(){
    return (
        <div className="pt-0 border-bottom">
    <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="/">Books</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-0">
      <li className="nav-item">
        <a className="nav-link " href="/">Docs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">GitHub</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}


export default Nav;