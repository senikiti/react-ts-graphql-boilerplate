import * as React from 'react';
import {EnthusiasmProps} from './enthusiasmProps';

class Hello extends React.Component<EnthusiasmProps> {
    render() {
      const enthusiasmLevel = this.props.enthusiasmLevel || 1;
      console.log("In Hello render: ", this.props.enthusiasmLevel);
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {this.props.name + getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
  }
export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}