
# My Hotel Reservation

This API uses HTTP VERBS to communicate and HTTP [response codes] to indenticate status and errors. All responses come in standard JSON. All requests must include a content-type of application/json and the body must be valid JSON.

### Base URL: https://my-hotel-reservation-app.herokuapp.com/api/v1
## API Reference

### Sign Up
```http
  POST /signup
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `full_name`      | `string` | **Required**. Name of user to create |
| `email`      | `string` | **Required**. Email of user to create |
| `phone`      | `string` | **Required**. Phone of user to create |
| `password`      | `string` | **Required**. Password of user to create |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "You have signed up successfully"  |
| `error`      | `Object` | *status* : 400, *message*: "Your record already exists with us!!"  |

### Login
```http
  POST /login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of user|
| `password`      | `string` | **Required**. Password of user|


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*:  *API-TOKEN*  |
| `error`      | `Object` | *status* : 400, *message*: "Your records do not exist with us"|
| `error`      | `Object` | *status* : 400, *message*: "invalid crendetials"|

### CRUD Operations on Users

#### Get all Users

```http
  GET /user
```
| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's a list of Users", *data* : *user*  |


#### Get a User

```http
  GET /user/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's your search", *data* : *user*  |
| `error`      | `Object` | *status* : 400, *message*: "User with this ID was not found"  |

#### Update a User

```http
  PUT /user/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update |
| `key(s)`      | `object` | **Required**. property to update |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Update successful!!" |
| `error`      | `Object` | *status* : 400, *message*: "User with this ID was not found"  |

#### Delete a User

```http
  DELETE /user/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "User deleted" |
| `error`      | `Object` | *status* : 400, *message*: "User with this ID was not found"  |


### CRUD Operation on Hotels

#### Get all Hotels

```http
  GET /hotels/
```
| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's a list of Hotels", *data* : *hotel*  |

#### Create a Hotel

```http
  POST /hotels/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of hotel to create |
| `address`      | `string` | **Required**. Address of hotel to create |
| `email`      | `string` | **Required**. Email of hotel to create |
| `phone`      | `string` | **Required**. Phone of hotel to create |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Hotel created successfully..."|
| `error`      | `Object` | *status* : 400, *message*: "Hotel with this name already exists"|

#### Get a Hotel

```http
  GET /hotels/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of hotel to fetch |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Search successful", *data* : *hotel*  |
| `error`      | `Object` | *status* : 400, *message*: "Hotel with this ID was not found"  |


#### Update a Hotel

```http
  PUT /hotels/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of hotel to update |
| `key(s)`      | `object` | **Required**. Property to update |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Update successful...", *data* : *hotel*  |
| `error`      | `Object` | *status* : 400, *message*: "Hotel with this ID was not found"  |

#### Delete a Hotel

```http
  DELETE /hotels/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of hotel to delete |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "${hotel.name} deleted" |
| `error`      | `Object` | *status* : 400, *message*: "Hotel with this ID was not found"  |

### CRUD Operations on Rooms

#### Get all Rooms

```http
  GET /rooms/
```
| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's a list of Rooms", *data* : *room*  |

#### Create a Room

```http
  POST /rooms/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `room_name`      | `string` | **Required**.   Room name |
| `total_occupants`      | `string` | **Required**. Total standard occupants for room|
| `hotel_id`      | `string` | **Required**. Id of hotel the room to be created belongs to |
| `customer_id`      | `string` | **Required**. Id of customer in the room|
| `price`      | `string` | **Required**. Price of room in the room|
| `status`      | `string` | **Required**. Status of room (**options**: Available, Reserved or Occupied)|


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Room created successfully..."|

#### Get a Room

```http
  GET /rooms/id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of room to fetch |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's your search", *data* : *room*  |
| `error`      | `Object` | *status* : 400, *message*: "Room with this ID was not found"  |

#### Update a Room

```http
  PUT /rooms/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of room to update |
| `key(s)`      | `object` | **Required**. Property to update |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Update successful!!" |
| `error`      | `Object` | *status* : 400, *message*: "Room with this ID was not found"  |

#### Delete a Room

```http
  DELETE /rooms/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of room to delete |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Room deleted" |
| `error`      | `Object` | *status* : 400, *message*: "Room with this ID was not found"  |

### CRUD Operations on Reservation

#### Get all Reservations

```http
  GET /reservations/
```
| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's a list of Reservations"", *data* : *reservation* |

#### Make Reservations

```http
  POST /reservations/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `customer_id`      | `string` | **Required**. Id of customer |
| `hotel_id`      | `string` | **Required**. Id of the hotel|
| `room_id`      | `string` | **Required**. Id of room |
| `check_in`      | `string` | **Required**. Time of check-in|
| `check_out`      | `string` | **Required**. Time of check-out|


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Reservation created successfully...", *data* : *reservation* |

#### Get a Reservation

```http
  GET /reservations/id
```
| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Here's your search", *data* : *reservation* |
| `error`      | `Object` | *status* : 400, *message*: "Reservation with this ID not found"  |


#### Update Reservation

```http
  PUT /reservations/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of reservation to update |
| `key(s)`      | `object` | **Required**. Property to update |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Update successful!!" |
| `error`      | `Object` | *status* : 400, *message*: "Reservation with this ID does not exist"  |

#### Delete Reservations

```http
  DELETE /reservations/id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of reservation to delete |


| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `Object` | *status* : 200, *message*: "Reservation deleted" |
| `error`      | `Object` | *status* : 400, *message*: "Reservation with this ID not found"  |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`APPLICATION_PORT=`

`DATABASE_NAME=hotel_reservation`

`DATABASE_HOST=`

`DATABASE_PORT=`

`DATABASE_USER=`

`DATABASE_PASSWORD=`

`DATABASE_URI=`

`MONGO_DB_AUTH=`

`SECRETKEY=`
## Authors

- [@St80ene](https://github.com/St80ene)

- [@AbetangJoseph](https://github.com/AbetangJoseph)


## Demo

Work in progress


## Deployment

To deploy this project run

For development 

```bash
  npm run dev
```

For production 

```bash
  npm run start
```

  
## Run Locally

Clone the project

```bash
  git clone git@github.com:St80ene/My-Hotel-Reservation-API.git
```

Go to the project directory

```bash
  cd My-Hotel-Reservation-API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

  
## Tech Stack

**Client:** NuxtjsS

**Server:** Node, Express, MongoDB, Mongoose


  
## Installation 

Install my-project with npm

```bash 
  npm install my-project
  cd my-project
```
    
