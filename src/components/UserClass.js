import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log("didmount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h4>Count: {count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Counter
        </button>
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: +919567024555</h4>
        <UserContext.Consumer>
          {({ userName }) => <h4 className="font-bold">{userName}</h4>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
