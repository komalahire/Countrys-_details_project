import React from "react";
import axios from "axios";
import Detaile from "./detaile";

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      Text: "",
      data: [],
    };
  }
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + this.state.Text)
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.data);
    return (
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-12 col-md-6 col-lg-6 ">
        <div className="d-flex justify-content-center">
          <input 
            type="text"
            className="form-control"
            id="Text"
            placeholder="Search..."
            value={this.state.Text}
            name="Text"
            onChange={this.handleInputChange}
          />
        </div>
        </div>
        <button className="btn btn-primary ml-2" onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.data !== "" && <Detaile {...this.state} />}
        </div>
     
    );
  }
}

export default Countries;
