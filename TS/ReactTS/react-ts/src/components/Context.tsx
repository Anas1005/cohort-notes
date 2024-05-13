import React, { ReactNode, createContext, useContext, useState} from 'react';

// Define context type for counter context
interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create a context for managing counter state
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// CounterProvider component
const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// IncrementButton component
interface IncrementButtonProps {
  disabled?: boolean;
  increment?:()=>void;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ disabled = false }) => {
    const { increment } = useContext(CounterContext)!;
  

  return (
    <button onClick={increment} disabled={disabled}>Increment</button>
  );
};

// DecrementButton component
interface DecrementButtonProps {
  disabled?: boolean;
  decrement?:()=>void;
}

const DecrementButton: React.FC<DecrementButtonProps> = ({ disabled = false }) => {
    const { decrement } = useContext(CounterContext)!;


  return (
    <button onClick={decrement} disabled={disabled}>Decrement</button>
  );
};

// Define props interface for Counter component
interface CounterProps {
  initialValue?: number;
}

// Counter component
const Counter: React.FC<CounterProps> = () => {
 
  return (
    <div>
      <h2>Counter</h2>
      <Count/>
      <IncrementButton />
      <DecrementButton />
     
    </div>
  );
};


const Count: React.FC<CounterProps> = () => {
    const { count } = useContext(CounterContext)!;

    return (
        <p>Count: {count}</p>
    )
}

// App component
const Context: React.FC = () => {
  return (
    <div>
      <h1>React with TypeScript Example</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default Context;
