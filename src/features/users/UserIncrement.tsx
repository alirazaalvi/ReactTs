//import { Button } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../../Button';
//import { Counter } from '../../types';
import { AppState } from '../../store';
import { CounterActionTypes, increment } from './actions';
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
      <p><label>{label}: {count}</label></p>
      <Button
        onClick={this.handleIncrement}
        label="Increment"
      />
    </div>);
  }

  private readonly handleIncrement = (): void => {
    this.props.dispatch(increment());
  }
}


function mapStateToProps(state: AppState): ConnectedState  {
  return {
    count: state.userReducer.counter.count,
  };
}

export default connect(mapStateToProps)(UserIncrement) as React.ComponentClass<OwnProps>;
