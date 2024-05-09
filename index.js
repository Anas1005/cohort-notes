// ----------------------------- Global Error Handling Middleware -----------------------------
// In this example, we demonstrate how to implement global error handling middleware in Express.
// The error handling middleware catches any errors that occur during request processing and sends an appropriate error response to the client.
// This helps in centralizing error handling logic and providing consistent error responses across the application.

// Import required modules
const express = require('express');

// Create Express app
const app = express();

// Middleware to simulate an error
app.get('/simulate-error', (req, res, next) => {
    // Simulate an error by throwing an exception
    throw new Error('This is a simulated error');
});

// Error handling middleware
app.use((err, req, res, next) => {
    // Log the error to the console for debugging
    console.error(err.stack);

    // Send an error response to the client
    res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





// ----------------------------- Zod Usage -----------------------------
// This example illustrates how to use Zod, a TypeScript-first schema declaration and validation library, in an Express application.
// We define a schema for input validation using Zod and create middleware to validate user input against the schema.
// If the input data does not match the schema, a validation error response is sent to the client.
// This ensures that only valid data is processed further in the application.

const express = require('express');
const { z } = require('zod');

const app = express();

// Define a schema for input validation
const userSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().int().positive(),
});

// Middleware to validate user input
const validateUserInput = (req, res, next) => {
  try {
    // Validate the request body against the schema
    userSchema.parse(req.body);
    next(); // Move to the next middleware if validation succeeds
  } catch (error) {
    // Return validation errors to the client
    res.status(400).json({ error: error.errors });
  }
};

