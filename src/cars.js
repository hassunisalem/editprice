import React, { Component } from "react";
import "./App.css";

class cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,

      cars: []
    };
  }

  componentDidMount() {
    return fetch("https://jamalaa.cc/jwtbackend/api/cars")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          price: 2
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  changePrice = () => {
    this.setState({ count: this.state.dataSource.price + 1 });
  };

  makeCarlist() {
    let carmodels = this.state.dataSource.map(val => {
      let car = {
        id: val.id,
        brand: val.brand,
        nummerplate: val.nummerplate,
        price: val.price
      };

      return carmodels;
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      let navn = makeCarlist();
      return <p>{navn}</p>;
    }
  }
}

export default cars;

/*
{ val.price }
<form onSubmit={() => this.changePrice(this.state.price)}>
  <li key={val.id}>
    {val.nummerplate} <br />
    {val.brand} <br />
    {val.price} <input placeholder="Amount" id="price" />{" "}
    <button>udate price</button>
  </li>
</form> */
