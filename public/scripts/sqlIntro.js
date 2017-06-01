$( document ).ready( function(){
  console.log( 'JQ' );

  $( '#addImageButton' ).on( 'click', function(){
    console.log( 'addImageButton on click' );
    // get user input
    var userInput = {
      description: $( '#descriptionIn' ).val(),
      url: $( '#urlIn' ).val()
    }; //end userInput
    addImage( userInput );
  }); // end on click addImageButton

  // init page
  getImages();
}); // end doc ready

var addImage = function( objectToSend ){
  // test get call to server
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
