// From previous lessons in video:

/*$('p').click(function() {
    $(this).slideToggle('slow');
});

$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue') ;
});

$('button').mouseleave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed') ;
});

$(document).ready(function() {
    $('.box').on('click', function() {
        var classNames = $(this).attr('class').split(" ");
        $('.' + classNames[1]).css('background-color', 'red');
    });
});*/

// Boxes Demo:
$(document).ready(function() {
    $('.box').on('click', function() {
        /* When we click on a .box element this event will be fired */
        var classNames = $(this).attr('class').split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css('background-color') == "rgb(255, 0, 0)") {
            // If this object is already red then turn it black:
            $('.' + className).css('background-color', '#000');
        } else {
            // Otherwise turn all the boxes black and then make only the ones 
            // with this secondary class name (one, two, three etc) red.
            $('.' + boxClass).css('background-color', '#000');
            $('.' + className).css('background-color', 'red');
        }
    });
});
