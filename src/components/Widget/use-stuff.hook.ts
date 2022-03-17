import { useState } from 'react';

export default function useStuff() {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);
  const minus = () => count > 0 && setCount(count - 1);

  return {
    count,
    plus,
    minus,
  };
}
