//import { Button } from 'antd';
import * as React from 'react';
import Button from '../../Button';

interface CState {
  readonly counter: number
}

interface CProps {
  label: string;
}

export default class UserIncrement extends React.Component<CProps, CState> {
  public readonly state: CState = {
    counter: 0,
  }

  public render(): JSX.Element {
    const { counter } = this.state;
    const { label } = this.props;
    return (
    <div>
      <p><label>{label}: {counter}</label></p>
      <Button
        onClick={this.handleIncrement}
        label="Increment"
      />
    </div>);
  }

  private readonly handleIncrement = (): void => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

// import * as React from 'react';

// export interface StatefulCounterProps {
//   label: string;
// }

// interface State {
//   readonly count: number;
// }

// export class StatefulCounter extends React.Component<StatefulCounterProps, State> {
//   readonly state: State = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     const { handleIncrement } = this;
//     const { label } = this.props;
//     const { count } = this.state;

//     return (
//       <div>
//         <span>{label}: {count} </span>
//         <button type="button" onClick={handleIncrement}>
//           {`Increment`}
//         </button>
//       </div>
//     );
//   }
// }