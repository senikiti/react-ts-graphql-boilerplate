import * as React from 'react';
import EnthusiasmProps from './enthusiasmProps';

class Hello extends React.Component<EnthusiasmProps, object> {
    constructor(enthusiasmProps: EnthusiasmProps){
      super(enthusiasmProps);
      this.state = enthusiasmProps;
    }
    state: EnthusiasmProps;
    render() {
      const { name, enthusiasmLevel = 1 } = this.state;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
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