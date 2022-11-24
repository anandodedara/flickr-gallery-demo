import React from "react";


function Image({ onImageClick, images }) {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-sm-6 col-md-4 col-lg-3 item" key={index} onClick={() => onImageClick(index)}>
          <img className="img-fluid" src={image} />
        </div>
      ))}
    </div>

  );
}
export default Image;
