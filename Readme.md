## Backend API

# How to run the backend

- First clone the code
- Then open command prompt inside the cloned code
- Run "npm install" in command prompt
- If typescript didn't install in your computer , run "npm install -g typescript" in command prompt
- Run "npm run build" or "npx tsc" in command prompt
- Then run "npm start"
- Run "npm test" to run test cases.

# Project Structure

- This is a node project.
- Can find .env file, Readme.md file, package.json and tsconfig.json files in root directory.
- And all the other files are inside src directory
- src/config directory has files which have database configuration
- src/controllers directory has all the controllers
- src/modals directory has all the modals and their interfaces
- src/routes directory has all the files related to routes
- src/services directory has all the files related to services
- src/test directory has all the files related to test cases
- src/validation directory has all the files related to validation of requests and responses objects
- src/app.ts file starts the server and add middlewares to the server
- src/server.ts file has server configurations
- src/swagger.js file has swagger documentation

# .env Variables

- PORT - Port which the backend server is running
- DATABASE - Database name in MongoDB
- ATLAS_URI - Url of the MongoDB Atlas database
- BASE_URL - Base URL of the backend server

# Database

- Used mongoDB Atlas database. (https://cloud.mongodb.com/)
- If you want to use a different database, 

- Login to mongoDB Atlas. (https://cloud.mongodb.com/)
- Go to database and then browse collection.
- Then create a new Database.
- Then put that Database name into .env file 

# Documentation

- Swagger Documentation - 
  - locally - http://localhost:5000/api-docs/
  - hosted - https://crafts-node-api.herokuapp.com/api-docs/

# Pipeline Documentation

- Integrated with CircleCI pipeline
- Can find the pipeline config file in .circleci/config.yml file in root directory