import { useState } from 'react';

const SharedComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>Shared component</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Shared counter button
      </button>
      <h2>{`counter: ${counter} `}</h2>
    </div>
  );
};

export default SharedComponent;
