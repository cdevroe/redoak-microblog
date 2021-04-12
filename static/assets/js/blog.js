$(document).ready(function() {

  $(document).foundation();

  // Clone sidebar to off-canvas location for mobile
  var $clonenav = $('#sideNav').clone(true,true);
  $("#sideMenu").append($clonenav);

  // Clone logo to top location for mobile
  var $cloneidentity = $('#identitySide').clone();
  $("#identityTop").append($cloneidentity);

  // Scroll to top
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  /* Barley Editor Mode Only */
  // Used for picking different photo album layouts
  if ($('#album_tools').length > 0) {
    $('#album_tools a').on('click', function(e){
          e.preventDefault();
          var photo_album_chosen, photo_album_layout;
          photo_album_chosen = $(this).attr('data-album');
          photo_album_layout = $('#album-'+photo_album_chosen).html();
          $('#photo_album').empty().html(photo_album_layout);
          if (barley !== undefined && barley.editor !== undefined) {
            barley.editor.findImages();
          }
      });
  }
  
  // When searching allow enter to be pressed too.
  $('.searchtext').on( 'keypress', function(e) {
    e.preventDefault;
    if ( e.which == 13 ) {
         barleySearch();
     }
  });

  // When searching allow clicking the submit button
  $('.searchbutton').on( 'click', function(e) {
    e.preventDefault;
    barleySearch();
  });

  // Use Google to search blog
  function barleySearch() {
    var hostname = window.location.hostname;
    
    var searchtext = $('.searchtext').val();

    if ( !searchtext || searchtext == '' ) {
      alert("Please enter a search term.");
    } else {
      window.location = 'https://www.google.com/search?q=site%3A'+hostname+'+'+encodeURIComponent(searchtext)+'&aq=f&oq=site%3A'+hostname+'+'+encodeURIComponent(searchtext);
    }

    return;
  }

});