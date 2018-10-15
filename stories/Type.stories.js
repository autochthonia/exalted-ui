import React from 'react';

import { storiesOf } from '@storybook/react';

import Type, { exaltedFontFaces } from '../src/Type/Emotion';
import { injectGlobal } from 'emotion';

injectGlobal(exaltedFontFaces);

storiesOf('Type', module).add('demo', () => (
  <>
    {Object.keys(Type).map(key => (
      <div key={key}>
        <span className={Type[key]}>{key} - lorem ipsum</span>
      </div>
    ))}
  </>
));
