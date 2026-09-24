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
            title: "Introduction",
            slug: "getting-started",
            seo: {
              title: "Introduction to Next.js",
              description: "Learn the basics of Next.js and how it can help you build better web applications.",
            },
          },
          {
            title: "Installation",
            slug: "installation",
            seo: {
              title: "Installing Next.js",
              description: "Step-by-step guide to installing Next.js and setting up your development environment.",
            },
          },
          {
            title: "Creating Your First App",
            slug: "first-app",
            seo: {
              title: "Creating Your First Next.js App",
              description: "Learn how to create your first Next.js application from scratch.",
            },
          },
        ],
      },

      {
        title: "Building with Next.js",
        lessons: [
          {
            title: "Pages and Layouts",
            slug: "layouts",
            seo: {
              title: "Pages and Layouts in Next.js",
              description: "Learn how to create pages and layouts in Next.js for better organization and structure.",
            },
          },
          {
            title: "Routing",
            slug: "routing",
            seo: {
              title: "Routing in Next.js",
              description: "Learn how to implement routing in Next.js for creating dynamic and efficient web applications.",
            },
          },
        ],
      },

      {
        title: "Deployment",
        lessons: [
          {
            title: "Docker",
            slug: "docker",
            seo: {
              title: "Deploying Next.js with Docker",
              description: "Learn how to containerize your Next.js application using Docker for easy deployment.",
            },
          },
          {
            title: "Google Cloud",
            slug: "google-cloud",
            seo: {
              title: "Deploying Next.js to Google Cloud",
              description: "Learn how to deploy your Next.js application to Google Cloud for scalable and reliable hosting.",
            },
          },
        ],
      },
    ],
  },

  javascript: {
    title: "JavaScript Tutorial",
    slug: "javascript",
    description:
      "Welcome to the JavaScript tutorial! This tutorial is designed for beginners who want to learn the fundamentals of JavaScript programming. Throughout this tutorial, you will gain a solid understanding of JavaScript concepts and how to apply them in real-world scenarios.",

    sections: [
      {
        title: "Getting Started",
        lessons: [
          {
            title: "Introduction",
            slug: "introduction",
            seo: {
              title: "Introduction to JavaScript",
              description: "Learn the basics of JavaScript and how it can be used to create interactive web applications.",
            },
          },
          {
            title: "Variables",
            slug: "variables",
            seo: {
              title: "Variables in JavaScript",
              description: "Learn how to declare and use variables in JavaScript for storing and manipulating data.",
            },
          },
          {
            title: "Functions",
            slug: "functions",
            seo: {
              title: "Functions in JavaScript",
              description: "Learn how to define and use functions in JavaScript for organizing and reusing code.",
            },
          },
        ],
      },
    ],
  },
};