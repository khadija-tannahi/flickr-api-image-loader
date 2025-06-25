$(document).ready(function(){

  var flickr_URL = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

      $("#loadImagesBtn").click(function () {

        const flickr_search_var = document.getElementById("flickr_search").value;

        //var userRequest = prompt("Type in your photo");

        $.getJSON(flickr_URL, {

          //tags: "cars",
          tags: flickr_search_var,
          //tags: userRequest,
          tagmode: "all",
          format: "json"


        }) // getjson closes here

        .done(function (data){
         

          $.each(data.items, function (index, item){

            $("<img>").attr("src", item.media.m).appendTo("#flickr_container")


          })// each function closes here

          console.log(data);
         

        })// done function closes here

        .fail(function(){

           alert("API Request Call Failed.");

        })// fail function closes here

      }) // button function closes here



      $("#refreshBtn").click(function () { 
        location.reload(); 
    
    }); // Refresh the page  button closes here


});// ready closes here