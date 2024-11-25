import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: '10px 20px' }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
