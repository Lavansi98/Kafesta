import React from "react";

function Gallery() {
  return (
    <>
      <section className="gallery" id="gallery">
        <h2 className="section_title">Gallery</h2>
        <div className="section_container">
          <div className="gallery_container">
            <div className="gallery_items">
              <img src="/src/assets/image1.jpg" alt="Gallery Image" />
            </div>
            <div className="gallery_items">
              <img src="/src/assets/image2.jpg" alt="Gallery Image" />
            </div>
            <div className="gallery_items">
              <img src="/src/assets/image3.jpg" alt="Gallery Image" />
            </div>
            <div className="gallery_items">
              <img src="/src/assets/image4.jpg" alt="Gallery Image" />
            </div>
            <div className="gallery_items">
              <img src="/src/assets/image5.jpg" alt="Gallery Image" />
            </div>
            <div className="gallery_items">
              <img src="/src/assets/image6.jpg" alt="Gallery Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
