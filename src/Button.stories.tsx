import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <Button
      cLabel="Hello World!"
      cClassName="button"
      onClick={action('onClick')}
    />
  )).add('with outline', () => (
    <Button
      cLabel="Hello World!"
      cClassName="button button-outline"
      onClick={action('onClick')}
    />
  )).add('clear', () => (
    <Button
      cLabel="Hello World!"
      cClassName="button button-clear"
      onClick={action('onClick')}
    />
  ));