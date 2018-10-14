import React from 'react';

import { storiesOf } from '@storybook/react';

import Sidebar from '../src/Sidebar';

storiesOf('Sidebar', module).add('basic', () => (
  <div style={{ height: '300px', width: '300px' }}>
    <Sidebar>test</Sidebar>
  </div>
));
