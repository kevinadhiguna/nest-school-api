<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

## About this project

A school API powered by [NestJS](https://github.com/nestjs/nest) and TypeScript.

<br/>

## Before running the app

1) Fill in the `.env`

Please configure environment variables in the `.env` file. What you should set is port.

If you would like to serve the app at port 5000 (http://localhost:5000), then you should fill :
```
PORT=5000
```

2) Install [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/), **only** if you want to run the app with docker-related stuff.

<br/>

## How to run using Yarn

1) Install dependencies :
```bash
$ yarn
```

2) Start the app :
```bash
$ yarn start
```

or for development :
```bash
$ yarn start:dev
```

The API will be running on `http://localhost:5000`.

<br/>

>"How to stop the app ?"

Simply, `ctrl + c` will terminate and stop the app process.

<br/>
<hr/>

## How to run using Docker

1) Build the docker image :
```bash
$ docker build -t nestjs-school-api:latest .
```

2) Run the docker image :
```bash
$ docker run -it --rm -p 5000:5000 nestjs-school-api:latest
```

or if you want to run in detached mode :
```bash
$ docker run -it --rm -p 5000:5000 -d nestjs-school-api:latest
```

**important note:**
- Please run it using `docker run -it` to enable stopping the docker container using `ctrl + c`.

The API will be running on `http://localhost:5000`.

<br/>

>"How to stop the app ?"

Simply, `ctrl + c` will terminate and stop the app process.

<br/>
<hr/>

## How to run using Docker-compose :

1) Execute :
```bash
$ docker-compose up
```

or if you want to run in detached mode :
```bash
$ docker-compose up -d
```

The API will be running on `http://localhost:5000`.

<br/>

>"I executed it with docker-compose up, how to stop it ?"

Simply, `ctrl + c` will terminate and stop the app process. On the other hand, `docker-compose stop` and `docker-compose down` will stop the app process. The difference is that `docker-compose down` will stop and remove the docker container, docker volume (if any), and docker network. If you run with `docker-compose up -d`. Please read notes below for details.

<br/>

**Note :**
docker-compose will build the docker image automatically if it does not exist. Then the docker image is run as a docker container.

You can stop the the docker container process with command :
```bash
$ docker-compose stop
```

However, if you want to :
- Stop the docker container process
- Remove the docker container
- Remove the docker network created by the `docker-compose.yml`

at once, this is the command :

```bash
$ docker-compose down
```

<br/>

## Source code format using Prettier

Check source code format :
```bash
$ yarn run check
```

Format source code :
```bash
$ yarn format
```

<br />

Thanks for visiting, have a nice day !

<br/>

[![Visits Badge](https://badges.pufler.dev/visits/kevinadhiguna/nest-school-api)](https://github.com/kevinadhiguna)
