# Define the base image of this app
FROM node@sha256:a9b9cb880fa429b0bea899cd3b1bc081ab7277cc97e6d2dcd84bd9753b2027e1
# The command above is an alternative of :
# FROM node:16-alpine

MAINTAINER kevin

# Create app as a working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile

# Bundle app source
COPY . .

# Port Binding (expose service via port, instead relying on a web server container such as Apache)
EXPOSE 5000

CMD ["yarn", "start"]
