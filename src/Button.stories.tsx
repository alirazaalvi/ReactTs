import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <Button
      label="Hello World!"
      className="button is-info"
      onClick={action('clicked')}
    />
  )).add('info', () => (
    <Button
      label="Hello World!"
      className="button is-success"
      onClick={action('clicked')}
    />
  )).add('plain', () => (
    <Button
      label="Hello World!"
      className="button"
      onClick={action('clicked')}
    />
  )).add('danger', () => (
    <Button
      label="Hello World!"
      className="button is-danger"
      onClick={action('clicked')}
    />
  ));