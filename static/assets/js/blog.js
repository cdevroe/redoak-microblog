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

  /* This shouldn't be needed */
  $('#sidebarButton').on(events, function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
  });

});