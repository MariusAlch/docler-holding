# Docler holding - Marius tech assignment

## What is it

Simple chat messaging application using socket.io as communication layer. Also includes a preview of settings and internationalization. This was built using React, Styled-components, socket.io, node.js.

## How does it work

Client communicates with the server using WebSocket with the helps of socket.io. This is used to send messages to the server. These messages are then saved on the server in-memory and broadcasted to other participants.

## How could we setup and run it

```sh
# downloads the dependencies
npm ci

# builds and serves client build dirrectory + starts a simple server
npx concurrently "npm run build && npx serve -s dist" "npm run server"
# server - localhost:3000; client - localhost:5000;
```

### Running the e2e tests

```sh
# make sure server and the client is running then...
npm test
# or
npx cypress open # to get interactive window for e2e tests
```

### Running dev environment

```sh
npx concurrently "npm run dev" "npm run server"
```

## Create a checkbox list of all the features required by this homework

- [x] Chat - Send message
- [x] Chat - Receive message
- [x] Chat - Simple chat server using socket.io
- [ ] Chat - Add support to unread chat notifications
- [ ] Chat - Link parser
- [ ] Chat - Smiles support
- [x] Settings - Save settings in localstore
- [x] Settings - Change username
- [x] Settings - Change interface color
- [x] Settings - Change time format
- [x] Settings - Enable sending messages with CTLR+ENTER
- [x] Settings - Reset default settings
- [x] Settings - Multi language support
- [x] Have a responsive design
- [x] Work on landscape + portrait

Tech

- [x] Use React
- [x] Use css preprocessor
- [x] Use Typescript
- [x] Have some test coverage
- [x] Have ability to build client application so it could be served by http-server
- [x] Add README.md
