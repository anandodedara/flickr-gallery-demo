import React, { useEffect, useState } from "react";

import Image from "./Image";
import Spinner from "./UI/Spinner";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function Gallery(props) {

  const images = props.photos.map(photo => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`)


  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(true);
  };
  const onClickHandlerClose = () => {
    setIsOpen(false);
  };

  const onClickOnMovePrevRequest = () => {
    setphotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const onClickOnMoveNextRequest = () => {
    setphotoIndex((photoIndex + 1) % images.length);
  };

  const onImageClick = (index) => {
    setIsOpen(true);
    setTimeout(() => {
      setphotoIndex(index);
    }, 1000);
  };

  return (
    <div>
      <Image onImageClick={onImageClick} images={images} />
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={onClickHandlerClose}
          onMovePrevRequest={onClickOnMovePrevRequest}
          onMoveNextRequest={onClickOnMoveNextRequest}
        />
      )}
      <Spinner />
    </div>
  );
}
