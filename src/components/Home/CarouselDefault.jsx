import { Carousel } from "@material-tailwind/react";
import IMAGES from './images/index';

export function CarouselDefault() {
  return (
    <Carousel 
      className="flex items-center"
      autoplay={true}    // Enable autoplay
      interval={3000}    // Set the interval to 3000ms (3 seconds)
    >
      <img
        src={IMAGES.image1}
        alt="image 1"
        className="max-h-[700px] w-full object-cover"
      />
      <img
        src={IMAGES.image2}
        alt="image 2"
        className="max-h-[700px] w-full object-cover"
      />
      <img
        src={IMAGES.image3}
        alt="image 3"
        className="max-h-[700px] w-full object-cover"
      />
      <img
        src={IMAGES.image4}
        alt="image 4"
        className="max-h-[700px] w-full object-cover"
      />
    </Carousel>
  );
}
