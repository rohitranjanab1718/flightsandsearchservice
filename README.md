# Welcome to Flight Service
## project setup
- clone the project on your local
- Go to project folder and run `npm install` for install all the packages
- create a `.env` file and add the port .
- inside the `config` folder, create a config.json and the following configuration:

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "flight_service_database_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}   

```

- once you have added db config as listed above run `npx sequelize db:create` for creating database.