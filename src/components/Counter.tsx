import React, { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <div>
      <h1>{children}</h1>
      <button onClick={() => setCount((prev: number) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev: number) => prev - 1)}>-</button>
    </div>
  );
};

export default Counter;
