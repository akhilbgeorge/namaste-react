import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent didmount");
  }

  render() {
    return (
      <div>
        <h3>About Us</h3>
        <UserClass name={"Akhil(class)"} location={"Kottarakkara"} />
        <User name={"Akhil(function)"} />
      </div>
    );
  }
}

export default About;
