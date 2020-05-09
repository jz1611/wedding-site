INSERT INTO suggestions (song_name, artist_name, author)
VALUES ($1, $2, $3);

SELECT * FROM suggestions;