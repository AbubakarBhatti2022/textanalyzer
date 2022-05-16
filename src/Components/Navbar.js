import React, {useState} from 'react';

const logo = require("../images/logo1.png");



let Time = new Date().toLocaleTimeString();


export default function Navbar(props) {

  

  const [cTime, setcTime] = useState(Time);
  const updateTime = () =>{
    Time = new Date().toLocaleDateString();
    setcTime(cTime);
  };
  setInterval(updateTime, 1000);


  return (
    <>
     {/* header code start */}
<div className="topbar">
  <div className="row">
    <div className="location-column col-lg-4 col-md-6 col-sm-12"><i className="fa fa-map-marker" aria-hidden="true"></i><span> 1234 Grey street, New Castle city, UK</span></div>
    <div className="message-column col-lg-4 col-md-6 col-sm-12"><i className="fa fa-envelope"></i><span> arc_architecture@mail.com</span></div>
    <div className="icon-column col-lg-4 col-md-12 col-sm-12"><span> <i className="fa fa-facebook-f"></i>
     <i className="fa fa-twitter"></i> 
     <i className="fa fa-google-plus"></i>
     <i className="fa fa-skype"></i>
     <i className="fa fa-instagram"></i>
     </span>
     </div>
    </div> 
</div>
<div className="row header1">
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid"> 
  <div className="col-lg-3">
    <img className='site-logo' src={logo} alt="logo" />
    </div>
    <div className="col-lg-6 ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav menu">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">News</a>
        </li>
      </ul>
    </div>
    </div>
  <div className="col-lg-3 topnav 	d-none d-sm-block">
  <div className="search-container">
    <form action="/">
      <input type="text" placeholder={cTime} name="search" />
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
  </div>
  </div>
</nav>

</div>
    
    </>
  )
}