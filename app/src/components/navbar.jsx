import React, { Component } from "react";

// shortcut for creating stateless functional Component is "sfc"
// shortcut for creating class is "cc"
// "imrc" for importing react Component

// if state is not used in a Component then it is called as a stateless functional component
// in this case instead of using class we can use a function

// class navbar extends Component {
//   state = {};

//   render() {
//     return (
// <nav className="navbar navbar-light bg-light">
//   <span className="navbar-brand mb-0 h1">
//     Navbar{" "}
//     <span className="badge badge-secondary ml-3">
//       {this.props.counters}
//     </span>
//   </span>
// </nav>
//     );
//   }
// }

// export default navbar;

const navbar = (counters) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar{" "}
        <span className="badge badge-secondary ml-3">{counters.counters}</span>
      </span>
    </nav>
  );
};

export default navbar;
