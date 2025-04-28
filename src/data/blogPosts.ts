export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding React Hooks and Their Use Cases",
    slug: "understanding-react-hooks",
    date: "2023-06-15",
    excerpt: "React Hooks have revolutionized how we write React components. In this article, we'll explore the most commonly used hooks and their practical applications.",
    tags: ["React", "JavaScript", "Web Development"],
    coverImage: "/placeholder.svg",
    content: `
# Understanding React Hooks and Their Use Cases

React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They've changed the way we think about and write React components.

## useState

The useState hook is the most basic hook in React. It allows you to add state to functional components.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect

The useEffect hook performs side effects in functional components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
    
    return () => {
      // Cleanup code here
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useContext

The useContext hook provides a way to pass data through the component tree without having to pass props down manually at every level.

\`\`\`jsx
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}
\`\`\`

## Custom Hooks

One of the most powerful features of hooks is the ability to create your own custom hooks that encapsulate reusable logic.

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}

// Usage
function ResponsiveComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}
\`\`\`

## Conclusion

React Hooks provide a more direct API to React concepts you were already familiar with: props, state, context, refs, and lifecycle. They also offer a powerful way to reuse stateful logic between components without changing your component hierarchy.

Remember that hooks can only be called at the top level of your components and cannot be conditional. This ensures that hooks are called in the same order each time a component renders.
    `
  },
  {
    id: "2",
    title: "Building a RESTful API with Node.js and Express",
    slug: "building-restful-api-nodejs",
    date: "2023-08-22",
    excerpt: "Learn how to create a simple but powerful RESTful API using Node.js and Express, with MongoDB as the database.",
    tags: ["Node.js", "Express", "MongoDB", "API"],
    coverImage: "/placeholder.svg",
    content: `
# Building a RESTful API with Node.js and Express

In this tutorial, we'll walk through creating a RESTful API using Node.js and Express.

## Setting Up the Project

First, let's create a new project and install the necessary dependencies:

\`\`\`bash
mkdir node-rest-api
cd node-rest-api
npm init -y
npm install express mongoose body-parser
\`\`\`

## Create the Express Server

Now, let's set up our Express server:

\`\`\`javascript
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a simple GET endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## Define the Model

Let's create a simple model for our API:

\`\`\`javascript
// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);
\`\`\`

## Create Routes

Now, let's define our RESTful routes:

\`\`\`javascript
// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one product
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

// Create a product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
router.patch('/:id', getProduct, async (req, res) => {
  if (req.body.name != null) {
    res.product.name = req.body.name;
  }
  if (req.body.price != null) {
    res.product.price = req.body.price;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }

  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
\`\`\`

## Update the Server to Use the Routes

Finally, let's update our server to use the routes:

\`\`\`javascript
// app.js (updated)
// ... previous code

// Import routes
const productRoutes = require('./routes/products');

// Use routes
app.use('/api/products', productRoutes);

// ... rest of the code
\`\`\`

## Testing the API

You can test your API using tools like Postman or cURL:

- GET all products: \`GET http://localhost:3000/api/products\`
- GET a specific product: \`GET http://localhost:3000/api/products/:id\`
- CREATE a product: \`POST http://localhost:3000/api/products\`
- UPDATE a product: \`PATCH http://localhost:3000/api/products/:id\`
- DELETE a product: \`DELETE http://localhost:3000/api/products/:id\`

## Conclusion

Congratulations! You've built a RESTful API with Node.js, Express, and MongoDB. This is just the beginning - you can expand on this by adding authentication, validation, and more advanced functionality.
    `
  },
  {
    id: "3",
    title: "Getting Started with TypeScript: A Beginner's Guide",
    slug: "getting-started-with-typescript",
    date: "2023-09-10",
    excerpt: "TypeScript adds static types to JavaScript, making your code more robust and maintainable. Learn the basics in this beginner-friendly guide.",
    tags: ["TypeScript", "JavaScript", "Programming"],
    coverImage: "/placeholder.svg",
    content: `
# Getting Started with TypeScript: A Beginner's Guide

TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity and code quality.

## Why TypeScript?

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, navigation, and refactoring
- **Clearer APIs**: Type declarations serve as built-in documentation
- **Modern JavaScript Features**: Use the latest ECMAScript features with backward compatibility

## Installation

To get started with TypeScript, you'll need Node.js and npm installed. Then, you can install TypeScript globally:

\`\`\`bash
npm install -g typescript
\`\`\`

## Your First TypeScript File

Create a file called \`hello.ts\`:

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const greeting = greet('World');
console.log(greeting);
\`\`\`

## Compiling TypeScript

Compile your TypeScript file to JavaScript:

\`\`\`bash
tsc hello.ts
\`\`\`

This will generate a \`hello.js\` file that you can run with Node.js:

\`\`\`bash
node hello.js
\`\`\`

## Basic Types

TypeScript provides several basic types:

\`\`\`typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

// String
let color: string = "blue";
let fullName: string = \`John Doe\`;

// Array
let list: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane", "Mary"];

// Tuple
let x: [string, number] = ["hello", 10];

// Enum
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

// Object
let obj: object = { key: "value" };
\`\`\`

## Interfaces

Interfaces define the structure of objects:

\`\`\`typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  readonly birthYear: number; // Readonly property
}

function greet(person: Person): string {
  return \`Hello, \${person.firstName} \${person.lastName}\`;
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990
};

console.log(greet(john));
\`\`\`

## Classes

TypeScript supports class-based object-oriented programming:

\`\`\`typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number = 0): void {
    console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log('Woof! Woof!');
  }

  move(distanceInMeters = 5): void {
    console.log('Running...');
    super.move(distanceInMeters);
  }
}

const dog = new Dog('Rex');
dog.bark();
dog.move(10);
\`\`\`

## Generics

Generics allow you to create reusable components:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity(42); // Type argument inferred as number
\`\`\`

## tsconfig.json

Create a \`tsconfig.json\` file to configure TypeScript:

\`\`\`json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
\`\`\`

## Conclusion

This guide has introduced you to the basics of TypeScript. As you continue your journey, explore more advanced concepts like:

- Union and intersection types
- Type guards
- Advanced generics
- Decorators
- Utility types

TypeScript's static typing can significantly improve your development experience and code quality. Happy coding!
    `
  }
];
