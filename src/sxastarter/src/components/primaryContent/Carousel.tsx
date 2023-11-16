import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CarouselProps = ComponentProps;

const Carousel = ({ rendering }: CarouselProps) => (
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <Placeholder name="carousel-items" rendering={rendering} />
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
export default Carousel;
