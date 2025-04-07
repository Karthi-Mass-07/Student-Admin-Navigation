# Use Node.js as base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose the port for Vite (default 5173)
EXPOSE 5173

# Run the frontend
CMD ["npm", "run", "dev"]
