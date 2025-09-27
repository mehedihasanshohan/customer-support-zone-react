#  What is JSX, and why is it used?

##  What is JSX?
- **JSX (JavaScript XML)** is a syntax extension for JavaScript that looks similar to HTML.
- It is used in **React** to describe what the UI should look like.
- JSX allows us to write HTML-like code directly inside JavaScript, making it easier to create and manage components.

✅ Example:
```jsx
const element = <h1>Hello, React!</h1>;


# 🔄 Difference Between State and Props in React

In React, **State** and **Props** are two important concepts used for handling data in components. While they may seem similar, they serve different purposes.

---

## 📌 State
- **Definition:** An object that holds data or information about the component.
- **Managed by:** The component itself (internal).
- **Mutable:** Can be updated using the `setState` function (class components) or `useState` hook (functional components).
- **Usage:** Used for data that changes over time (e.g., form inputs, counters, toggles).

✅ Example:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // State

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}



# 📦 Props in React

## 🔹 What are Props?
- **Props** (short for *properties*) are used to pass data from a **parent component** to a **child component** in React.
- They make components **reusable** by allowing dynamic data to be passed into them.
- Props are **read-only** (immutable) – a child component cannot modify the props it receives.

---

## 🔹 Why use Props?
1. To share data between components.
2. To make components reusable with different data.
3. To keep components flexible and dynamic.

---

## 🔹 Example: Passing Props
```jsx
function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Mehedi" />
      <Greeting name="Hasan" />
      <Greeting name="Shohan" />
    </div>
  );
}



# ⚡ useState Hook in React

## 🔹 What is useState?
- `useState` is a **React Hook** that lets you add **state** to functional components.
- It allows you to store values that can change over time (e.g., user input, counters, toggles).
- Introduced in **React 16.8**, it replaced the need for class components to manage state.

---

## 🔹 How does useState work?
- `useState` returns an **array with two elements**:
  1. The **current state value**.
  2. A **function to update the state**.

Syntax:
```jsx
const [state, setState] = useState(initialValue);


# Sharing State Between Components in React

In React, sometimes multiple components need to access or update the same piece of state. This is called **lifting state up** or **sharing state**.

## Ways to Share State

### 1. Lifting State Up
- Move the state to the **closest common parent component**.
- Pass the state and its updater function down to child components as **props**.

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}

function ChildA({ count }) {
  return <h1>Count: {count}</h1>;
}

function ChildB({ setCount }) {
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}




# Event Handling in React

React handles events similar to how we handle them in plain JavaScript, but with a few key differences.

## Key Points
1. Events are written in **camelCase** (e.g., `onClick`, `onChange`) instead of lowercase (`onclick`).
2. In JSX, you pass a **function** as the event handler, not a string.
3. Event handlers receive a **SyntheticEvent**, which works the same across all browsers.
4. You can pass parameters to event handlers using arrow functions.

## Example: Basic Event Handling
```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
