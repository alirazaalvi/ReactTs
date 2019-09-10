//import { Button } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../../controls/Button';
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
      <div className="columns">
        <div className="column">
          <label>{label}</label>: <span data-testid="count">{count}</span>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1">
          <Button className="button is-primary"
            data-testid="increment"
            onClick={this.handleIncrement}
            label="Increment"
          />
        </div>
        <div className="column is-1">
          <Button className="button is-light"
            data-testid="decrement"
            onClick={this.handleDecrement}
            label="Decrement"
          />
        </div>
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
