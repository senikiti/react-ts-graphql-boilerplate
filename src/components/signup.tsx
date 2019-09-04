import React from 'react';
import Hello from './Hello';
import { RouteComponentProps } from 'react-router-dom';
import {Enthusiasm, EnthusiasmProps} from './enthusiasmProps';

class Signup extends React.Component<RouteComponentProps & Enthusiasm> {
    state : EnthusiasmProps;
    constructor(props : RouteComponentProps & Enthusiasm){
        super(props);
        console.log(props.enthusiasmProps.enthusiasmLevel);
        this.state = {
            name: props.enthusiasmProps.name,
            enthusiasmLevel: props.enthusiasmProps.enthusiasmLevel || 1
        };
        console.log("In Signup constructor: ", props);
    };
    render(){
        return(
            <div>
                <div>Sign up</div>
                <Hello {...this.state} />
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
    updateEnthusiasmLevel = (enthusiasmLevel: number) => {this.setState({ enthusiasmLevel: enthusiasmLevel })};
    onDecrement = () => {this.updateEnthusiasmLevel((this.state.enthusiasmLevel ? this.state.enthusiasmLevel : 1) - 1);};
    onIncrement = () => {this.updateEnthusiasmLevel((this.state.enthusiasmLevel ? this.state.enthusiasmLevel : 1) + 1);};
}

export default Signup;