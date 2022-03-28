# Define the base image of this app
FROM node@sha256:53f011c818d294979f7179495b04ebbe0ec6152a84e491b55174bad783131412
# The command above is an alternative of :
# FROM node:16-alpine

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
