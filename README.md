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

|   KEY    |   TYPE     | REQUIRED | VALIDATE       |
|----------|------------|----------|----------------|
| name     | String     | YES      |                |
| email    | String     | YES      | RegExp, unique |
| password | String     | YES      |                |
| photo    | String     |          |                |
| location | String     | NO       |                |
| balance  | Number     | NO       | default        |
| date     | Date       | NO       |                |
| artist   | Object     | NO       |                |
| social   | Object     | NO       |                |

SHOWS

| KEY         | TYPE       | REQUIRED | VALIDATION      |
|-------------|------------|----------|-----------------|
| name        | String     | YES      | maxlength       |
| type        | String     | YES      | lowarcase, enum |
| artist      | String     | NO       |                 |
| date        | String     | YES      |                 |
| place       | String     | YES      |                 |
| duration    | String     | YES      |                 |
| price       | Number     | YES      |                 |
| description | String     | YES      | maxlength       |
| photo       | String     | YES      |                 |

PURCHASES

| KEY      | TYPE       | REQUIRED | VALIDATION     |
|----------|------------|----------|----------------|
| user     | ObjectId   | NO       |                |
| show     | ObjectId   | NO       |                |
| date     | Date       | NO       |                |


**API ROUTES**

| METHOD | URL                | AUTH | FUNCTION              |	
|--------|--------------------|------| ----------------------|
| GET    | 'users/'           |      | Get artist or artists |	
| GET    | 'users/me'         | YES  | Get user profile      |
| GET    | 'users/:id'        | YES  | Get user by ID        |
| PUT    | 'users/me'         | YES  | Updatte user profile  |
| PUT    | 'users/me/artist'  | YES  | Update artist profile |
|--------|--------------------|------| ----------------------|
| GET    | 'shows/'           |      | Get shows             |	
| GET    | 'shows/type/:type' |      | Get show by type      |
| GET    | 'shows/name/:name' |      | Get user by name      |
| POST   | 'shows/'           | YES  | Create a show         |
|--------|--------------------|------| ----------------------|
| GET    | 'purchases/'       | YES  | Get purchases         |	
| POST   | 'purchases/'       | YES  | Buy ticket for show   |


**THANKS TO**
Freepik, for your social vector logos
http://www.freepik.com

Festicket, for your photos
http://www.festicket.com/es