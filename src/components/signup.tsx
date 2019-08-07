import React from 'react';
import Hello from './statefulHello';

const Signup: React.FC = () => {
    return(
        <div>
            <div>Sign up</div>
            <Hello name="world"/>
        </div>
    );
}

export default Signup;