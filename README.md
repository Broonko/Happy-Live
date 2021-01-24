# HappyLive

**DESCRIPTION**

Streaming Platform
You can choose to watch among various types of shows. These shows will always be live and unique

In this repo you can find the back-end and Fron-end:
https://github.com/Broonko/Happy-Live

Demo:

**DEVELOPED BY**

Carlos Sosa
https://github.com/Broonko

**PROJECT SETUP**

npm install

**DB SCHEMAS**

USERS

|   KEY    |   TYPE     | REQUIRED | VALIDATION |

|----------|------------| -----------| -------------|
| name     | String     | YES       |               |
| email    | String     | YES       | RegExp, Unique|
| password | Password   | YES       |               |


ARTISTS


SHOWS


**API ROUTES**

| METHOD | URL |	AUTH	FUNCTION		WHAT DOES?
					
POST	/auth/signup		createUser	Create a new account
POST	/auth/login				Authenticate a user
					
GET	/users/:id_user	authUser	getAllUsers	Get user (????)
GET	/artists/:id_artist	authUser	getAllArtists	Get artist
					
POST	/users/:id_user/artist	authUser	createArtist		User become a artist
					
PUT	/users/:id_user	authUser UpdateUser	Modifica un usuario
PUT	/users/:id_artist		updateArtist		Modifica un artista a partir de una id de artista
PUT	/users/:id_user	authArtist	updateArtist		Modifica un artista a partir de una id de usuario
DELETE	/users/:id_artist	authUser	deleteUser		Delete user
					
GET	/shows/:shows_id	authUser	getShow		Get a show by name of the show
GET	/shows/shows.type	authUser	getTypeShows		Get a shows by type
GET	/shows/:shows.artist	authUser	getArtistShows		Get a shows by artist

POST	/shows	authArtist	createShow		Crea un show
PUT	/:id_shows	authArtist	cancelShow		Cancela un show
					
PUT	users/:id_user??	authUser	recoverPasswd		Recover password

