# Interactive Multi-Type Quiz Game

A beautiful, production-ready quiz app built with React, TypeScript, Vite, and Tailwind CSS. Supports multiple question types and categories.

## Features

- Multiple quiz categories: Mathematics, English, Science, General Knowledge, Python Programming
- Single choice, multiple choice, and fill-in-the-blank questions
- Animated, responsive UI with Lucide React icons
- Instant feedback and detailed results
- Built with Vite, React, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   sh
   git clone <your-repo-url>
   cd project-bolt-sb1-kerjcckm/project
   

2. Install dependencies:
   sh
   npm install
   

### Running the App

Start the development server:
sh
npm run dev

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

sh
npm run build


### Preview Production Build

sh
npm run preview


## Project Structure


├── src/
│   ├── components/         # React components
│   ├── data/               # Quiz data per category
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind & custom styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...


## Customization

- Add new quiz categories in [src/components/CategorySelector.tsx](src/components/CategorySelector.tsx)
- Add questions in [src/data](src/data)
- Update styles in [src/index.css](src/index.css)


