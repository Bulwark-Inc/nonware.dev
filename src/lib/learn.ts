export type TutorialLesson = {
  title: string;
  slug: string;
  seo?: {
    title: string;
    description: string;
  };
};

export type TutorialSection = {
  title: string;
  lessons: TutorialLesson[];
};

export type Tutorial = {
  title: string;
  slug: string;
  description: string;
  sections: TutorialSection[];
};

export const tutorials: Record<string, Tutorial> = {
  // =========================================================
  // JAVASCRIPT
  // =========================================================

  javascript: {
    title: "JavaScript Tutorial",
    slug: "javascript",
    description:
      "Learn JavaScript from the fundamentals to modern development with practical examples and hands-on projects.",

    sections: [
      {
        title: "Getting Started",
        lessons: [
          {
            title: "Introduction to JavaScript",
            slug: "introduction",
            seo: {
              title: "Introduction to JavaScript",
              description:
                "Learn what JavaScript is, how it works, and why it is one of the most important languages for web development.",
            },
          },
          {
            title: "Setting Up Your Environment",
            slug: "setup",
            seo: {
              title: "Setting Up a JavaScript Development Environment",
              description:
                "Set up Node.js, a code editor, and the tools you need to start developing with JavaScript.",
            },
          },
          {
            title: "Your First JavaScript Program",
            slug: "first-program",
            seo: {
              title: "Your First JavaScript Program",
              description:
                "Write and run your first JavaScript program and learn the basic structure of JavaScript code.",
            },
          },
        ],
      },

      {
        title: "JavaScript Fundamentals",
        lessons: [
          {
            title: "Variables",
            slug: "variables",
            seo: {
              title: "Variables in JavaScript",
              description:
                "Learn how to declare, assign, and work with variables in JavaScript.",
            },
          },
          {
            title: "Data Types",
            slug: "data-types",
            seo: {
              title: "JavaScript Data Types",
              description:
                "Understand the different data types available in JavaScript and how they are used.",
            },
          },
          {
            title: "Operators",
            slug: "operators",
            seo: {
              title: "JavaScript Operators",
              description:
                "Learn arithmetic, comparison, assignment, logical, and other operators in JavaScript.",
            },
          },
          {
            title: "Strings",
            slug: "strings",
            seo: {
              title: "Strings in JavaScript",
              description:
                "Learn how to create, manipulate, and work with strings in JavaScript.",
            },
          },
          {
            title: "Numbers",
            slug: "numbers",
            seo: {
              title: "Numbers in JavaScript",
              description:
                "Learn how JavaScript handles numbers and how to perform common numerical operations.",
            },
          },
          {
            title: "Type Conversion",
            slug: "type-conversion",
            seo: {
              title: "Type Conversion in JavaScript",
              description:
                "Understand how JavaScript converts values between different data types.",
            },
          },
          {
            title: "Template Literals",
            slug: "template-literals",
            seo: {
              title: "Template Literals in JavaScript",
              description:
                "Learn how to use template literals for cleaner strings and dynamic values in JavaScript.",
            },
          },
        ],
      },

      {
        title: "Control Flow",
        lessons: [
          {
            title: "if and else",
            slug: "if-else",
            seo: {
              title: "if and else Statements in JavaScript",
              description:
                "Learn how to make decisions in JavaScript using if, else if, and else statements.",
            },
          },
          {
            title: "switch Statements",
            slug: "switch",
            seo: {
              title: "switch Statements in JavaScript",
              description:
                "Learn how to use switch statements to handle multiple conditions in JavaScript.",
            },
          },
          {
            title: "Ternary Operator",
            slug: "ternary-operator",
            seo: {
              title: "Ternary Operator in JavaScript",
              description:
                "Learn how to use the JavaScript ternary operator for concise conditional expressions.",
            },
          },
          {
            title: "Truthy and Falsy Values",
            slug: "truthy-falsy",
            seo: {
              title: "Truthy and Falsy Values in JavaScript",
              description:
                "Understand truthy and falsy values and how JavaScript evaluates conditions.",
            },
          },
          {
            title: "Logical Operators",
            slug: "logical-operators",
            seo: {
              title: "Logical Operators in JavaScript",
              description:
                "Learn how to combine and evaluate conditions using JavaScript logical operators.",
            },
          },
        ],
      },

      {
        title: "Functions",
        lessons: [
          {
            title: "Functions",
            slug: "functions",
            seo: {
              title: "Functions in JavaScript",
              description:
                "Learn how to create and use functions to organize and reuse JavaScript code.",
            },
          },
          {
            title: "Parameters and Arguments",
            slug: "parameters-arguments",
            seo: {
              title: "Parameters and Arguments in JavaScript",
              description:
                "Understand how parameters and arguments work when calling JavaScript functions.",
            },
          },
          {
            title: "Return Values",
            slug: "return-values",
            seo: {
              title: "Return Values in JavaScript",
              description:
                "Learn how JavaScript functions return values and how to use those values in your programs.",
            },
          },
          {
            title: "Arrow Functions",
            slug: "arrow-functions",
            seo: {
              title: "Arrow Functions in JavaScript",
              description:
                "Learn how to write and use arrow functions in modern JavaScript.",
            },
          },
          {
            title: "Scope",
            slug: "scope",
            seo: {
              title: "Scope in JavaScript",
              description:
                "Understand global, function, and block scope in JavaScript.",
            },
          },
          {
            title: "Closures",
            slug: "closures",
            seo: {
              title: "Closures in JavaScript",
              description:
                "Understand JavaScript closures and how they allow functions to retain access to surrounding variables.",
            },
          },
        ],
      },

      {
        title: "Arrays and Objects",
        lessons: [
          {
            title: "Arrays",
            slug: "arrays",
            seo: {
              title: "Arrays in JavaScript",
              description:
                "Learn how to create, access, modify, and work with arrays in JavaScript.",
            },
          },
          {
            title: "Array Methods",
            slug: "array-methods",
            seo: {
              title: "JavaScript Array Methods",
              description:
                "Learn the most useful JavaScript array methods for working with collections of data.",
            },
          },
          {
            title: "Objects",
            slug: "objects",
            seo: {
              title: "Objects in JavaScript",
              description:
                "Learn how JavaScript objects store and organize related data and functionality.",
            },
          },
          {
            title: "Object Methods",
            slug: "object-methods",
            seo: {
              title: "JavaScript Object Methods",
              description:
                "Learn how to create and use methods on JavaScript objects.",
            },
          },
          {
            title: "Destructuring",
            slug: "destructuring",
            seo: {
              title: "Destructuring in JavaScript",
              description:
                "Learn how to extract values from arrays and objects using JavaScript destructuring.",
            },
          },
          {
            title: "Spread and Rest",
            slug: "spread-rest",
            seo: {
              title: "Spread and Rest Operators in JavaScript",
              description:
                "Learn how the spread and rest syntax works with arrays, objects, and functions.",
            },
          },
        ],
      },

      {
        title: "Working with Data",
        lessons: [
          {
            title: "Loops and Iteration",
            slug: "loops",
            seo: {
              title: "Loops and Iteration in JavaScript",
              description:
                "Learn how to repeat operations using for, while, for...of, and other JavaScript loops.",
            },
          },
          {
            title: "map()",
            slug: "map",
            seo: {
              title: "JavaScript map() Method",
              description:
                "Learn how to transform array elements using the JavaScript map() method.",
            },
          },
          {
            title: "filter()",
            slug: "filter",
            seo: {
              title: "JavaScript filter() Method",
              description:
                "Learn how to filter arrays based on conditions using JavaScript filter().",
            },
          },
          {
            title: "find()",
            slug: "find",
            seo: {
              title: "JavaScript find() Method",
              description:
                "Learn how to find elements in arrays using JavaScript find().",
            },
          },
          {
            title: "reduce()",
            slug: "reduce",
            seo: {
              title: "JavaScript reduce() Method",
              description:
                "Learn how to use reduce() to transform array data into a single result.",
            },
          },
          {
            title: "JSON",
            slug: "json",
            seo: {
              title: "Working with JSON in JavaScript",
              description:
                "Learn how to parse, create, and work with JSON data in JavaScript applications.",
            },
          },
          {
            title: "Dates and Times",
            slug: "dates",
            seo: {
              title: "Dates and Times in JavaScript",
              description:
                "Learn how to work with dates and times using JavaScript.",
            },
          },
        ],
      },

      {
        title: "The Browser",
        lessons: [
          {
            title: "Introduction to the DOM",
            slug: "dom",
            seo: {
              title: "Introduction to the DOM",
              description:
                "Understand the Document Object Model and how JavaScript interacts with web pages.",
            },
          },
          {
            title: "Selecting Elements",
            slug: "selecting-elements",
            seo: {
              title: "Selecting DOM Elements with JavaScript",
              description:
                "Learn how to select HTML elements using JavaScript DOM APIs.",
            },
          },
          {
            title: "Modifying the DOM",
            slug: "modifying-dom",
            seo: {
              title: "Modifying the DOM with JavaScript",
              description:
                "Learn how to create, modify, and remove HTML elements using JavaScript.",
            },
          },
          {
            title: "Events",
            slug: "events",
            seo: {
              title: "JavaScript Events",
              description:
                "Learn how browser events work and how to respond to user interactions with JavaScript.",
            },
          },
          {
            title: "Forms",
            slug: "forms",
            seo: {
              title: "Handling Forms with JavaScript",
              description:
                "Learn how to read, validate, and handle HTML forms using JavaScript.",
            },
          },
          {
            title: "Browser Storage",
            slug: "browser-storage",
            seo: {
              title: "Browser Storage with JavaScript",
              description:
                "Learn how to store data in the browser using localStorage and sessionStorage.",
            },
          },
        ],
      },

      {
        title: "Asynchronous JavaScript",
        lessons: [
          {
            title: "Synchronous vs Asynchronous JavaScript",
            slug: "sync-vs-async",
            seo: {
              title: "Synchronous vs Asynchronous JavaScript",
              description:
                "Understand the difference between synchronous and asynchronous JavaScript code.",
            },
          },
          {
            title: "Callbacks",
            slug: "callbacks",
            seo: {
              title: "Callbacks in JavaScript",
              description:
                "Learn how callback functions work and where they are used in JavaScript.",
            },
          },
          {
            title: "Promises",
            slug: "promises",
            seo: {
              title: "Promises in JavaScript",
              description:
                "Learn how JavaScript promises represent and handle asynchronous operations.",
            },
          },
          {
            title: "async and await",
            slug: "async-await",
            seo: {
              title: "async and await in JavaScript",
              description:
                "Learn how to write cleaner asynchronous JavaScript using async and await.",
            },
          },
          {
            title: "Fetch API",
            slug: "fetch-api",
            seo: {
              title: "Using the Fetch API in JavaScript",
              description:
                "Learn how to make HTTP requests and work with API responses using the Fetch API.",
            },
          },
          {
            title: "Error Handling",
            slug: "error-handling",
            seo: {
              title: "Error Handling in JavaScript",
              description:
                "Learn how to detect and handle errors using try, catch, finally, and throw.",
            },
          },
        ],
      },

      {
        title: "Modern JavaScript",
        lessons: [
          {
            title: "JavaScript Modules",
            slug: "modules",
            seo: {
              title: "JavaScript Modules",
              description:
                "Learn how to organize JavaScript applications using modules and reusable files.",
            },
          },
          {
            title: "import and export",
            slug: "import-export",
            seo: {
              title: "import and export in JavaScript",
              description:
                "Learn how to export and import functions, variables, and other values between JavaScript modules.",
            },
          },
          {
            title: "Optional Chaining",
            slug: "optional-chaining",
            seo: {
              title: "Optional Chaining in JavaScript",
              description:
                "Learn how optional chaining makes it safer and easier to access nested JavaScript properties.",
            },
          },
          {
            title: "Nullish Coalescing",
            slug: "nullish-coalescing",
            seo: {
              title: "Nullish Coalescing in JavaScript",
              description:
                "Learn how to use the nullish coalescing operator to handle null and undefined values.",
            },
          },
          {
            title: "JavaScript Best Practices",
            slug: "best-practices",
            seo: {
              title: "JavaScript Best Practices",
              description:
                "Learn practical JavaScript coding practices for writing cleaner and more maintainable applications.",
            },
          },
        ],
      },

      {
        title: "Practical JavaScript",
        lessons: [
          {
            title: "Working with APIs",
            slug: "working-with-apis",
            seo: {
              title: "Working with APIs in JavaScript",
              description:
                "Learn how to consume APIs and work with external data in JavaScript applications.",
            },
          },
          {
            title: "Debugging JavaScript",
            slug: "debugging",
            seo: {
              title: "Debugging JavaScript",
              description:
                "Learn practical techniques for finding and fixing problems in JavaScript applications.",
            },
          },
          {
            title: "Building a JavaScript Project",
            slug: "project",
            seo: {
              title: "Build a JavaScript Project",
              description:
                "Put your JavaScript knowledge together by building a practical project from scratch.",
            },
          },
        ],
      },
    ],
  },

  // =========================================================
  // TYPESCRIPT
  // =========================================================

  typescript: {
    title: "TypeScript Tutorial",
    slug: "typescript",
    description:
      "Learn TypeScript from the fundamentals to advanced patterns with practical examples and real-world development techniques.",

    sections: [
      {
        title: "Getting Started",
        lessons: [
          {
            title: "Introduction to TypeScript",
            slug: "introduction",
            seo: {
              title: "Introduction to TypeScript",
              description:
                "Learn what TypeScript is, why developers use it, and how it relates to JavaScript.",
            },
          },
          {
            title: "TypeScript vs JavaScript",
            slug: "typescript-vs-javascript",
            seo: {
              title: "TypeScript vs JavaScript",
              description:
                "Understand the differences between TypeScript and JavaScript and when to use each.",
            },
          },
          {
            title: "Installing TypeScript",
            slug: "installation",
            seo: {
              title: "Installing TypeScript",
              description:
                "Learn how to install TypeScript and set up a TypeScript development environment.",
            },
          },
          {
            title: "Your First TypeScript Program",
            slug: "first-program",
            seo: {
              title: "Your First TypeScript Program",
              description:
                "Create and run your first TypeScript program and understand the basic development workflow.",
            },
          },
          {
            title: "Understanding tsconfig.json",
            slug: "tsconfig",
            seo: {
              title: "Understanding tsconfig.json",
              description:
                "Learn how the TypeScript configuration file controls compilation and type checking.",
            },
          },
        ],
      },

      {
        title: "TypeScript Fundamentals",
        lessons: [
          {
            title: "Type Annotations",
            slug: "type-annotations",
            seo: {
              title: "Type Annotations in TypeScript",
              description:
                "Learn how to explicitly define the types of variables, parameters, and values in TypeScript.",
            },
          },
          {
            title: "Primitive Types",
            slug: "primitive-types",
            seo: {
              title: "Primitive Types in TypeScript",
              description:
                "Learn the core primitive types available in TypeScript.",
            },
          },
          {
            title: "Arrays",
            slug: "arrays",
            seo: {
              title: "Arrays in TypeScript",
              description:
                "Learn how to create and type arrays in TypeScript.",
            },
          },
          {
            title: "Tuples",
            slug: "tuples",
            seo: {
              title: "Tuples in TypeScript",
              description:
                "Learn how tuples allow you to represent fixed-length typed arrays in TypeScript.",
            },
          },
          {
            title: "any, unknown, and never",
            slug: "any-unknown-never",
            seo: {
              title: "any, unknown, and never in TypeScript",
              description:
                "Understand the differences between any, unknown, and never in TypeScript.",
            },
          },
        ],
      },

      {
        title: "Functions",
        lessons: [
          {
            title: "Typing Function Parameters",
            slug: "function-parameters",
            seo: {
              title: "Typing Function Parameters in TypeScript",
              description:
                "Learn how to define safe types for TypeScript function parameters.",
            },
          },
          {
            title: "Return Types",
            slug: "return-types",
            seo: {
              title: "Function Return Types in TypeScript",
              description:
                "Learn how to define and use return types in TypeScript functions.",
            },
          },
          {
            title: "Optional and Default Parameters",
            slug: "optional-default-parameters",
            seo: {
              title: "Optional and Default Parameters in TypeScript",
              description:
                "Learn how to work with optional and default function parameters in TypeScript.",
            },
          },
          {
            title: "Function Types",
            slug: "function-types",
            seo: {
              title: "Function Types in TypeScript",
              description:
                "Learn how to define types for functions in TypeScript.",
            },
          },
        ],
      },

      {
        title: "Objects and Custom Types",
        lessons: [
          {
            title: "Object Types",
            slug: "object-types",
            seo: {
              title: "Object Types in TypeScript",
              description:
                "Learn how to describe the structure of objects using TypeScript types.",
            },
          },
          {
            title: "Type Aliases",
            slug: "type-aliases",
            seo: {
              title: "Type Aliases in TypeScript",
              description:
                "Learn how to create reusable custom types using TypeScript type aliases.",
            },
          },
          {
            title: "Interfaces",
            slug: "interfaces",
            seo: {
              title: "Interfaces in TypeScript",
              description:
                "Learn how TypeScript interfaces describe and enforce object structures.",
            },
          },
          {
            title: "Optional and readonly Properties",
            slug: "optional-readonly",
            seo: {
              title: "Optional and readonly Properties in TypeScript",
              description:
                "Learn how to use optional and readonly properties in TypeScript objects.",
            },
          },
          {
            title: "Interfaces vs Type Aliases",
            slug: "interfaces-vs-types",
            seo: {
              title: "Interfaces vs Type Aliases in TypeScript",
              description:
                "Understand the practical differences between interfaces and type aliases in TypeScript.",
            },
          },
        ],
      },

      {
        title: "Advanced Types",
        lessons: [
          {
            title: "Union Types",
            slug: "union-types",
            seo: {
              title: "Union Types in TypeScript",
              description:
                "Learn how union types allow values to have more than one possible type.",
            },
          },
          {
            title: "Intersection Types",
            slug: "intersection-types",
            seo: {
              title: "Intersection Types in TypeScript",
              description:
                "Learn how to combine multiple types using TypeScript intersection types.",
            },
          },
          {
            title: "Literal Types",
            slug: "literal-types",
            seo: {
              title: "Literal Types in TypeScript",
              description:
                "Learn how literal types restrict values to specific strings, numbers, or booleans.",
            },
          },
          {
            title: "Type Narrowing",
            slug: "type-narrowing",
            seo: {
              title: "Type Narrowing in TypeScript",
              description:
                "Learn how TypeScript narrows types based on runtime checks and conditions.",
            },
          },
          {
            title: "Type Guards",
            slug: "type-guards",
            seo: {
              title: "Type Guards in TypeScript",
              description:
                "Learn how type guards help TypeScript safely determine the type of a value.",
            },
          },
          {
            title: "Discriminated Unions",
            slug: "discriminated-unions",
            seo: {
              title: "Discriminated Unions in TypeScript",
              description:
                "Learn how discriminated unions can model different states safely in TypeScript.",
            },
          },
        ],
      },

      {
        title: "Generics",
        lessons: [
          {
            title: "Introduction to Generics",
            slug: "generics",
            seo: {
              title: "Generics in TypeScript",
              description:
                "Learn how TypeScript generics make reusable code safer and more flexible.",
            },
          },
          {
            title: "Generic Functions",
            slug: "generic-functions",
            seo: {
              title: "Generic Functions in TypeScript",
              description:
                "Learn how to create reusable functions using TypeScript generics.",
            },
          },
          {
            title: "Generic Constraints",
            slug: "generic-constraints",
            seo: {
              title: "Generic Constraints in TypeScript",
              description:
                "Learn how to restrict TypeScript generics using constraints.",
            },
          },
          {
            title: "Practical Generic Patterns",
            slug: "generic-patterns",
            seo: {
              title: "Practical TypeScript Generic Patterns",
              description:
                "Explore practical patterns for using generics in real TypeScript applications.",
            },
          },
        ],
      },

      {
        title: "TypeScript in Real Projects",
        lessons: [
          {
            title: "Typing API Data",
            slug: "api-data",
            seo: {
              title: "How to Type API Data in TypeScript",
              description:
                "Learn how to safely represent API responses and external data with TypeScript.",
            },
          },
          {
            title: "Typing Environment Variables",
            slug: "environment-variables",
            seo: {
              title: "Typing Environment Variables in TypeScript",
              description:
                "Learn how to safely work with environment variables in TypeScript projects.",
            },
          },
          {
            title: "TypeScript with React",
            slug: "react",
            seo: {
              title: "TypeScript with React",
              description:
                "Learn the fundamentals of using TypeScript when building React applications.",
            },
          },
          {
            title: "Common TypeScript Patterns",
            slug: "patterns",
            seo: {
              title: "Common TypeScript Patterns",
              description:
                "Learn practical TypeScript patterns that make real-world applications safer and easier to maintain.",
            },
          },
          {
            title: "Debugging Type Errors",
            slug: "debugging",
            seo: {
              title: "Debugging TypeScript Errors",
              description:
                "Learn practical techniques for understanding and fixing TypeScript errors.",
            },
          },
        ],
      },
    ],
  },

  // =========================================================
  // NEXT.JS
  // =========================================================

  nextjs: {
    title: "Next.js Tutorial",
    slug: "nextjs",
    description:
      "Learn Next.js step by step with practical tutorials, examples, and hands-on projects.",

    sections: [
      {
        title: "Getting Started",
        lessons: [
          {
            title: "Introduction to Next.js",
            slug: "introduction",
            seo: {
              title: "Introduction to Next.js",
              description:
                "Learn what Next.js is, how it works, and why developers use it to build modern web applications.",
            },
          },
          {
            title: "Next.js vs React",
            slug: "nextjs-vs-react",
            seo: {
              title: "Next.js vs React",
              description:
                "Understand the relationship between React and Next.js and what Next.js adds to React applications.",
            },
          },
          {
            title: "Installing Next.js",
            slug: "installation",
            seo: {
              title: "Installing Next.js",
              description:
                "Learn how to install Next.js and create a new Next.js application.",
            },
          },
          {
            title: "Creating Your First App",
            slug: "first-app",
            seo: {
              title: "Creating Your First Next.js App",
              description:
                "Create your first Next.js application and learn the basic development workflow.",
            },
          },
          {
            title: "Understanding the Project Structure",
            slug: "project-structure",
            seo: {
              title: "Next.js Project Structure Explained",
              description:
                "Understand the important files and folders inside a modern Next.js application.",
            },
          },
        ],
      },

      {
        title: "Next.js Fundamentals",
        lessons: [
          {
            title: "The App Router",
            slug: "app-router",
            seo: {
              title: "Next.js App Router",
              description:
                "Learn how the Next.js App Router organizes pages, layouts, and application routes.",
            },
          },
          {
            title: "Pages and Layouts",
            slug: "pages-layouts",
            seo: {
              title: "Pages and Layouts in Next.js",
              description:
                "Learn how pages and layouts work together to structure Next.js applications.",
            },
          },
          {
            title: "Navigation",
            slug: "navigation",
            seo: {
              title: "Navigation in Next.js",
              description:
                "Learn how to navigate between pages using Next.js navigation features.",
            },
          },
          {
            title: "Images",
            slug: "images",
            seo: {
              title: "Images in Next.js",
              description:
                "Learn how to optimize and display images using the Next.js Image component.",
            },
          },
          {
            title: "Fonts",
            slug: "fonts",
            seo: {
              title: "Fonts in Next.js",
              description:
                "Learn how to add and optimize fonts in a Next.js application.",
            },
          },
        ],
      },

      {
        title: "Routing",
        lessons: [
          {
            title: "Static Routes",
            slug: "static-routes",
            seo: {
              title: "Static Routes in Next.js",
              description:
                "Learn how to create basic static routes using the Next.js App Router.",
            },
          },
          {
            title: "Dynamic Routes",
            slug: "dynamic-routes",
            seo: {
              title: "Dynamic Routes in Next.js",
              description:
                "Learn how to create dynamic routes and pages using the Next.js App Router.",
            },
          },
          {
            title: "Nested Routes",
            slug: "nested-routes",
            seo: {
              title: "Nested Routes in Next.js",
              description:
                "Learn how to organize related pages using nested routes in Next.js.",
            },
          },
          {
            title: "Route Groups",
            slug: "route-groups",
            seo: {
              title: "Route Groups in Next.js",
              description:
                "Learn how to organize Next.js routes without changing their URL structure.",
            },
          },
          {
            title: "Catch-All Routes",
            slug: "catch-all-routes",
            seo: {
              title: "Catch-All Routes in Next.js",
              description:
                "Learn how to create catch-all and optional catch-all routes in Next.js.",
            },
          },
          {
            title: "Not Found Pages",
            slug: "not-found",
            seo: {
              title: "Custom Not Found Pages in Next.js",
              description:
                "Learn how to create custom 404 and not-found experiences in Next.js.",
            },
          },
        ],
      },

      {
        title: "Server and Client Components",
        lessons: [
          {
            title: "Server Components",
            slug: "server-components",
            seo: {
              title: "React Server Components in Next.js",
              description:
                "Learn how Server Components work in modern Next.js applications.",
            },
          },
          {
            title: "Client Components",
            slug: "client-components",
            seo: {
              title: "Client Components in Next.js",
              description:
                "Learn when and how to use Client Components in Next.js.",
            },
          },
          {
            title: "The use client Directive",
            slug: "use-client",
            seo: {
              title: "The use client Directive in Next.js",
              description:
                "Understand what the use client directive does and when it is required.",
            },
          },
          {
            title: "Server vs Client Components",
            slug: "server-vs-client",
            seo: {
              title: "Server vs Client Components in Next.js",
              description:
                "Understand the differences between Server and Client Components and when to use each.",
            },
          },
        ],
      },

      {
        title: "Data Fetching",
        lessons: [
          {
            title: "Fetching Data",
            slug: "fetching-data",
            seo: {
              title: "Data Fetching in Next.js",
              description:
                "Learn how to fetch data in Next.js applications using modern server-side patterns.",
            },
          },
          {
            title: "Async Components",
            slug: "async-components",
            seo: {
              title: "Async Components in Next.js",
              description:
                "Learn how asynchronous Server Components work in Next.js.",
            },
          },
          {
            title: "Loading UI",
            slug: "loading-ui",
            seo: {
              title: "Loading UI in Next.js",
              description:
                "Learn how to create loading states and loading UI using Next.js.",
            },
          },
          {
            title: "Error Handling",
            slug: "error-handling",
            seo: {
              title: "Error Handling in Next.js",
              description:
                "Learn how to handle errors gracefully in Next.js applications.",
            },
          },
          {
            title: "Caching and Revalidation",
            slug: "caching-revalidation",
            seo: {
              title: "Caching and Revalidation in Next.js",
              description:
                "Learn how caching and revalidation work in modern Next.js applications.",
            },
          },
        ],
      },

      {
        title: "Forms and Server Actions",
        lessons: [
          {
            title: "Forms in Next.js",
            slug: "forms",
            seo: {
              title: "Forms in Next.js",
              description:
                "Learn how to build and handle forms in Next.js applications.",
            },
          },
          {
            title: "Server Actions",
            slug: "server-actions",
            seo: {
              title: "Server Actions in Next.js",
              description:
                "Learn how Server Actions can handle server-side operations directly from your Next.js application.",
            },
          },
          {
            title: "Form Validation",
            slug: "form-validation",
            seo: {
              title: "Form Validation in Next.js",
              description:
                "Learn practical approaches to validating form data in Next.js.",
            },
          },
        ],
      },

      {
        title: "APIs and Backend Features",
        lessons: [
          {
            title: "Route Handlers",
            slug: "route-handlers",
            seo: {
              title: "Route Handlers in Next.js",
              description:
                "Learn how to build API endpoints using Next.js Route Handlers.",
            },
          },
          {
            title: "HTTP Methods",
            slug: "http-methods",
            seo: {
              title: "HTTP Methods in Next.js Route Handlers",
              description:
                "Learn how to handle GET, POST, PUT, PATCH, and DELETE requests in Next.js.",
            },
          },
          {
            title: "Working with External APIs",
            slug: "external-apis",
            seo: {
              title: "Working with External APIs in Next.js",
              description:
                "Learn how to connect a Next.js application to external APIs.",
            },
          },
          {
            title: "Environment Variables",
            slug: "environment-variables",
            seo: {
              title: "Environment Variables in Next.js",
              description:
                "Learn how to safely configure environment variables in Next.js applications.",
            },
          },
        ],
      },

      {
        title: "Styling and UI",
        lessons: [
          {
            title: "Styling Next.js Applications",
            slug: "styling",
            seo: {
              title: "Styling Next.js Applications",
              description:
                "Learn the common approaches to styling modern Next.js applications.",
            },
          },
          {
            title: "Tailwind CSS",
            slug: "tailwind",
            seo: {
              title: "Tailwind CSS with Next.js",
              description:
                "Learn how to use Tailwind CSS to build modern user interfaces with Next.js.",
            },
          },
          {
            title: "Reusable Components",
            slug: "components",
            seo: {
              title: "Reusable Components in Next.js",
              description:
                "Learn how to organize reusable UI components in a Next.js project.",
            },
          },
        ],
      },

      {
        title: "SEO and Production",
        lessons: [
          {
            title: "Metadata",
            slug: "metadata",
            seo: {
              title: "Metadata in Next.js",
              description:
                "Learn how to configure page metadata and improve SEO in Next.js applications.",
            },
          },
          {
            title: "Dynamic Metadata",
            slug: "dynamic-metadata",
            seo: {
              title: "Dynamic Metadata in Next.js",
              description:
                "Learn how to generate dynamic SEO metadata for Next.js pages.",
            },
          },
          {
            title: "Open Graph",
            slug: "open-graph",
            seo: {
              title: "Open Graph Metadata in Next.js",
              description:
                "Learn how to configure Open Graph metadata for better social sharing.",
            },
          },
          {
            title: "Sitemap",
            slug: "sitemap",
            seo: {
              title: "Creating a Sitemap in Next.js",
              description:
                "Learn how to create and manage XML sitemaps in Next.js.",
            },
          },
          {
            title: "robots.txt",
            slug: "robots",
            seo: {
              title: "robots.txt in Next.js",
              description:
                "Learn how to configure robots.txt for search engine crawlers in Next.js.",
            },
          },
          {
            title: "Structured Data",
            slug: "structured-data",
            seo: {
              title: "Structured Data in Next.js",
              description:
                "Learn how to add structured data and JSON-LD to Next.js applications.",
            },
          },
          {
            title: "Performance Optimization",
            slug: "performance",
            seo: {
              title: "Next.js Performance Optimization",
              description:
                "Learn practical techniques for improving the performance of Next.js applications.",
            },
          },
        ],
      },

      {
        title: "Building a Real Application",
        lessons: [
          {
            title: "Project Architecture",
            slug: "architecture",
            seo: {
              title: "Next.js Project Architecture",
              description:
                "Learn how to structure a maintainable Next.js application as it grows.",
            },
          },
          {
            title: "Database Integration",
            slug: "database",
            seo: {
              title: "Database Integration with Next.js",
              description:
                "Learn the fundamentals of connecting a Next.js application to a database.",
            },
          },
          {
            title: "Authentication",
            slug: "authentication",
            seo: {
              title: "Authentication in Next.js",
              description:
                "Learn the fundamentals of implementing authentication in a Next.js application.",
            },
          },
          {
            title: "Production Checklist",
            slug: "production-checklist",
            seo: {
              title: "Next.js Production Checklist",
              description:
                "Use this practical checklist to prepare a Next.js application for production.",
            },
          },
        ],
      },

      {
        title: "Deployment",
        lessons: [
          {
            title: "Production Build",
            slug: "production-build",
            seo: {
              title: "Building a Next.js Application for Production",
              description:
                "Learn how to create an optimized production build of a Next.js application.",
            },
          },
          {
            title: "Standalone Output",
            slug: "standalone-output",
            seo: {
              title: "Next.js Standalone Output",
              description:
                "Learn how Next.js standalone output works and why it is useful for containerized deployments.",
            },
          },
          {
            title: "Docker",
            slug: "docker",
            seo: {
              title: "Deploying Next.js with Docker",
              description:
                "Learn how to containerize a Next.js application using Docker.",
            },
          },
          {
            title: "Google Cloud",
            slug: "google-cloud",
            seo: {
              title: "Deploying Next.js to Google Cloud",
              description:
                "Learn how to deploy a containerized Next.js application to Google Cloud.",
            },
          },
          {
            title: "Cloud Run",
            slug: "cloud-run",
            seo: {
              title: "Deploying Next.js to Google Cloud Run",
              description:
                "Learn how to deploy a Next.js container to Google Cloud Run.",
            },
          },
          {
            title: "Monitoring and Updates",
            slug: "monitoring-updates",
            seo: {
              title: "Monitoring and Updating a Next.js Deployment",
              description:
                "Learn how to monitor and update a deployed Next.js application.",
            },
          },
        ],
      },
    ],
  },

  // =========================================================
  // LIGHTWEIGHT / FUTURE TUTORIALS
  // =========================================================

  python: {
    title: "Python Tutorial",
    slug: "python",
    description:
      "Learn Python programming from the fundamentals to practical application development.",
    sections: [],
  },

  django: {
    title: "Django Tutorial",
    slug: "django",
    description:
      "Learn how to build web applications with Python and Django.",
    sections: [],
  },

  fastapi: {
    title: "FastAPI Tutorial",
    slug: "fastapi",
    description:
      "Learn how to build modern APIs and backend services with Python and FastAPI.",
    sections: [],
  },

  docker: {
    title: "Docker Tutorial",
    slug: "docker",
    description:
      "Learn how to build, run, package, and deploy applications using Docker.",
    sections: [],
  },

  git: {
    title: "Git Tutorial",
    slug: "git",
    description:
      "Learn Git for version control, collaboration, and managing software projects.",
    sections: [],
  },

  github: {
    title: "GitHub Tutorial",
    slug: "github",
    description:
      "Learn how to use GitHub to host, manage, collaborate on, and deploy software projects.",
    sections: [],
  },

  gcloud: {
    title: "Google Cloud Tutorial",
    slug: "gcloud",
    description:
      "Learn how to use Google Cloud tools and services to deploy and manage applications.",
    sections: [],
  },
};