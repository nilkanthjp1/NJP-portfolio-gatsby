import React from "react";
import Link from "gatsby-link";

import Constants from "../stores/Constants";
import PhaseIcon from "../components/PhaseIcon";

import "./index.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: 0,
      carouselBlocked: false,
      carouselItemHeight: -56.5,
      width: "max"
    };
    this.carousel = {
      rand: () => {
        if (!this.state.carouselBlocked) {
          this.setState({
            carousel: Math.floor(Math.random() * Constants.interests.length) - 1
          });
        }
      },
      init: () => {
        this.setInterval(this.carousel.rand, 4000);
      }
    };
    this.resize = () => {
      for (const size in Constants.windowSizes) {
        if (window.innerWidth < parseInt(size)) {
          this.setState({ width: Constants.windowSizes[size] });
          break;
        }
      }
    };
  }

  componentWillMount() {
    this.intervals = [];
  }

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  componentDidMount() {
    this.carousel.init();
    this.resize();
  }

  render() {
    const phasesHover = {
      on: phase => {
        this.setState({
          carousel: Constants.interests.indexOf(phase.interest) - 1,
          carouselBlocked: true
        });
      },
      off: () => {
        this.setState({
          carouselBlocked: false
        });
      }
    };

    const phases = Constants.phases.map((item, index) => {
      return (
        <li
          key={item.name}
          className={"phase-" + (index + 1)}
          onMouseEnter={() => phasesHover.on(item)}
          onMouseLeave={phasesHover.off}
        >
          <div className="phase-content">
            <h3>{item.name}</h3>
            <PhaseIcon
              index={index + 1}
              phase={item}
              width={Constants.iconSizes[this.state.width]}
            />
            <p className="centered">{item.desc}</p>
          </div>
        </li>
      );
    });

    const carouselStyle = {
      top: this.state.carousel * this.state.carouselItemHeight + "px"
    };

    const interests = Constants.interests.map((item, index) => {
      return (
        <li key={item} className={"interest-" + (index + 1)}>
          <h2>{item + "."}</h2>
        </li>
      );
    });

    return (
      <section className="home">
        <ul className="icons">{phases}</ul>
        <div className="welcome">
          <h1>Hi, I&#8217;m Nilkanth.</h1>
          <div className="interests">
            <h2>I like </h2>
            <div className="interests-carousel">
              <ul style={carouselStyle}>{interests}</ul>
            </div>
            <div className="interests-gradient bottom" />
            <div className="interests-gradient top" />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
