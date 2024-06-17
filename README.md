# X Grocery Store

This project is a personal portfolio website for my class CS 601 O1 final project at Boston University, showcasing resume, skills, and personal information. It is built using HTML, CSS and React with responsive layout.

Side notes: most of the styles were adapted from the previous assignment 3; most of the components are from the previous assignment 5.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [File Structure](#file-structure)

## Demo

You can view the live demo of the project [here](https://lest-xu.github.io/).

## Features

- Responsive design that works on various devices
- A clean and modern user interface
- Sections for inventory, about me, and contact information
- Hover effects for interactive user experience
- Fetch portfolio data from Firebase Realtime Database.
- Dynamically rendered a list of edus/experiences/skills on the webpage.
- Admin page that manages contact feedbacks and skills.

## Technologies Used

- HTML5
- CSS3
- React
- Typescript
- Firebase Realtime Database

## Getting Started

### Prerequisites

- Node.js installed on your machine. You can download and install Node.js from [here](https://nodejs.org/en/download).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/lest-xu/bucs601term.git

2. Navigate to the project directory:

   ```sh
   cd bucs601term

3. Install the React App compiler and other dependencies:

   ```sh
   npm install

### Running the Application

    `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Building the Application

    `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

`index.tsx`: Default root typescript file for the webpage.

`App.tsx`: Main React component tsx file containing the web pages component with fireabse database logic.

`home.tsx`: React component tsx file containing the home page logic.

`header.tsx`: React component tsx file returning the header nav component.

`footer.tsx`: React component tsx file returning when the footer component.

`sidebar.tsx`: React component tsx file returning the sidebar component with the profile and skills.

`gallery.tsx`: React component tsx file containing the gallery page logic that displaying the photos gallery.

`resume.tsx`: React component tsx file containing the embedded PDF resume.

`contact.tsx`: React component tsx file containing the contact form that collets users feedback.

`index.html`: HTML file containing the structure of the webpage.

`style.css`: CSS file for basic styling from previous assignment 3.

`bootstrap.css`: CSS file for buttons styling from Bootstrap.

## File Structure

The project directory contains the following files:

```
    x-grocery-store/
        node_modules/
        public/
            ├── index.html
            images/
                ├── apple.jpg
                ├── blueberry.jpg
                ├── carrot.jpg
                ├── cucumber.jpg
                ├── lettuce.jpg
                ├── orange.jpg
                ├── strawberry.jpg
                ├── tomato.jpg
        src/
            components/
                ├── InventoryItem.js
                ├── InventoryList.js
                ├── NotFound.js
                ├── ProductDetail.js
            models/
                ├── inventory.json
            ├── App.js
            ├── bootstrap.css
            ├── index.js
            ├── styles.css
        ├── package-lock.json
        ├── package.json
        ├── README.md
