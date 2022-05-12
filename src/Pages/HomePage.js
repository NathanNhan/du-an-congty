import React from "react";
import arow from "../asset/Fill.png";
import Logo from "../asset/Logo_indentity.png";
import Hero from "../asset/hero.png";
import icon from "../asset/Icon.png";
import icon_subtract from "../asset/NEW.png";
import circle_img from "../asset/Ellipse.png";

import icon_heart from "../asset/icon-heart.png";
import icon_rent from "../asset/icon_rent.png";
import icon_search from "../asset/Icon_search.png";
import icon_subtract_1 from "../asset/icon_subtract_2.png";
import message from "../asset/message.png";
import phoneCall from "../asset/phone_call.png";
import booking from "../asset/booknow.png";
import MainLayout from "../Layout/MainLayout";
const HomePage = () => {
  return (
    <MainLayout>
      <main class="body">
        <section className="bottom-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 padding-nav">
                <img src={Logo} alt="" srcset="" />
              </div>
              <div className="col-lg-6 padding-nav">
                <div className="button-contain">
                  <button className="btn-1">
                    <img src={message} />
                    Message
                  </button>
                  <button className="btn-2">
                    <img src={booking} />
                    Booking
                  </button>
                  <button className="btn-3">
                    <img src={phoneCall} />
                    Call Clinic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 flex-wrap custom-content">
                <img
                  src={circle_img}
                  alt=""
                  srcset=""
                  className="image-icon-section"
                />
                <h1 className="heavy">
                  Professional medical equipment and staff for your home
                  recovery.
                </h1>
                <p>
                  Wondering which equipment you should choose? With us you won’t
                  make a mistake.
                </p>
              </div>
              <div className="col-lg-6 custom-hero">
                <img src={Hero} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="three-card">
          <div className="container">
            <div className="row">
              <div className="contain-card">
                <div class="col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-white border-0 h-100 custom-padding">
                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div class="feature bg-gradient text-white rounded-3 mb-4 mt-4">
                        <img src={icon} alt="" className="img-icon" />
                      </div>
                      <h2 class="fs-4 fw-bold">Tele-Consultation</h2>
                      <p class="mb-4 mt-2">
                        Join a teleconsult with our medically trained staff to
                        help you pick the best equipment for you & your loved
                        ones.
                      </p>

                      <button className="button-cart m-auto text-white">
                        <img src={icon_subtract} alt="" />
                        Book an appointment
                      </button>
                    </div>
                  </div>
                </div>
                <div className="img-arrow">
                  <img src={arow} alt="" srcset="" width={20} height={40} />
                </div>
                <div class="col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-white border-0 h-100 custom-padding">
                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div class="feature bg-gradient text-white rounded-3 mb-4 mt-4">
                        <img src={icon_rent} alt="" className="img-icon" />
                      </div>
                      <h2 class="fs-4 fw-bold">Medical Equipment Rental</h2>
                      <p class="mb-4 mt-2">
                        Rich selection of medical equipment to rent.
                      </p>

                      <button className="button-cart m-auto text-white">
                        <img src={icon_search} alt="" />
                        Search Categories
                      </button>
                    </div>
                  </div>
                </div>
                <div className="img-arrow">
                  <img src={arow} alt="" srcset="" />
                </div>
                <div class="col-lg-6 col-xxl-4 mb-5">
                  <div class="card bg-white border-0 h-100 custom-padding">
                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <div class="feature bg-gradient text-white rounded-3 mb-4 mt-4">
                        <img src={icon_heart} alt="" className="img-icon" />
                      </div>
                      <h2 class="fs-4 fw-bold">Homecare Nurses</h2>
                      <p class="mb-4 mt-2">
                        If you need professional help visit our website to hire
                        well trained and caring nurses for any period of time.
                      </p>

                      <button className="button-cart m-auto text-white">
                        <img src={icon_subtract_1} alt="" />
                        Find a Nurse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default HomePage;
