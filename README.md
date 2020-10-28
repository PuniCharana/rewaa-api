# RewaaSite API
Rewaa interview assignment project

## Requirements
1. MySQL `https://www.mysql.com/downloads/`
2. NodeJS `https://nodejs.org/en/download/`

## How to run the project

1. `git clone https://github.com/PuniCharana/rewaa-api.git`
2. `cd rewaa-api/`
3. `npm install`
4. `npm start`
5. See postman collection below for API details (`http://localhost:3000/`).
6. Run the following command to get started
    
    a. Create database - rewaa
    ```mysql
    CREATE DATABASE IF NOT EXISTS rewaa;
    ```
    b. Create tables - users
    ```mysql
    CREATE TABLE IF NOT EXISTS users (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        email varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        active BOOLEAN DEFAULT true,
        UNIQUE (email)
    );
    ```
    c. Insert new user
    ```mysql
    INSERT INTO users (name, email, password, active) VALUES ('Admin', 'admin@rewaa.com', '123456', 1);
    ```
    d. Create tables - projects
    ```mysql
    CREATE TABLE IF NOT EXISTS products (
        id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        description varchar(255) NOT NULL,
        thumbnail VARCHAR(255) NOT NULL,
        brand VARCHAR(255) NOT NULL,
        price int(10) NOT NULL DEFAULT 0,
        stock int(10) NOT NULL DEFAULT 0
    );
    ```
7. Login to the dashboard [here](https://github.com/PuniCharana/rewaa-site)

## Libraries

| Library      | Version |
| ----------- | ----------- |
| body-parser      | `^1.19.0`       |
| cors   | `^2.8.5`        |
| dotenv   | `^8.2.0`        |
| express   | `^4.17.1`        |
| mysql   | `^2.18.1`        |

___

### Postman collections
```JSON
{
  "info": {
    "_postman_id": "78112a69-40a4-4b50-b4c5-b34567ffc8c1",
    "name": "Rewaa",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
  },
  "item": [
    {
      "name": "Auth",
      "item": [
        {
          "name": "Login",
          "_postman_id": "4dca7678-0f9e-4e48-acce-649159e17c8e",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "urlencoded",
              "urlencoded": [
                {
                  "key": "email",
                  "value": "admin@rewaa.com",
                  "type": "text"
                },
                {
                  "key": "password",
                  "value": "123456",
                  "type": "text"
                }
              ]
            },
            "url": "{{domain}}/auth/"
          },
          "response": []
        }
      ],
      "_postman_id": "b672afbb-9c21-4ccf-8ca9-9e199e6dbbef",
      "protocolProfileBehavior": {}
    },
    {
      "name": "Users",
      "item": [
        {
          "name": "Get Users",
          "_postman_id": "c8f2b55b-9b55-45b2-bd21-df52505a6999",
          "request": {
            "method": "GET",
            "header": [],
            "url": "{{domain}}/users"
          },
          "response": []
        },
        {
          "name": "Get User",
          "_postman_id": "7878550d-24a7-42b4-a449-79c5da42f0b9",
          "request": {
            "method": "GET",
            "header": [],
            "url": "{{domain}}/users/1"
          },
          "response": []
        },
        {
          "name": "Create User",
          "_postman_id": "afadf4d0-5562-4c8e-8975-07fadf95fc6a",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "urlencoded",
              "urlencoded": [
                {
                  "key": "name",
                  "value": "Admin",
                  "type": "text"
                },
                {
                  "key": "email",
                  "value": "admin1@rewaa.com",
                  "type": "text"
                },
                {
                  "key": "password",
                  "value": "123456",
                  "type": "text"
                }
              ]
            },
            "url": "{{domain}}/users"
          },
          "response": []
        },
        {
          "name": "Delete User",
          "_postman_id": "bb37d3bd-4c1a-48d7-a5bf-7ee5dc04f863",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": "{{domain}}/users/5"
          },
          "response": []
        }
      ],
      "_postman_id": "846ad930-0238-48d9-91a2-0d729aa66e13",
      "protocolProfileBehavior": {}
    },
    {
      "name": "Products",
      "item": [
        {
          "name": "Get Products",
          "_postman_id": "83fca8c7-62ab-4111-9387-e2ee7965759c",
          "request": {
            "method": "GET",
            "header": [],
            "url": "{{domain}}/products"
          },
          "response": []
        },
        {
          "name": "Get Product",
          "_postman_id": "d552226f-3ec4-485b-b488-84a78f34eb45",
          "request": {
            "method": "GET",
            "header": [],
            "url": "{{domain}}/products/1"
          },
          "response": []
        },
        {
          "name": "Update Product",
          "_postman_id": "0b3b7195-1e77-413d-99b8-d44a4c052f81",
          "request": {
            "method": "PUT",
            "header": [],
            "url": "{{domain}}/products/1"
          },
          "response": []
        },
        {
          "name": "Delete Product",
          "_postman_id": "fe54c1c3-d0c2-4b3b-8a64-7f8999d3d5f6",
          "request": {
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "{{domain}}/products?ids=1,2",
              "host": [
                "{{domain}}"
              ],
              "path": [
                "products"
              ],
              "query": [
                {
                  "key": "ids",
                  "value": "1,2"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "Create Product",
          "_postman_id": "e6b4da5c-3fde-4ffd-9c40-c1b61ed7a4d1",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "urlencoded",
              "urlencoded": [
                {
                  "key": "name",
                  "value": "Product name",
                  "type": "text"
                },
                {
                  "key": "description",
                  "value": "Product 2",
                  "type": "text"
                },
                {
                  "key": "thumbnail",
                  "value": "https://picsum.photos/200",
                  "type": "text"
                },
                {
                  "key": "price",
                  "value": "200",
                  "type": "text"
                },
                {
                  "key": "stock",
                  "value": "10",
                  "type": "text"
                },
                {
                  "key": "brand",
                  "value": "Brand",
                  "type": "text"
                }
              ]
            },
            "url": "{{domain}}/products"
          },
          "response": []
        }
      ],
      "_postman_id": "8e90aa06-ee67-4e80-9825-e98c3274fdaf",
      "protocolProfileBehavior": {}
    }
  ],
  "protocolProfileBehavior": {}
}
```