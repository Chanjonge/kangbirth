


$(function(){

    // article에 마우스가 들어갔을때, 내가 width값이 자연스럽게 늘어난다.
    // article 나의 자손인 비디오가 서서히 보여라.

    $('article').mouseenter(function(){

        $(this).stop().animate({'width':'35%'},1000, function(){

            $(this).find('h3').stop().animate({'right':'10px'},400);
            $(this).find('p').stop().animate({'right':'10px'},600)
        })
        $(this).find('video').stop().animate({'opacity':'0.9'},1300)
    })

    $('article').mouseleave(function(){
        $(this).stop().animate({'width':'12%'},500)
        $(this).find('video').stop().animate({'opacity':'0'},2000)

        $(this).find('h3').animate({'right':'-310px'},100);
            $(this).find('p').animate({'right':'-310px'},100)
    })





})