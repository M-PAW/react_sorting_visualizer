
import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualize extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
        };
    };

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];      
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
          <div className="array-container">
            {array.map((value, idx) => (
              <div 
              className="array-bar" 
              key={idx}
              style={{height: `${value}px`}}></div>
            ))}
          </div>
        );
    }

}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}