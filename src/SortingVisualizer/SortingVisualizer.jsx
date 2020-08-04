import React from 'react';
import './SortingVisualizer.css'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          array: [],
        };
    }
    
    componentDidMount() {
        this.resetArray();
    }
    
    resetArray() {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {}

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

  
    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => {
                    return (
                        <div 
                        className="array-bar" 
                        key={idx}
                        style={{height:`${value}px`}}>
                        </div>
                    )
                })}
                <button onClick={() => this.resetArray()}>Genereate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }

}
// Random function, gives a rand in range with floor
function randomIntFromInterval(min,max) {
    // calc and return the floor of rands
    return Math.floor(Math.random() * (max - min + 1) + min)
}