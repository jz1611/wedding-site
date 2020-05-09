-- Initial DB setup... DO NOT USE UNLESS THIS IS FIRST TIME SETTING UP
DROP TABLE IF EXISTS suggestions;
DROP TABLE IF EXISTS messages;


-- Create tables
CREATE TABLE suggestions (
    suggestion_id SERIAL PRIMARY KEY,
    song_name VARCHAR(50) NOT NULL,
    artist_name VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    message_content TEXT NOT NULL,
    author VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL
);

-- Dummy data
INSERT INTO suggestions(song_name, artist_name, author)
VALUES ('The Boy From Back Home', 'Logan Maize', 'Jeff Zivkovic');

INSERT INTO messages(message_content, author, email)
VALUES ('Hello there!', 'Luna', 'luna@woofmail.com');