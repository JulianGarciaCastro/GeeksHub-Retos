$( ".nav-link" ).click(function() {
    $( ".nav-link" ).removeClass("active");
    $( this).toggleClass( "active" );
});