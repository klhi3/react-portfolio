import React from 'react';
import logo from '../../images/header.gif';

export default function Home() {
  return (

    <div className="container-fluid">

          <div classNameName="Container">
            <h3>Portfolio</h3>

              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}

                    
                    <div className="card-body">
                      <h5 className="card-title">ct</h5>
                      <p className="card-text">..</p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light">


                  <img src={logo} alt="logo" class="w-100" />
                  <a href="#!">
                    {/* <div className="mask" style={"background-color: rgba(251, 251, 251, 0.2)"}></div> */}
                    <div className="mask" >  </div>       
                  </a>

                    <div className="card-body">
                      <h5 className="card-title">Redux Store</h5>
                      <p className="card-text">Shopping mall website. This e-commerce platform uses Redux to manage global state instead of the Context API and this website's state management is out of the React ecosystem.

React’s Context API, Flux or MobX, e-commerce platform code, Redux Provider</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                    <div className="card-body">
                      <h5 className="card-title">ct</h5>
                      <p className="card-text">..</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                    <div className="card-body">
                      <h5 className="card-title">Ct</h5>
                      <p className="card-text">.</p>
                    </div>
                  </div>
                </div>
              </div>

           </div>
       </div>
  );
}
