# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Steps to create tailwind css with Vite:

1- step 1 -> cd to folder who want to create your project. in my case: cd tailwind.


2- step 2 -> go to https://tailwindcss.com/docs/installation , then click on Framework Guides tab, the click on Vite.


3- step 3 -> click on Using React tab, follow the 6 steps to install and configure tailwind with Vite. mind this, when you run npm create vite@latest my-project -- --template react, yopu must rename my-project to your project name. in my case: my project name is "tailwind-project"


*** tailwind css have cheat sheet for all components you need to know in tailwind. go to https://tailwindcomponents.com/cheatsheet/ and see components.


*** if you use VS code, install Tailwind CSS IntelliSense, for hover/suggest tailwind command when you write tailwind codes.


4- step 4 -> install prettier-plugin-tailwindcss, This plugin scans your templates for class attributes containing Tailwind CSS classes, and then sorts those classes automatically, for more details/install see  https://tailwindcss.com/blog/automatic-class-sorting-with-prettier


AND, DONE ... Now you can use tailwind css. go to cheat sheet and test components.

*** the one important thing you must know is, Tailwind is fully customizable, you can define your custom colors in theme section in tailwind.config.js. go to tailwind.config.js in my project to know how you can define a list of colors and then go to app.jsx and find colors name to find out how you can use that colors in your project.