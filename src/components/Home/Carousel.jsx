import { Carousel } from "@material-tailwind/react";
 
import image1 from './images/img-1.jpeg'
import image2 from './images/img-2.jpeg'
import image3 from './images/img-3.jpeg'
import image4 from './images/img-4.jpeg'

function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src={image1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={image2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={image4}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default CarouselDefault