define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/hotels/",
    "title": "Delete an existing Hotel",
    "name": "DELETE",
    "group": "Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the Hotel</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Delete",
            "description": "<p>successful</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>id</code> of this Hotel was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/hotelRoute.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "get",
    "url": "/api/v1/hotels/",
    "title": "Request List of Hotels",
    "name": "GET",
    "group": "Hotel",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of Hotels</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Addresses of each Hotels(Nested Object {State, city, street, number})</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Rooms in each Hotel(Array of Strings)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Rating",
            "description": "<p>Ratings of each Hotel</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>404 Not Found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/hotelRoute.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "get",
    "url": "/api/v1/hotels/:id",
    "title": "Request an existing Hotel By ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Hotel unique ID</p>"
          }
        ]
      }
    },
    "name": "GET",
    "group": "Hotel",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the Hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the Hotels(Nested Object {State, city, street, number})</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Rooms in the Hotel(Array of Strings)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating of the Hotel</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>404 Not Found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>id</code> of this Hotel was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/hotelRoute.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "post",
    "url": "/api/v1/hotels/",
    "title": "Create a new Hotel",
    "name": "POST",
    "group": "Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the Hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the Hotels</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Rooms in the Hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating of the Hotel</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the Hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the Hotels</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Rooms in the Hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating of the Hotel</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>404 Not Found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/hotelRoute.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "put",
    "url": "/api/v1/hotels/:id",
    "title": "Update an existing Hotel",
    "name": "PUT",
    "group": "Hotel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique ID of the Hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the Hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the Hotels</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Rooms in the Hotel</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating of the Hotel</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the Hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Address of the Hotels</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Rooms in the Hotel</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating of the Hotel</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The <code>id</code> of this Hotel was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/hotelRoute.js",
    "groupTitle": "Hotel"
  },
  {
    "type": "post",
    "url": "/api/v1/login/",
    "title": "Login a User",
    "name": "POST",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>400 User does not exists!!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/loginRoute.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/v1/sign-up/",
    "title": "Create a new User",
    "name": "POST",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>User's Full name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User's Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>user created...</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error",
            "description": "<p>400 User already exists!!</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/v1/signUpRoute.js",
    "groupTitle": "User"
  }
] });
