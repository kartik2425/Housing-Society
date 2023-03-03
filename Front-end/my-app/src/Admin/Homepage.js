import Carousel from 'react-bootstrap/Carousel';
import Candle from '../imgs/ap1.jpg'
import Diwali from '../imgs/ap2.jpg'
import banner1 from '../imgs/ap3.jpg'
function Homepage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img height={650}
          className="d-block w-100"
          src={banner1} data-interval="500" 
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height={650}
          className="d-block w-100"
          src={Diwali} data-interval="1000" 
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height={650}
          className="d-block w-100"
          src={Candle} data-interval="1500" 
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homepage;