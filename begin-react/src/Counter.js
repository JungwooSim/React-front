import React, {Component, useReducer, useState} from "react"; // {useState} 라는 함수 호출

class Counter extends Component {

    // 방법 - 1
    // constructor(props) {
    //     super(props);
    //
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handDecrease = this.handDecrease.bind(this);
    // }
    // handleIncrease() {
    //     console.log('increase');
    // }
    //
    // handleDecrease() {
    //     console.log('decrease');
    // }

    // 방법 - 2
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       counter : 0
    //     };
    // }

    state = {
        counter : 0,
        fixed : 1,
        updateMe : {
            toggleMe : false,
            dontChangeMe : 1
        }
    };

    handleIncrease = () => {
        this.setState({
           counter : this.state.counter + 1
        },
    () => { // 상태가 업데이트 후 추가 작업을 하고 싶다면..
                console.log(this.state.counter);
            }
        );
    };

    handleDecrease = () => {
        this.setState({
           counter : this.state.counter - 1
        });
        console.log('decrease')
    }

    handleToggle = () => {
        this.setState({
            updateMe : {
                ...this.state.updateMe,
                toggleMe : !this.state.updateMe.toggleMe
            }
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 : {this.state.fixed}</p>
            </div>
        )
    };
}

export default Counter;

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT' :
//             return state + 1;
//         case 'DECREMENT' :
//             return state - 1;
//         default :
//             return state;
//     }
// }
//
// function Counter() {
//     // const [number, setNumber] = useState(0);
//     const [number, dispatch] = useReducer(reducer, 0);
//
//     const onIncrease = () => {
//         dispatch({type : 'INCREMENT'});
//         // setNumber(prevNumber => prevNumber + 1);
//     }
//
//     const onDecrease = () => {
//         dispatch({type : 'DECREMENT'});
//         // setNumber(prevNumber => prevNumber - 1);
//     }
//
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }
//
// export default Counter;
