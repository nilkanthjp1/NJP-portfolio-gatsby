import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const phases = this.props.phases.map(function(item, index) {
      return <li key={item.name} className={`phase-${index + 1}`} />;
    });

    return (
      <header>
        <ul>{phases}</ul>
      </header>
    );
  }
}

export default Header;
