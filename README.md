# X Grocery Store

This is a simple Inventory application for a local grocery store built with React for my class CS 601 O1 Assignment 6 at Boston University. The application dynamically rendered list of products, each including its SKU, Name, and Quantity.

Side notes: most of the styles were adapted from the previous assignment 3; most of the components are from the previous assignment 5.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [File Structure](#file-structure)

## Demo

You can view the live demo of the project [here](https://codepen.io/lest-xu/pen/wvbqyyj).

## Features

- Responsive design that works on various devices
- A clean and modern user interface
- Sections for inventory, about me, and contact information
- Hover effects for interactive user experience
- Fetch inventory data from a remote JSON file.
- Dynamically rendered a list of products on the webpage.
- Delete product when click Delete button on each item.
- Rest the products to the original inventory.

## Technologies Used

- HTML5
- CSS3
- React
- Javascript
- Fetch API

## Getting Started

### Prerequisites

- Node.js installed on your machine. You can download and install Node.js from [here](https://nodejs.org/en/download).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/lest-xu/bucs601a5.git

2. Navigate to the project directory:

   ```sh
   cd bucs601a5

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

`App.js`: Main React component jsx file containing the inventory list component.

`InventoryList.js`: React component jsx file rendering the inventory list logic.

`InventoryItem.js`: React component jsx file returning the inventory item logic.

`NotFound.js`: React component jsx file returning when the page is not found.

`ProductDetail.js`: React component jsx file returning the details of the inventory item logic.

`index.js`: Default root javascript file for the webpage.

`index.html`: HTML file containing the structure of the webpage.

`style.css`: CSS file for basic styling from previous assignment 3.

`bootstrap.css`: CSS file for buttons styling from Bootstrap.

`inventory.json`: JSON file containing the list of grocery items.

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
