import React, { Component } from "react";
import MYitineraryLogo from "../MYtineraryLogo.png";
import Rome from "../Rome.jpg";
import axios from "axios";

class Landing extends Component {
  state = {
    cities: []
  };
  componentDidMount() {
    axios.get("https://mern-ubiqum-v2.herokuapp.com/cities/all").then(res => {
      console.log(res);
      this.setState({
        cities: res.data.splice(0, 5)
      });
    });
  }

  render() {
    const { cities } = this.state;
    const citiesList = cities.length ? (
      cities.map(cities => {
        return (
          <div className="card" key={cities._id}>
            <div className="content center font-weight-bold">{cities.name}</div>
            <img className="img-fluid" src={cities.img} alt={cities.name} />
          </div>
        );
      })
    ) : (
      <div className="center">No content</div>
    );

    return (
      <div className="landing container">
        <img src={MYitineraryLogo} className="logo" alt="MYitinerary logo" />
        <p className="blue-text">
          Find your perfect trip, designed by insiders who know and love their
          cities
        </p>
        <h6>Start browing</h6>
        <img src={Rome} className="rome" alt="Rome" />

        <p>Want to build your own MYitinerary?</p>

        <div className="buttons">
          <button type="button" className="btn text-white btn-info mr-5">
            <a href="/">Login</a>
          </button>

          <button type="button" className="btn btn-info ml-5">
            <a href="/">Create Account</a>
          </button>

          <div>{citiesList}</div>
        </div>
      </div>
    );
  }
}
export default Landing;
