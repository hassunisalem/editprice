import React, { Component } from "react";

class cars extends Component {
    constructor() {
        super();
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        fetch("https://jamalaa.cc/jwtbackend/api/cars")
            .then(results => {
                return results.json();
            })
            .then(data => {
                let cars = data.results.map(car => {
                    return (
                        <li key={car.nummerplate}>
                            {car.nummerplate}
                            {car.brand}
                        </li>
                    );
                });
                this.setState({ cars: cars });
            });
    }

    render() {
        return <ul> {this.state.items}</ul>;
    }
}
export default cars;
