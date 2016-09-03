$(document).ready(function() {
  
  $("#getQ").click(function() {
    /*$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(function (response) {
  
  $('#response').html(JSON.stringify(response));
});*/
    
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?").done(function(val){
          console.log(val);
          $(".my-quote").html(val.quoteText);
          $(".author").html("from: "+val.quoteAuthor);
          $('#t-but iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', val.quoteText);
    $('#t-but').append(tweetBtn);
    twttr.widgets.load();
        });
  });
  
  
  
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  
});