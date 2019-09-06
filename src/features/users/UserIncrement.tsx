//import { Button } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../../Button';
//import { Counter } from '../../types';
import { AppState } from '../../reducers/index';
import { CounterActionTypes, increment } from '../../actions/counter';
import { Dispatch } from 'redux';
export interface DispatchProp {
  dispatch: Dispatch<CounterActionTypes>;
}

interface CState {
  label: string;
  count: number;
}
// interface OwnProps {
//   label: string;
// }

// interface CProps {
//   //label: string;
// }

// interface AppProps {
//   counter: Counter;
// }

// interface OwnProps {
//   label: string;
//   count: number;
// }

interface ComponentProps extends CState, DispatchProp {};

class UserIncrement extends React.Component<ComponentProps> {
  // public readonly state: CState = {
  //   counter: 0,
  // }

  public render(): JSX.Element {
    //const { counter } = this.state;
    const { label, count } = this.props;
    return (
    <div>
      <p><label>{label}: {count}</label></p>
      <Button
        onClick={this.handleIncrement}
        label="Increment"
      />
    </div>);
  }

  private readonly handleIncrement = (): void => {
    this.props.dispatch(increment());
    // this.setState({
    //   counter: this.s + 1,
    // })
  }
}


function mapStateToProps(state: AppState): CState  {
  return {
    count: state.counterReducer.counter.count,
    label: 'Counter',
  };
}

export default connect(mapStateToProps)(UserIncrement) as React.ComponentClass;


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