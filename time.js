//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

        console.log("ready");

        
        //hide all h4 headers
        $('h4').hide();
    
        //hover buttons
        $('.school').hover(function () {
            $('.school').css('background', '#dfc7c7');
            $('.school-list').css('font-weight', 'bold');
        }, function () {
            $('.school').css('background', '#b69b9b');
            $('.school-list').css('font-weight', 'normal');
        });

        $('.art').hover(function () {
            $('.art').css('background', '#c9e3c3');
            $('.art-list').css('font-weight', 'bold');
        }, function () {
            $('.art').css('background', '#a0b69b');
            $('.art-list').css('font-weight', 'normal');
        });

        $('.survive').hover(function () {
            $('.survive').css('background', '#c9c4e4');
            $('.survive-list').css('font-weight', 'bold');
        }, function () {
            $('.survive').css('background', '#9f9bb6');
            $('.survive-list').css('font-weight', 'normal');
        });

        $('.procrast').hover(function () {
            $('.procrast').css('background', '#e3c8e9');
            $('.procrast-list').css('font-weight', 'bold');
        }, function () {
            $('.procrast').css('background', '#b19bb6');
            $('.procrast-list').css('font-weight', 'normal');
        });

        //selecting each category to click and hide events
        $('.school').click(function () {
            $('.school-list').toggleClass('hide');
        });

        $('.art').click(function () {
            $('.art-list').toggleClass('hide');
        });

        $('.survive').click(function () {
            $('.survive-list').toggleClass('hide');
        });

        $('.procrast').click(function () {
            $('.procrast-list').toggleClass('hide');
        });

        //hide all tool tips
        $('.time').hide();


        //hover over circles 

        $('img[src^="images/red"]').hover(function () {
            $(this).css('opacity', '0.5');
        }, function () {
            $(this).css('opacity', '1');
        });

        $('img[src^="images/green"]').hover(function () {
            $(this).css('opacity', '0.5');
        }, function () {
            $(this).css('opacity', '1');
        });


        $('img[src^="images/blue"]').hover(function () {
            $(this).css('opacity', '0.5');
        }, function () {
            $(this).css('opacity', '1');

        });

        $('img[src^="images/violet"]').hover(function () {
            $(this).css('opacity', '0.5');
        }, function () {
            $(this).css('opacity', '1');

        });

        $('#dots img').hover(function () {
            $(this).next().show();
        }, function () {
            $(this).next().hide();
        })
    }) //end ready