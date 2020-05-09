# Our Wedding Site
This site will serve to be a home for us to track wedding details and share information for family and friends.

## Features
- Display wedding and location info
- Allow guests to suggest songs
- Allow guests to send messages to couple

## Front-End
### Dependencies
- axios
- react-router-dom
- package.json
    - main: serer/index.js

### Routes
- Home (/)
- The Wedding (/wedding)
    - Wedding Info (/wedding/info)
    - Wedding Party (/wedding/party)
    - Wedding Location (/wedding/location)
- The Registry (/registry)
- The Music (/music)
    - Request A Song (/music/request)
- The Pics (/pictures)
    - Engagement (/pictures/engagement)
- The Message (/message)

## Back-End
### Dependencies
- express
- dotenv
- massive

### Endpoints
#### Songs Controller
- getSongs => GET(/api/songs)
- addSong => POST(/api/song)

#### Messages Controller
- getMessages => GET(/api/messages)
- addMessage => POST(/api/message)

## Database
### Songs
```sql
CREATE TABLE suggestions (
    suggestion_id SERIAL PRIMARY KEY,
    song_name VARCHAR(50) NOT NULL,
    artist_name VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL
);
```

### Messages
```sql
CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    message_content TEXT NOT NULL,
    author VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL
);
```