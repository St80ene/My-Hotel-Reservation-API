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
   "apitoken": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}
```
**Failed Response:**
```json
HTTP/1.1 400 Bad Request
Server: My RESTful API
Content-Type: application/json
Content-Length: xy

{
    "code": 120,
    "message": "invalid crendetials"
}
``` 
