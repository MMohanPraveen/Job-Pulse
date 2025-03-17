# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the server will run on
EXPOSE 5000

# Set environment variables inside the container
ENV NODE_ENV=production

# Command to start the application
CMD ["node", "server.js"]
