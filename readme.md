1st Full Stack!!!!
===

ver 0.1: node/express server
---

in terminal:

initialize git and npm
- ```git init```
- ```npm init```

install express and body-parser
- ```npm install express body-parser --save```

spin up server (requires & globals)

res.send index.html file

source js and JQ

Now that ver 0.1 is complete, checkout a new branch and push it to github

```
git checkout -b 'ver0_1'
```

```
git push origin ver0_1
```

check your github to make sure the branch is available


ver 0.2
===
test get and post to server

- create get and post routes that res.send stub data
- make client side functions that hit these routes via ajax
- test in browser

ver 0.3
===
connect to db

- create db
- create table in db
- add some basic data

npm install pg (will let us connect to postgres db's)
```
npm install pg --save
```

require pg in server file
```
var pg = require( 'pg' );
```

create our pool config object:
```
var config = {
  database: 'omegapics',
  host: 'localhost',
  port: 5432, // default port for localhost postgres databases
  max: 12
};
```

create a new pool with this config:
```
var pool = new pg.Pool( config );
```

in successful connection:
```
console.log( 'connected to db' )
var allImages = [];
// create our query string
// tell db to run query
// hold results in variable
var resultSet = connection.query( 'SELECT * from pictable' );
resultSet.on( 'row', function( row ){
  // loop through result set and push each row into an array
  allImages.push( row );
}); // end
resultSet.on( 'end', function(){
  // close connection
  done();
  // send back data
  res.send( allImages );
});
```
