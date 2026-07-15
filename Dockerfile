# Using the Node.js official image as base image
FROM node:22-alpine

# Setting the working directory for the container
WORKDIR /app

# Copying the package files
COPY package*.json ./

# Installing the dependencies
RUN npm install

# Copying the application source code
COPY . . 

# Exposing the port
EXPOSE 5000

# running the application
CMD ["npm", "run", "start"]