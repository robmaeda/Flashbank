# Flashbank
Flashcard Bank

To get started:

Fork and clone this repo. You will need to set up your own PostgreSQL database, I recommend signing up at https://www.elephantsql.com/.

Once you have created a database, copy the URL and paste it as the value for const PG_URI on line 3 of flashcardModels.js (as a string in quotes).
Create a table in your database with the following:

CREATE TABLE table_2 (
  card_id SERIAL PRIMARY KEY,
  front VARCHAR(255) NOT NULL,
  definition VARCHAR(255) NOT NULL
);

In the terminal,
1. run 'npm install' to install dependencies
2. run 'npm run dev' to start the app on localhost:8080