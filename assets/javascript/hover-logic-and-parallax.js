$(document).ready(function(){
    //change background colors of li for employee position title
    $( "li > span" ).hover(function() {
        $(this).next().toggleClass( "active-job-title" );
    });
    //parallax logic for main section
    $(window).scroll(function(){
        var fromTop = $(window).scrollTop();
        $(".parallax-subject").css('margin', + (20 - 2*fromTop) + 'px 0px 0px 0px');
    });
    //display thumbnail images of mario and waluigi upon scrolling over the names
    $('.right-side-luigi-bio > h4').hover(function() {
        $(this).next().toggleClass( "show-image" );
    });
});
