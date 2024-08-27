import React from "react";

function Services() {
  return (
    <>
      <section className="services" id="service">
        <h2 className="section_title">Our Services</h2>
        <div className="section_container">
          <div className="service_container">
            <div className="services_items">
              <img src="/src/assets/image7.jpg" alt="Hot Beverages" />
              <div className="services_text">
                <h3>Hot Beverages</h3>
                <p>
                  Wide range of Steaming hot coffees to make you fresh and
                  light.
                </p>
              </div>
            </div>
            <div className="services_items">
              <img src="/src/assets/image8.jpg" alt="Cold Beverages" />
              <div className="services_text">
                <h3>Cold Beverages</h3>
                <p>
                  Creamy and frothy cold coffee to make you feel cool from
                  inside.
                </p>
              </div>
            </div>
            <div className="services_items">
              <img src="/src/assets/image9.jpg" alt="Refreshment" />
              <div className="services_text">
                <h3>Refreshment</h3>
                <p>Fruit and icy refreshing drink to make you feel good.</p>
              </div>
            </div>
            <div className="services_items">
              <img src="/src/assets/image10.jpg" alt="Special Combos" />
              <div className="services_text">
                <h3>Special Combos</h3>
                <p>
                  Now it's really easy to chose your favourite eating and
                  drinking combinations.
                </p>
              </div>
            </div>
            <div className="services_items">
              <img src="/src/assets/image11.jpg" alt="Burger & French Fries" />
              <div className="services_text">
                <h3>Burger & French Fries</h3>
                <p>Yummy! Quick bites to satisfy your small size hunger.</p>
              </div>
            </div>
            <div className="services_items">
              <img src="/src/assets/image12.jpg" alt="Desserts" />
              <div className="services_text">
                <h3>Desserts</h3>
                <p>
                  This for sure would satiate your palate and take you on a
                  culinary treat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
