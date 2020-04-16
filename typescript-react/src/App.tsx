import React from 'react';
import { TextField } from './TextFiel';
import { Counter } from './Counter';

const App: React.FC = () => {
  
  return (
    <div>
      <TextField 
      text='Hello' 
      person={{firstName: 'bob', lastName: 'vance'}}/>
      <Counter>
        {(count, setCount) => (
        <div>
          {count}
          <button onClick={() =>setCount(count + 1)}>+</button>
        </div>)}
      </Counter>
    </div>
  );
}

export default App;
