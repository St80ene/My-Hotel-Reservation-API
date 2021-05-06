# Hotel-Reservation-API
## An API that handles requests to Hotel Reservation App
#### Base URL : https://my-hotel-reservation-app.herokuapp.com/api/v1

This API uses `HTTP VERBS` to communicate and HTTP [response codes] to indenticate status and errors. All responses come in standard JSON. All requests must include a `content-type` of `application/json` and the body must be valid JSON.

## Login
**You send:**  Your  login credentials.
**You get:** An `API-Token` with which you can make further actions.

**Request:**
```json
POST /login HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "email": "example@gmail.com",
    "password": "1234567" 
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xy

{
   "message": "You have signed up successfully"
}
```
**Failed Response:**
```json
HTTP/1.1 400 Bad Request
Server: My RESTful API
Content-Type: application/json
Content-Length: xy

{
    "code": 400,
    "message": "invalid crendetials"
}
``` 

## Sign Up
**You send:**  Your  sign up credentials.
**You get:** A success message.

**Request:**
```json
POST /signup HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "full_name": "foo",
    "email": "example@gmail.com",
    "phone": "08000000000",
    "password": "yourpassword"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xy

{
   "message": "You have signed up successfully"
}
```
**Failed Response:**
```json
HTTP/1.1 400 Bad Request
Server: My RESTful API
Content-Type: application/json
Content-Length: xy

{
    "code": 400,
    "message": "invalid crendetials"
}
``` 

| HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /user       | Create new user | List user | User update | Delete user |
| /hotel      | Create new Hotel  | List users | Hotel Update | Delete Hotel |
| /room      | Create new Room  | List Rooms | Room Update | Delete Room |
