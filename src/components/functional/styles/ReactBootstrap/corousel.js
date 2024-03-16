import Carousel from 'react-bootstrap/Carousel';
import ImageComponent from '../../img/image-component';


function Corousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <ImageComponent imageurl={"https://i.pinimg.com/originals/94/81/aa/9481aa84d9446fd65a074a0341cbdbf2.jpg" } dimensions={{width: "100%", height: "500px"}}/>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    
      </Carousel.Item>
      <Carousel.Item>
        <ImageComponent imageurl={"https://wallpapers.com/images/featured/sunset-sky-background-s66lybexu36q5jc3.jpg"} dimensions={{width: "100%", height: "500px"}}/>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageComponent imageurl={"https://pikwizard.com/pw/small/6f2cd8a31ea285437f141b68770e59bf.jpg"} dimensions={{width: "100%", height: "500px"}}/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;