import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => (
  <Carousel 
    autoPlay 
    infiniteLoop 
    showThumbs={false} 
    showStatus={false} 
    interval={3000} 
    transitionTime={500}
  >
    <div>
      <img src="/images/image1.jpg" alt="Image 1" />
    </div>
    <div>
      <img src="/images/image2.jpg" alt="Image 2" />
    </div>
    <div>
      <img src="/images/image3.jpg" alt="Image 3" />
    </div>
    <div>
      <img src="/images/image4.jpg" alt="Image 4" />
    </div>

  </Carousel>
);

export default ImageCarousel;
