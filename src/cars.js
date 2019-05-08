import React, { Component } from "react";
import "./App.css";

class cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("https://jamalaa.cc/jwtbackend/api/cars")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  changePrice = (amount, val) => {
    return val + amount;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      let carmodels = this.state.dataSource.map((val, key) => {
        return (
          <react component>
            let {val.price} = amount
            <form onSubmit={this.changePrice(amount, "a")}>
              <li key={key}>
                {val.nummerplate} <br />
                {val.brand} <br />
                <form />
                let {val.price} = amount <input placeholder="Amount" id="a" />{" "}
                <button>udate price</button>
              </li>
            </form>
          </react>
        );
      });

      return <ul>{carmodels}</ul>;
    }
  }
}

export default cars;
