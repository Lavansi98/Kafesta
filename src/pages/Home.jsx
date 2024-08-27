import React from "react";

function Home() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className="hero_section">
        <div className="section_container">
          <div className="hero_container">
            <div className="text_section">
              <h2>Fuel Your Passion</h2>
              <h3>Discover the Magic in Every Cup</h3>
              <p>
                Welcome to our coffee paradise, where every bean tells a story
                and every cup sparks.
              </p>

              <div className="hero_section_button">
                <button className="button">Order Online</button>
                <button className="button">Book A Table</button>
              </div>
            </div>

            <div className="image_section">
              <img src="/src/assets/heroimg.png" alt="Coffee" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Why Us Section --> */}
      <section className="why_us" id="why">
        <h2 className="section_title">Why Us?</h2>
        <div className="section_container">
          <div className="why_container">
            <div className="why_items">
              <img src="/src/assets/image11.jpg" alt="Delicious" />
              <div className="why_us_text">
                <h3>Delicious Food</h3>
                <p>
                  With a lavish spread of finger licking food, we serve to
                  satisfy your palate and take you on a culinary treat.
                </p>
              </div>
            </div>
            <div className="why_items">
              <img src="/src/assets/about.jpg" alt="Pleasant" />
              <div className="why_us_text">
                <h3>Pleasant Ambience</h3>
                <p>
                  We seek to serve all our guests with the perfect dining
                  experience. We provide perfect ambbience to cherish special
                  moments.
                </p>
              </div>
            </div>
            <div className="why_items">
              <img src="/src/assets/image10.jpg" alt="Hospitality" />
              <div className="why_us_text">
                <h3>Hospitality</h3>
                <p>
                  Our staff members are happy to help. We go the extra mile to
                  make you happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
