import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../src/Sidebar';

function Example() {
  return (
    <div className="App">
      <Sidebar>
        <div>hi</div>
      </Sidebar>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));
