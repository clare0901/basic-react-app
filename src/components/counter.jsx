import React, { Component } from "react";

class Counter extends Component {
  // state is a object that includes data which the component needs

  // bind event handlers to this by defining a constructor.. call the super class

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   // console.log(this);
  // }

  // another way to bind event handlers to this... is to create a arrow function

  //   one way of using css
  //   styles = {
  //     color: "black",
  //     fontSize: 20,
  //     fontWeight: "bold",
  //   };
  //   <span style={this.styles} className="badge badge-primary m-2"></span>

  //   second way of using css
  //   <span style={{fontSize:30}} className="badge badge-primary m-2"></span>

  // in this method we can use if and else i.e conditional statements
  // renderTags() {}

  render() {
    // props are the attributes which are defined in the parent component
    // key is not a property bec it is uniquely identifying key
    // console.log(this.props);
    return (
      // react.fragment is used bec the div isn't doing anything

      <React.Fragment>
        {/* {this.props.children} */}
        <h5>Counter{this.props.counter.id}</h5>
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>

        {/* note the  onClick = this.handleIncrement  i.e no () after the function name
        here we are not calling the function .. we are just refrencing it 
        */}

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Incr
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-4"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBatchClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
