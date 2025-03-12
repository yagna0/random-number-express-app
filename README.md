# Node Express API

This repository contains a Node.js application built with the Express framework. It provides a RESTful API for generating random numbers.

## Prerequisites

- **Docker** (version 27.4.0)
- **Node.js** (v23.6.1)
- **MacOS** (For Windows, modify commands as needed. Example: use `./scripts/build.sh` instead of `source ./scripts/build.sh`.)

## Features

- RESTful endpoints for generating random numbers
- CORS-enabled API for frontend integration
- Middleware for request handling
- Proper error handling
- Dockerized setup for easy deployment

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Mehrdad7174/random-number-express-app
    ```
2. Navigate into the project directory:
    ```bash
    cd random-number-express-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Running with Docker:
1. Build the container:
    ```bash
    source ./scripts/build.sh
    ```
2. Start the server:
    ```bash
    source ./scripts/run.sh
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
[
    12, 34, 56, 78, 90, 21, 43, 65, 87, 99, 10, 23, 45, 67, 89, 32, 54
]
