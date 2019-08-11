import React from 'react';
import Hello from './Hello';
import { tsPropertySignature } from '@babel/types';
import EnthusiasmProps from './enthusiasmProps';

class Signup extends React.Component<EnthusiasmProps> {
    state: EnthusiasmProps;
    constructor(props: EnthusiasmProps){
        super(props);
        this.state = props;
    };
    render(){
        return(
            <div>
                <div>Sign up</div>
                <Hello name={this.state.name} enthusiasmLevel={this.state.enthusiasmLevel}/>
            </div>
        );
    }
}

export default Signup;