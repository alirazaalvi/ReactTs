import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <Button
      label="Hello World!"
      className="button"
      onClick={action('onClick')}
    />
  )).add('with outline', () => (
    <Button
      label="Hello World!"
      className="button button-outline"
      onClick={action('onClick')}
    />
  )).add('clear', () => (
    <Button
      label="Hello World!"
      className="button button-clear"
      onClick={action('onClick')}
    />
  ));