// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// globals
var port = 9001;

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
  res.send( 'quack' );
}); // end /images get

// post route
app.post( '/images', function( req, res ){
  console.log( 'post hit to /images:', req.body );
  res.send( 'ribbet' );
});
