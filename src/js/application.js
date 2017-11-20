$(document).ready(function () {
    "use strict";

    // we assume that javascript isn't running and consequently display the
    // navigation by default and hide the menu icon in our css. if we get in
    // here then javascript must be running, so we show the icon, hide the
    // navigation and attach an event handler to the menu icon's click event
    // so that we can toggle visibility of the menu links.
    var $icon = $('#main-menu-icon');
    $icon.removeClass('hidden');
    $icon.on('click', function(event) {
        event.preventDefault();
        $('#main-menu').animate({height: 'toggle'}, 500, function() {
            // jQuery animate leaves an inline style behind that we
            // don't want, so now that the jQuery animation is complete.
            // toggle our own css for hidden/shown and remove the inline
            // style
            $(this).toggleClass('hidden');
            $(this).removeAttr('style');
        });
    });

    //hide the navigation
    $('#main-menu').toggleClass('hidden');

});
