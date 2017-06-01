$( document ).ready( function(){
  console.log( 'JQ' );

  // init page
  getImages();
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
      displayImages( response );
    } // end success
  }); // end ajax
}; // end getImages

var displayImages = function( imagesArray ){
  // output div
  var outputDiv = $( '#outputDiv' );
  outputDiv.empty();
  // loop through imagesArray
  // append each to the dom
  for (var i = 0; i < imagesArray.length; i++) {
    outputDiv.append( '<p>' + imagesArray[i].description + '</p>' );
    outputDiv.append( '<img src=' + imagesArray[i].url + '>' );
  } // end for
}; // end displayImages
