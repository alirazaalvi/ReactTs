import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../controls/Button';
import { AppState, ActionTypes } from '../../store';
import { increment, decrement } from './actions';
import { Dispatch } from 'redux';

interface OwnProps {
  label: string;
}
interface ComponentProps extends OwnProps {};

const UserIncrement = (props: ComponentProps) => {
  const { label } = props;
  const count = useSelector((state: AppState)  => state.userReducer.counter.count);
  const dispatch: Dispatch<ActionTypes> = useDispatch();

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
          onClick={() => dispatch(increment(1))}
          label="Increment"
        />
      </div>
      <div className="column is-1">
        <Button className="button is-light"
          data-testid="decrement"
          onClick={() => dispatch(decrement(1))}
          label="Decrement"
        />
      </div>
    </div>
  </div>);
}

export default UserIncrement;
