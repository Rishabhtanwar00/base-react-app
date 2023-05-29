import Carousel from "react-bootstrap/Carousel";
import "../styles.css";

function Home() {
  return (
    <div className="Container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slideImg"
            src="https://cdn.pixabay.com/photo/2014/07/21/03/53/digital-art-398342_1280.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slideImg"
            src="https://cdn.pixabay.com/photo/2014/11/16/23/39/superhero-534120_640.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slideImg"
            src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_640.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
