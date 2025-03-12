import React, { useState } from 'react';

interface TestComponentProps {
  message: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ message }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me! Count: {count}
      </button>
    </div>
  );
};
