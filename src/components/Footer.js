import React from "react";
import Link from "gatsby-link";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const interact = s => {
      this.setState({ open: s });
    };

    return (
      <footer className={this.props.home ? "home" : ""}>
        <div
          className="footer-button"
          onMouseEnter={() => interact(true)}
          onMouseLeave={() => interact(false)}
        />
        <div
          className={
            "footer-content " +
            (this.state.open || this.props.home ? "open" : "")
          }
        >
          <div className="footer-gradient" />
          <ul className="sections">
            <li>
              <h3>
                <Link to="/projects/">Projects</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="/process/">Process</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="/about/">About</Link>
              </h3>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
