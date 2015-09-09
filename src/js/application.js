$(document).ready(function () {
    "use strict";
    
    var $icon = $('#main-menu-icon');
    $icon.on('click', function(event) {
        event.preventDefault();
        $('#main-menu').toggle();
    });
});