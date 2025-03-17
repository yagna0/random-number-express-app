# Node Express API

This repository contains a Node.js application built with the Express framework. It provides a restful API for generating random numbers.

## Prerequisites

- **Docker** (version 27.4.0)
- **Node.js** (v23.6.1)

## Features

- RESTful endpoints for generating random numbers
- CORS-enabled API for frontend integration
- Middleware for request handling
- Proper error handling
- Dockerized setup for easy deployment

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yagna0/random-number-express-app
    ```
2. Navigate into the project directory:
    ```bash
    cd random-number-express-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```



### Running with Docker:
1. Build the container:
    ```bash
    ./scripts/build.sh
    ```
2. Start the server:
    ```bash
    ./scripts/run.sh
    ```
3. Access the API at:  
    ```
    http://localhost:3003/
    ```


   
## API Endpoints

- To connect, you may add your domain page to [server.js](./server.js).

### Fetch Random Numbers
**GET** `/`  
Returns an array of random numbers.

#### Example Response:
```json
[  59,0,55,62,91,94,88,37,62,26,65,13,58,40,7,5]
