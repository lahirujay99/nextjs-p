"use client";

import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </div>
  );
}
