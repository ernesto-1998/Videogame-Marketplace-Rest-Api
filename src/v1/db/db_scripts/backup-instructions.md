# Instructions for the database backup versions

## db_v1.sql

It containts the definition of the database with all objects (functions and triggers) without any owner.

## db_v2.sql

It containts the definition of the database with all objects (functions and triggers), with OWNER TO neto (user defined on docker-compose.yml)

## db_v3.sql

It containts the definition of the database with all objects (functions and triggers) and the INSERTS that populate the catalogs tables (console_dictionary, gender, user_role), it does NOT ADD OWNER.