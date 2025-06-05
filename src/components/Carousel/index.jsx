import Slider from "react-slick";
import Picture from "../Picture";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images, vertical = false }) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical,
    arrows: false,
    autoplay: false,
    centerMode: true,
    variableWidth: true,
    touchMove: false,
  };

  return (
    <Slider {...settings}>
      {images.map(({ src, width }) => (
        <Picture
          src={src}
          key={src}
          className="max-h-dvh block px-2"
          style={{ width }}
        />
      ))}
    </Slider>
  );
}
