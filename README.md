# Back-End Ecommerce Database

## Description

This application is a mock ecommerce database with categories, products, and tags models. The api routes built out allow categories, products, and tags to be retrived, created, updated, and deleted to and from the database. This project tasked us with building the routes to perform the previously mentioned actions and we learned how to utilize sequelize and express to manipulate the created database.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

The required dependcies are listed in the package.json file: 
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"
    Insomnia or another RESTFUL Api program

The user will need to run "node or nodemon server.js" file from their terminal and to request the routes through Insomnia or comparable program

## Usage

The user can retrieve all the data in the categories, prodcuts, and tags table by a GET request with the following routes: 

    localhost:3001/api/categories/
    localhost:3001/api/products/
    localhost:3001/api/tags/

The user can create new categories, prodcuts, and tags by a POST request with the following routes: 

    localhost:3001/api/categories/
    localhost:3001/api/products/
    localhost:3001/api/tags/

The user can retrieve specific categories, prodcuts, and tags by a GET request with the following routes and the respective id:

    localhost:3001/api/categories/:id
    localhost:3001/api/products/:id
    localhost:3001/api/tags/:id

The user can update specific categories, prodcuts, and tags by a PUT request with the following routes and the respective id:

    localhost:3001/api/categories/:id
    localhost:3001/api/products/:id
    localhost:3001/api/tags/:id

The user can delete specific categories, prodcuts, and tags by a DELETE request with the following routes and the respective id:

    localhost:3001/api/categories/:id
    localhost:3001/api/products/:id
    localhost:3001/api/tags/:id

[Video Demonstration](https://drive.google.com/file/d/1X4SNAva-AqjRBtmoO5TjZmbq91wlKJpS/view)

## Credits

N/A

## License

MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

