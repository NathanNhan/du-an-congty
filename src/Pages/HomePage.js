import React from "react";
import arow from "../asset/Fill.png";
const HomePage = () => {
  return (
    <div>
      <header>
        <nav className="container-fluid navigation">
          <div className="navbar-contain">
            <ul className="nav-left">
              <li>
                <a href="#">Telehealth</a>
              </li>
              <li>
                <a href="#">sdasdasd</a>
              </li>
              <li>
                <a href="#">asdasdasd</a>
              </li>
            </ul>
            <ul className="nav-right">
              <li>
                <a href="#">sdasdasd</a>
              </li>
              <li>
                <a href="#">asdasdasd</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="bottom-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="button-contain">
                  <button></button>
                  <button></button>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>sadasdasdsad</h1>
                <p>asdasdasd</p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </section>
        <section className="three-card">
          <div className="container">
            <div className="row">
              <div className="contain-card">
                <div class="col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-light border-0 h-100">
                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i class="bi bi-collection"></i>
                      </div>
                      <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                      <p class="mb-0">
                        With Bootstrap 5, we've created a fresh new layout for
                        this template!
                      </p>
                      <button>Search</button>
                    </div>
                  </div>
                </div>
                <div className="img-arrow">
                <img src={arow} alt="" srcset=""  width={20} height={40}/>

                </div>
                <div class="col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-light border-0 h-100">
                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div class="feature  bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i class="fa fa-collection"></i>
                      </div>
                      <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                      <p class="mb-0">
                        With Bootstrap 5, we've created a fresh new layout for
                        this template!
                      </p>
                      <button>Search</button>
                    </div>
                  </div>
                </div>
                <div className="img-arrow">
                <img src={arow} alt="" srcset="" />

                </div>
                <div class="col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-light border-0 h-100">
                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div class="feature  bg-gradient text-white rounded-3 mb-4 mt-n4">
                        <i class="bi bi-collection"></i>
                      </div>
                      <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                      <p class="mb-0">
                        With Bootstrap 5, we've created a fresh new layout for
                        this template!
                      </p>
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-lg-start text-white footer-section">
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            {/*Grid row*/}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}

              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <a className="text-white">Your Account</a>
                </p>
                <p>
                  <a className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a className="text-white">Help</a>
                </p>
              </div>
              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
          <hr className="my-3" />
        </div>
        {/* Grid container */}
      </footer>
    </div>
  );
};

export default HomePage;
