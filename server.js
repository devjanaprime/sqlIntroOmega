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
      res.send( 'totally vomitsnotfartburp' );
    } // end Error
    else{
      console.log( 'connected to db' )
      done();
      res.send( 'connection established' );
    } // end no error
  }); // end pool connect
}); // end /images get

// post route
app.post( '/images', function( req, res ){
  console.log( 'post hit to /images:', req.body );
  res.send( 'ribbet' );
});
