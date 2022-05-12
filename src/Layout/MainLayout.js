import React from 'react'
import logo_footer from "../asset/logo_footer.png";
const MainLayout = ({children}) => {
  return (
    <div>
      <header className="mb-5">
        <nav className="container-fluid navigation fixed-top">
          <div className="navbar-contain container">
            <ul className="nav-left mt-4">
              <li className="first-active">
                <a href="#">Telehealth</a>
              </li>
              <li>
                <a href="#">Medical Equipments Rental</a>
              </li>
              <li>
                <a href="#">Home-care Nurses</a>
              </li>
            </ul>
            <ul className="nav-right mt-4">
              <li className="">
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle">
                  English
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
      {/* Footer */}
      <footer className="text-center text-lg-start text-muted pt-2 custom-footer mt-4">
        <section className="">
          <div className="container text-center text-md-start mt-5 text-white">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0 mx-auto mb-4 text-white">
                {/* Content */}
                <img src={logo_footer} alt="" className="mb-4" />
                <p className="text-white custom-width">
                  Donec ipsum, elit id sed. Elit natoque lectus odio aenean
                  egestas integer gravida sagittis hendrerit. Ut hendrerit est
                  euismod turpis euismod
                </p>
              </div>

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Useful links
                </h6>
                <p className="text-white">
                  <a href="#!" className="text-reset text-white">
                    Medical Equipment Rental
                  </a>
                </p>
                <p className="text-white">
                  <a href="#!" className="text-reset text-white">
                    Home-care Nurse
                  </a>
                </p>
                <p className="text-white">
                  <a href="#!" className="text-reset text-white">
                    Terms & Conditions
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Contact
                </h6>
                <p className="text-white">
                  <i className="fas fa-phone me-3" />
                  Phone <br /> (021) 29517888
                </p>
                <p className="text-white">
                  <i className="fas fa-envelope me-3" />
                  Email <br />
                  Johny@Semestamedika.com
                </p>
                <p className="text-white">
                  <i className="fas fa-home me-3" />
                  Address
                  <br /> JI. Kamal Raya Outer Ring Road Mutiara Taman Palem Blok
                  A2 No 28 Cengkareng – Jakarta Barat 11730
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
      </footer>
      {/* Footer */}
    </div>
  );
}

export default MainLayout