import axios from "axios";

import React, { Component } from "react";

export default class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/subjects")
      .then(res => {
        console.log(">>>>>>>>>", res.data);
        const notes = res.data;
        this.setState({ notes });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.notes.map(note => (
            <li>{note.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
