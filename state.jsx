import React, { useState } from 'react';

function User(props) {
    const { message } = props;
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

function App() {
    const [mainMessage, setMainMessage] = useState("Hello World!")
    return (
        <>
        <button onClick ={() => setMainMessage("Hello World!")}>
            Change Message?
        </button>
        <User message={mainMessage} />
        </>
    );
}

//class 
class User extends React.component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello World!",
        };
    }
    render() {
        return (
            <>
            <h1> {this.state.message}</h1>
            </>
        )
    }
}

//useState hook to add state to User
import React from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}