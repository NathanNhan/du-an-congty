import React from 'react'
import logo_footer from "../asset/logo_footer.png";
import language from "../asset/language.png";

const MainLayout = ({children}) => {
  return (
    <div>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navigation">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Telehealth
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Medical Equipments Rental
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#" tabIndex={-1}>
                    Home-care Nurses
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#" tabIndex={-1}>
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <img src={language} alt="" className='image-size-language' />
                    <a
                      className="nav-link text-white dropdown-toggle"
                      href="#"
                      tabIndex={-1}
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                <h4 className=" mb-4 text-white">
                  Useful Links
                </h4>
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
                <h4 className=" mb-4 text-white">
                  Contact
                </h4>
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