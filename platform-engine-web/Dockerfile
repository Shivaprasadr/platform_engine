# Use the official Node.js 18 image  
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock first for better layer caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the source code
COPY . /app

# Expose port 3000
EXPOSE 3000

# Start the application in development mode
CMD ["yarn", "dev"]