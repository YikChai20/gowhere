This project consists 2 folder
a. server (backend)
b. web (frontend)

**Description**
User able to enter original url in the field provided and click "Shorten URL" button to shorten the url. If url successfully shorten, it will shows at the url list. User able to view all the original urls and shorten urls. They can click the shorten url and redirect to the correspoding website. The shorten url will be redirect from domain + short_url (Example: http://localhost:8080/0LXMjWvmH) to the orignal url.

1. To start server project,
a. Run "npm install"
b. Create database name "gowhere"
c. Add .env file into server project
d. If don't have table, change DB_SYNC to true (Default: false)
e. Run "npm start"

**Example of env file for server project**
```
PORT=8080
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=gowhere
DB_DIALECT=mysql
DB_SYNC=false
```

2. To start web project,
a. Run "npm install"
b. Add .env file in to web project
c. Run "npm start"

**Example of env file for web project**
```
REACT_APP_APP_URL= "http://localhost:8080/"
```

3. Available to do unit testing for server project by Jest
a. Run "npm run test" in server project
b. Check the status of the test
