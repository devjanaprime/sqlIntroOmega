$( document ).ready( function(){
  console.log( 'JQ' );
}); // end doc ready

var addImage = function(){
  // test get call to server
  var objectToSend = {
    thing: 'meow'
  }; //end objectToSend
  $.ajax({
    type: 'POST',
    url: '/images',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from post call with:', response );
    } // end success
  }); // end ajax
}; // end getImages

var getImages = function(){
  // test get call to server
  $.ajax({
    type: 'GET',
    url: '/images',
    success: function( response ){
      console.log( 'back from get call with:', response );
    } // end success
  }); // end ajax
}; // end getImages
