// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );

// globals
var port = 9001;
var config = {
  database: 'omegapics',
  host: 'localhost',
  port: 5432, // default port for localhost postgres databases
  max: 12
};

var pool = new pg.Pool( config );

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen( port, function(){
  console.log( 'server is up on:', port );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'in base url' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// get route
app.get( '/images', function( req, res ){
  console.log( 'get hit to /images' );
  // connect to db
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( 'error conencting to db' );
      done();
      res.send( 'totally vomitsnotfartburst' );
    } // end Error
    else{
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
    } // end no error
  }); // end pool connect
}); // end /images get

// post route
app.post( '/images', function( req, res ){
  console.log( 'post hit to /images:', req.body );
  pool.connect( function( err, connection, done ){
    if( err ){
      console.log( err );
      done();
      res.send( 400 );
    }// end error
    else{
      console.log( 'connected to db' );
      connection.query( "INSERT INTO pictable ( description, url ) values ( '" + req.body.description + "', '" + req.body.url + "' )" );
      /**** insert reference
      INSERT INTO <table> (<column>, ...) VALUES (<value>)
      ***/
      done();
      res.send( 200 );
    } // end no error
  }); // end pool connect
}); // end /images post
