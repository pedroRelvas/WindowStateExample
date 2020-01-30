import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

//Example "inspired" on the following answer: https://stackoverflow.com/questions/52037958/change-value-in-react-js-on-window-resize

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: "",
      thumbWidth: 75
    };
  }

  handleResize = e => {
    const windowSize = window.innerWidth;
    const thumbWidth = (windowSize >= 480 && 100) || 75;
    this.setState(prevState => {
      return {
        windowSize,
        thumbWidth
      };
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div>
        <h2>window size: {this.state.windowSize}</h2>
        <h3>thumbnail width: {this.state.thumbWidth}</h3>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
          visibleSlides={this.state.windowSize >= 900 ? 6 : 2}
        >
          <Slider>
            <Slide index={0} style={{ backgroundColor: "#888" }}>
              I am the first Slide.
            </Slide>
            <Slide index={1} style={{ backgroundColor: "#777" }}>
              I am the second Slide.
            </Slide>
            <Slide index={2} style={{ backgroundColor: "#F5F5F5" }}>
              I am the third Slide.
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
