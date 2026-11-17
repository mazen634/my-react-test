# My React Test

A small React application that introduces a junior full-stack developer and demonstrates a few React and JavaScript fundamentals. The page displays a time-based greeting, a short introduction, basic arithmetic examples, and a list of web technologies.

## What the app shows

- A greeting and heading rendered by the `Heading` component.
- Four arithmetic examples (addition, subtraction, multiplication, and division) provided by `Calculator.js`.
- A list of technologies: HTML, CSS, JavaScript, and React.
- A greeting color selected from the time value currently calculated in `Heading.jsx`.

## Built with

- React 18
- Create React App (`react-scripts`)
- JavaScript
- React Testing Library and Jest DOM (available in the project dependencies)

## Requirements

- Node.js and npm

## Run locally

Clone the repository and install its dependencies:

```bash
git clone https://github.com/Amukayoung/my-react-test.git
cd my-react-test
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000). It reloads when source files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the development server. |
| `npm test` | Run the test runner in watch mode. |
| `npm run build` | Create an optimized production build in `build/`. |
| `npm run eject` | Copy the Create React App configuration into the project. This is a one-way operation. |

## Project structure

```
src/
├── index.js                  # Mounts the React app
└── components/
    ├── App.jsx               # Composes the page components
    ├── Heading.jsx           # Greeting, introduction, and arithmetic examples
    ├── Lists.jsx             # Web technology list
    └── Calculator.js         # Arithmetic helper functions
public/
└── index.html                # HTML document and React root element
```

## Notes

This repository is a learning project. The greeting currently uses a fixed date and time in `Heading.jsx`, so it does not change with the visitor's actual local time.
