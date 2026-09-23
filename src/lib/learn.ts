export type TutorialLesson = {
  title: string;
  slug: string;
};

export type TutorialSection = {
  title: string;
  lessons: TutorialLesson[];
};

export type Tutorial = {
  title: string;
  slug: string;
  sections: TutorialSection[];
};

export const tutorials: Record<string, Tutorial> = {
  nextjs: {
    title: "Next.js Tutorial",
    slug: "nextjs",

    sections: [
      {
        title: "Getting Started",
        lessons: [
          {
            title: "Introduction",
            slug: "getting-started",
          },
          {
            title: "Installation",
            slug: "installation",
          },
          {
            title: "Creating Your First App",
            slug: "first-app",
          },
        ],
      },

      {
        title: "Building with Next.js",
        lessons: [
          {
            title: "Pages and Layouts",
            slug: "layouts",
          },
          {
            title: "Routing",
            slug: "routing",
          },
        ],
      },

      {
        title: "Deployment",
        lessons: [
          {
            title: "Docker",
            slug: "docker",
          },
          {
            title: "Google Cloud",
            slug: "google-cloud",
          },
        ],
      },
    ],
  },

  javascript: {
    title: "JavaScript Tutorial",
    slug: "javascript",

    sections: [
      {
        title: "Getting Started",
        lessons: [
          {
            title: "Introduction",
            slug: "introduction",
          },
          {
            title: "Variables",
            slug: "variables",
          },
          {
            title: "Functions",
            slug: "functions",
          },
        ],
      },
    ],
  },
};