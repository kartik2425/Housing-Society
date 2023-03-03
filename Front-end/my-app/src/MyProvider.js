import axios from "axios";
import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    user: null,
    _id: null,

  };
  updateUserFromId = () => {
    //Constructor
    //Axios
    const id = localStorage.getItem("_id");
    /*
    id pass -> resdata
    */
  };
  // updateUserFromId();

  updateUser = (data) => {
    this.setState({ user: data });
    console.log(this.state.user);
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateUserFromId: () => {
            this.updateUserFromId();
          },
          updateUser: (data) => {
            this.updateUser(data);
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
