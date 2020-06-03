/* eslint-disable no-undef */
/* eslint-disable strict */

/*
Cat carousel

when a user selects one of the thumbnail images using the mouse or keyboard, 

that image should be displayed in the full-size image container at the top. 

Updating the image should also update its alt attribute. 

To test keyboard interactivity, you can Tab to one of the thumbnails and press the Enter key.

Some of the methods we discussed in the previous assignment might be helpful here, 
but you should also use the jQuery docs and Google if you're not sure what to do here. Researching on your own is a key skill, and it'll get easier with practice.
*/



function thumbnailClicks() {
  $('.thumbnail').on('click', function(event) {

    //finds and sets imgSrc to current target<img src> on (thumbnail click)
    const imgSrc = $(event.currentTarget).find('img').attr('src');  

    //finds and sets imgAlt  to current target<img alt> on (thumbnail click)
    const imgAlt = $(event.currentTarget).find('img').attr('alt'); 

    //changes the full-size <hero> image attibutes src & alt to the imgSrc & imgAlt that were assigned when (thumbnail click) occurs
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

    console.log(event.target);

    //this was just an initial test to ensure the (event) works when click on thumbnails
    console.log('its working');  
  });
}

//invokes the function
$(thumbnailClicks);