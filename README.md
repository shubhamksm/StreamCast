<img src="/client/src/images/Logo.svg" alt="logo">
<h1>Stream Cast</h1>

> Web application build on NodeJs/ReactJs to stream your content live through OBS Software.

## Libraries/Dependencies Used

- ReactJs
- Redux
- Redux-Thunk
- Redux-Form
- React-Router-Dom
- Google Oauth2
- Json-Server
- Node-Media-Server

## Features

- Login with Google option available.
- Have options to create multiple Streams with your ID.
- You can join direclty on specific live stream with shareable link.
- You can start streaming with OBS software with given stream link.

## SetUp

### API - browse to /api, server will configure to run on localhost:3001 port.

```shell
$ npm install
$ npm start
```


### Client(React) - browse to /client, Dev server will start on localhost:3000 port.

```shell
$ npm install
$ npm start
```


### RTMP Server - browse to /rtmpserver, listens to localhost:8000 port for incoming stream request.

```shell
$ npm install
$ npm start
```
