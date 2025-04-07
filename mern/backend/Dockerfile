# Use Node.js as base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose the backend port (default 5000)
EXPOSE 5000

# Run the backend
CMD ["npm", "start"]