// Route handler for creating a new user
app.post('/users', validateUserInput, (req, res) => {
  // At this point, req.body has passed validation
  // Process the request further, e.g., save user to database
  res.status(201).json({ message: 'User created successfully' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










// ---------------Debouncing---------------------
// Debouncing is a technique used to limit the rate at which a function is executed.
// In this example, we implement debouncing in a React component for handling search input.
// The debounce function delays the execution of an API call triggered by user input, ensuring that the API call is made only after a certain delay (e.g., 300 milliseconds) since the last input change.
// This helps in reducing the number of API requests and improving performance, especially in scenarios where the user is typing quickly.

import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to debounce another function
  const debounce = (func, delay) => {
    let timeoutId;

    return function() {
      const context = this;
      const args = arguments;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  // Function to perform API call for search
  const searchApi = async (searchTerm) => {
    try {
      // Start loading
      setLoading(true);

      // Simulate API call (replace with actual API call)
      const response = await fetch(`https://api.example.com/search?q=${searchTerm}`);
      const data = await response.json();

      // Update search results
      setSearchResults(data.results);

      // Stop loading
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
      setLoading(false);
    }
  };

  // Debounced search function with a delay of 300 milliseconds
  const debouncedSearch = debounce(searchApi, 300);

  // Event handler for input change
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Call the debounced search function
    debouncedSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;













// ------------------------useMemo---------------------
// useMemo is a hook in React used to memoize the result of a function and recompute it only when its dependencies change.
// In this example, we use useMemo to optimize the calculation of an expensive operation (factorial) in a React component.
// The expensive calculation is memoized based on the count state variable, and it is recomputed only when count changes.
// This improves the performance of the component by avoiding unnecessary recalculations of the expensive operation on every render.

import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(input), [input]);

 return (
    <div>
      <div>
        <input type = input value={input} onChange = (e) => {setInput(e.target.value)} />
        <div>
        <h2>Expensive Calculation</h2>
        {calculation}
       </div>

      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={()=>{setCount((c) => c + 1)} + </button>
      
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

ReactDOM.render(<App />, document.getElementById("root"));









// -------------------------------React.memo------------------------------------
// React.memo is a higher-order component in React used to memoize functional components.
// In this example, we demonstrate how to use React.memo to memoize a Square component in a Board component.
// React.memo ensures that the Square component is re-rendered only when its props change, preventing unnecessary re-renders and optimizing performance.

iimport React, { useState } from 'react';

// Square component receiving static props ...so should not ren-render...powered by React.memo
const Square = React.memo(({ value }) => {
  console.log(`Rendering Square with value: ${value}`);
  return (
    <div style={{ width: '50px', height: '50px', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {value}
    </div>
  );
});

// Parent component
const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <Square value={"Hello"} />
      <Sibling value={count} />
    </div>
  );
};

// Sibling component
const Sibling = ({ value }) => {
  console.log(`Rendering Sibling with value: ${value}`);
  // This component also receives the dynamic prop ..
  return (
    <div style={{ width: '50px', height: '50px', backgroundColor: 'lightgreen', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {value}
    </div>
  );
};

export default Parent;









//--------------------------------useCallback-----------------------------------
// useCallback is a hook that returns a memoized version of the callback function.
// It is useful when passing callbacks to child components to prevent unnecessary re-renders of chil.
// useCallback takes two arguments: the callback function and an array of dependencies.
// It returns a memoized version of the callback that only changes if one of the dependencies has changed.

import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

// Todos component definition
const Todos = ({ todos, addTodo }) => {
  console.log("Child component rendered");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

// Memoize the Todos component using React.memo
const MemoizedTodos = React.memo(Todos);

// App component definition
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Function to increment count
  const increment = () => {
    setCount((c) => c + 1);
  };

  // Function to add todo, memoized using useCallback
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]); // Depend on todos to avoid stale closure issue

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment Count</button>
      <hr />
      {/* Render the MemoizedTodos component */}
      <MemoizedTodos todos={todos} addTodo={addTodo} />
    </div>
  );
};

// Render the App component
ReactDOM.render(<App />, document.getElementById("root"));





----------------------------------useRef----------------------------------------
// useRef is commonly used for accessing DOM elements or storing mutable values without causing re-renders.


import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Use useRef to count the number of re-renders
  const renderCount = useRef(0);

  // Use useRef to store a reference to the input element
  const inputRef = useRef(null);

  // Use state to manage a counter
  const [, forceUpdate] = useState();

  // Increment the count on each render
  useEffect(() => {
    renderCount.current++;
  });

  // Function to focus the input element
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Function to force a re-render
  const triggerRerender = () => {
    forceUpdate((prev) => !prev);
  };

  return (
    <div>
      <h2>useRef Hook Examples</h2>
      <p>Number of Re-renders: {renderCount.current}</p>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={triggerRerender}>Force Re-render</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));













{/* 
----------------------Lazy Loading----------------------

Lazy loading is a technique used to defer loading of non-critical resources until they are needed. In React, it's commonly used to split code into smaller chunks and load them on demand, improving performance. */}

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;



{/* //------------------------------------Transactions--------------------------------------------
E-commerce Orders:
Ensure atomicity when placing orders.
Deduct item quantity from inventory.
Update customer information and process payment simultaneously.

Financial Transactions:
Transfer funds between accounts securely.
Update account balances and transaction history reliably.

Content Management Systems (CMS):
Maintain consistency when editing content.
Apply changes uniformly across articles, categories, and user permissions.

Reservation Systems:
Prevent double bookings by reserving resources atomically.
Roll back transactions if a reservation fails to maintain availability.

Multi-Step Workflows:
Coordinate state transitions across different stages.
Ensure changes are approved before being applied.

Batch Processing:
Apply bulk updates consistently.
Roll back changes in case of errors or interruptions.

Data Import/Export:
Transfer data between systems or databases reliably.
Maintain data integrity during import/export operations.


Collaborative Editing:
Manage concurrent edits by multiple users.
Ensure changes are synchronized and applied consistently.


Transactions are essential for maintaining data integrity, consistency, and reliability in various applications and industries. They provide atomicity, ensuring that operations either succeed entirely or have no effect at all, even in the face of errors or concurrent access.
const mongoose = require('mongoose'); */}

async function transferMoney(fromAccountId, toAccountId, amount) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Perform operations within the transaction
        // For example, update the balances of the accounts
        // Commit the transaction if all operations succeed
        await session.commitTransaction();
        console.log('Transaction committed successfully.');
    } catch (error) {
        // If any operation fails, abort the transaction
        await session.abortTransaction();
        console.error('Transaction aborted:', error);
    } finally {
        // Regardless of success or failure, end the session
        session.endSession();
    }
}

// Usage
transferMoney('fromAccountId', 'toAccountId', 100);
