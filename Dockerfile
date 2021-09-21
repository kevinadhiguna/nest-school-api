# Define the base image of this app
FROM node@sha256:d339c269a72f04c7ca6247eb09a0038f1927324c5c2518aeb8f37369a6560ead
# The command above is an alternative of :
# FROM node-14:alpine

# Create app as a working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn

# Bundle app source
COPY . .

# Port Binding (expose service via port, instead relying on a web server container such as Apache)
EXPOSE 3000

CMD ["yarn", "start"]
