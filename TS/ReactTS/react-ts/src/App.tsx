import React from 'react';
import Context from './components/Context';
import Redux from './components/Redux';



// // Define context type for counter context
// interface CounterContextType {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// }

// // Create a context for managing counter state
// const CounterContext = createContext<CounterContextType | undefined>(undefined);

// // CounterProvider component
// const CounterProvider = ({ children }: { children: ReactNode }) => {
//   const [count, setCount] = useState<number>(0);

//   const increment = () => setCount(prevCount => prevCount + 1);
//   const decrement = () => setCount(prevCount => prevCount - 1);

//   return (
//     <CounterContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// // IncrementButton component
// interface IncrementButtonProps {
//   disabled?: boolean;
//   increment:()=>void;
// }

// const IncrementButton: React.FC<IncrementButtonProps> = ({ disabled = false, increment }) => {
  

//   return (
//     <button onClick={increment} disabled={disabled}>Increment</button>
//   );
// };

// // DecrementButton component
// interface DecrementButtonProps {
//   disabled?: boolean;
//   decrement:()=>void;
// }

// const DecrementButton: React.FC<DecrementButtonProps> = ({ disabled = false, decrement }) => {


//   return (
//     <button onClick={decrement} disabled={disabled}>Decrement</button>
//   );
// };

// // Define props interface for Counter component
// interface CounterProps {
//   initialValue?: number;
// }

// // Counter component
// const Counter: React.FC<CounterProps> = () => {
//   const { count, increment, decrement } = useContext(CounterContext)!;

 
//   return (
//     <div>
//       <h2>Counter</h2>
//       <p>Count: {count}</p>
//       <IncrementButton increment={increment}/>
//       <DecrementButton disabled={count === 0} decrement={decrement} />
     
//     </div>
//   );
// };

// App component
const App: React.FC = () => {
  return (
    <div>
      {/* <h1>React with TypeScript Example</h1> */}
       {/* <Context/> */}
       <Redux/>
    </div>
  );
};

export default App;
