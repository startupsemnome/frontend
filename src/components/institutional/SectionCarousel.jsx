import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";
import Card from "./Card.jsx";
import carouselStyle from "./carouselStyle.jsx";
import image1 from "./../../assets/img/bg.jpg";
import image2 from "./../../assets/img/bg2.jpg";
import image3 from "./../../assets/img/bg3.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div>
        <div>
          <h1 className="footer-H1-Question">Quem Já esta usando a gente?</h1>
        </div>
        <div className="col-md-12">
          <Carousel {...settings}>
            <div>
              <img src={image1} alt="First slide" className="slick-image" />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div>
            </div>
            <div>
              <img src={image2} alt="Second slide" className="slick-image" />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Somewhere Beyond, United States
                </h4>
              </div>
            </div>
            <div>
              <img src={image3} alt="Third slide" className="slick-image" />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
