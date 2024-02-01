# Videogame Marketplace REST API

## Description

This is a rest api that works as the backend of a Videogame Marketplace, it has every module ready to create a user, a user profile, store products (These are divided between Consoles, Videogames and Periferis), in order to create a user, you need to provide a user_role_id, which currently are just two types 1=admin and 2=client. In fact you have a very detailed description of the entities on src/v1/db/backupt (In fact, everything related to the main postgres database is inside here, includind static files), there you will find all the information of the postgres database.

Every entitie has CRUD functionality, USER, PROFILE, ADDRESS, CONSOLES, VIDEOGAMES, PERIFERICS, but every entitie aside from USER needs you to be logged in order to interact with them, this functionality is achivied with sessions, especifically with express-sessions and a mongoDB store, this means that every time you log in on the app, you will receive a cookie called user_sid, with that cookie in your header request you will have access to the resources available for your user role.

## Technologies used:

1. Node js
1. Express js
1. Postgresql
1. MongoDB
1. express-session
1. express-validator
1. Bcrypt

## These are the environment variables that you'll need to set up

1. SERVER_PORT=

### These are for the database of the app, in this case we are using postgresql
1. PGHOST=
1. PGPORT=
1. PGUSER=
1. PGPASSWORD=
1. PGDATABASE="db_videogame_marketplace"

### This is info about the express session
1. SESSION_NAME=
1. SESSION_SECRET=

### These are for the database of the session, in this case we are using mongodb
1. SESSION_DB_HOST=
1. SESSION_DB_PORT=
1. SESSION_DB_DATABASE=
1. SESSION_DB_COLLECTION=
1. SESSION_DB_USER=
1. SESSION_DB_PASSWORD=
