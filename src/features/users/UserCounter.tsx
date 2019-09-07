//import { Button } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../../Button';
//import { Counter } from '../../types';
import { AppState } from '../../store';
import { CounterActionTypes, increment, decrement } from './actions';
import { Dispatch } from 'redux';
export interface DispatchProp {
  dispatch: Dispatch<CounterActionTypes>;
}

interface ConnectedState {
  count: number;
}

interface OwnProps {
  label: string;
}
interface ComponentProps extends ConnectedState, OwnProps, DispatchProp {};

class UserIncrement extends React.Component<ComponentProps> {
  public render(): JSX.Element {
    const { label, count } = this.props;
    return (
    <div>
      <div className="row"><label>{label}: {count}</label></div>
      <div className="row">
        <Button
          onClick={this.handleIncrement}
          label="Increment"
        />
        &nbsp;&nbsp;
        <Button
          onClick={this.handleDecrement}
          label="Decrement"
        />
      </div>
    </div>);
  }

  private readonly handleIncrement = (): void => {
    this.props.dispatch(increment(1));
  }

  private readonly handleDecrement = (): void => {
    this.props.dispatch(decrement(1));
  }

}


function mapStateToProps(state: AppState): ConnectedState  {
  return {
    count: state.userReducer.counter.count,
  };
}

export default connect(mapStateToProps)(UserIncrement) as React.ComponentClass<OwnProps>;
