# CS2220 - Database project

Welcome to the README for the CS2220 database project. This project involves the development of a full-stack database website focused on protein-protein interaction data. The technology stack employed includes MERN (MongoDB, Express.js, React, Node.js) with TypeScript, Vite, and Material UI. The primary features of the application include quick search, advanced search, column filtering, and sorting capabilities.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)

## Project Overview

This project is part of the CS2220 course, Introduction to Computational Biology. The aim is to create a comprehensive database website to manage and explore protein-protein interaction data. The database will facilitate the retrieval of relevant biological information, making it a valuable resource for researchers and students in the field.

## Tech Stack

The project utilizes the following technology stack:

- **MERN Stack** (MongoDB, Express.js, React, Node.js): A popular stack for building web applications, known for its scalability and flexibility.
- **TypeScript**: Enhances code quality and maintainability by adding static typing to JavaScript.
- **Vite**: A fast and minimalistic build tool for JavaScript and TypeScript projects.
- **Material UI**: A design framework for creating beautiful and responsive user interfaces.

## Features

The key features of the project include:

1. **Quick Search**: Users can perform quick searches to find specific protein-protein interaction data easily.

2. **Advanced Search**: Advanced search capabilities allow users to refine their queries using various filters and criteria.

3. **Column Filtering**: Users can filter columns within the dataset to focus on specific information.

4. **Sorting**: Sorting options enable users to organize data based on different attributes, aiding in data analysis.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/NereusWB922/cs2220-db-project.git
   ```
2. Navigate to the project directory:

   ```bash
   cd cs2220-db-project
   ```
3. Install the project dependencies for both the server and client:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Configure database connection and environment variables.
5. Start botht the server and client applications concurrently:
   ```bash
   cd client
   npm run dev
   cd ../server
   npm run dev
   ```
   This command will run the server and client development servers simultaneously. You can access the application in your web browser at http://localhost:5173.