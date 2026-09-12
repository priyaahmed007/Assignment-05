# DevStack

**Created by:** Priya Ahmed

## 📌 Project Overview

DevStack Builder is an interactive web application built with React. The main purpose of this project is to let users discover different development technologies and create a customized technology stack based on their interests.

The application provides technology cards with useful information and allows users to add, remove, and organize technologies in their personal stack.

## 🛠️ Built With

This project was developed using:

* **React** — Building the user interface
* **JavaScript** — Application logic and functionality
* **Tailwind CSS** — Styling and responsive design
* **Vite** — Development environment and build tool
* **React Toastify** — User notifications
* **HTML** — Page structure
* **CSS** — Additional styling

## 🚀 Key Features

### 🔍 Explore Technologies

Explore different technologies through individual cards. Each card provides useful details such as:

* Technology name
* Category
* Difficulty
* Rating
* Description
* Technology icon

### ➕ Create a Personal Stack

Found a technology you like? Add it to **Your Stack** with a single click. The selected technologies are displayed separately so users can easily keep track of them.

### 🗑️ Update Your Stack

Technologies can be removed individually whenever they are no longer needed. There is also an option to clear the complete stack.

### 🚫 Avoid Duplicate Items

A technology that has already been selected cannot be added again. Its button changes to a disabled-looking state so the user knows it is already part of the stack.

### 🔔 Instant Feedback

The application uses **React Toastify** to provide feedback for different user actions, such as adding or removing a technology.

### 📱 Responsive Interface

The layout is designed with **Tailwind CSS** so that the application remains usable on desktop, tablet, and smaller screens.

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like elements inside JavaScript.

It makes React components easier to create because the structure and logic of the UI can be written together.

### 2. What is the difference between props and state?

**Props** are values passed from a parent component to a child component.

**State** is data managed within a component that can change when the user interacts with the application.

For example, this project uses state to keep track of the technologies selected by the user.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store information that can change over time.

In this project, I used `useState` in `App.jsx` to maintain the user's selected technology stack.

For example:

```jsx
const [selectedStack, setSelectedStack] = useState([]);
```

Here, `selectedStack` stores the selected technologies and `setSelectedStack` updates them.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` allows us to perform side effects after a component renders.

In this project, I used it to load the technology information from the JSON file when the application starts.

This allows the technology data to be loaded dynamically instead of writing every technology directly inside the component.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify individual items in a list.

A unique key helps React understand which item has changed, been added, or removed, allowing it to update the UI more efficiently.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content depending on whether a particular condition is true or false.

I used it to display a message when there are no technologies in the selected stack:

```jsx
{selectedStack.length === 0 ? (
  <p>Nothing here yet. Add a technology to start building your stack.</p>
) : (
  <StackItems />
)}
```

When the stack is empty, the message is shown. Otherwise, the selected technologies are displayed.

### 7. How did you prevent users from adding the same technology multiple times?

Before adding a technology, I check whether it is already included in the selected stack.

If the technology has already been added, the button is disabled. This prevents duplicate technologies from appearing in the user's stack.

## 📂 Main Project Sections

The application is divided into reusable React components, including:

* **Navbar** — Navigation section
* **Hero** — Main introductory section
* **TechnologyList** — Displays available technologies
* **TechnologyCard** — Shows individual technology information
* **StackSidebar** — Displays the user's selected stack
* **StackItems** — Handles selected technology items
* **Footer** — Website footer

## 🎯 Learning Outcome

This project helped me practice building a React application using reusable components and state management.

Through this project, I worked with:

* React components
* JSX
* Props
* `useState`
* `useEffect`
* Event handling
* Conditional rendering
* `.map()`
* JSON data
* Tailwind CSS
* React Toastify
* Responsive UI design

## 👩‍💻 Author

**Priya Ahmed**

Frontend Developer in progress — **Code. Create. Continue.**
