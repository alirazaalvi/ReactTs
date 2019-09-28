//import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Input from './Input';

const handleChange = () => {}
const handleBlur = () => {}

storiesOf('Input', module)
  .add('default', () => (
    <div className="columns">
      <div className="column is-4">
        <Input
          name="Hello"
          placeholder="Text goes here"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )).add('with label', () => (
    <div className="columns">
      <div className="column is-4">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <Input
            name="Hello"
            placeholder="Text goes here"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
      </div>
    </div>
  )).add('with success message', () => (
    <div className="columns">
      <div className="column is-4">
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <Input
            name="Hello"
            value="user@user.com"
            className="input is-success"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p className="help is-success">This username is available</p>
      </div>
      </div>
    </div>
  )).add('with error message', () => (
    <div className="columns">
      <div className="column is-4">
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <Input
            name="user"
            value="user@user.com"
            className="input is-danger"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p className="help is-danger">This username is not available</p>
      </div>
      </div>
    </div>
  ));