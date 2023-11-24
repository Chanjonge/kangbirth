


$(function(){

    // 윈도우에 높이값을 찾아서 section의 높이값에 대입

     var wht = $(window).height()

    $('section').height(wht)

    //  화면 크기가 바뀌었을 때, 윈도우에 높이값을 찾아서 section의 높이값에 대입

    $(window).resize(function(){

        var wht = $(window).height()

    $('section').height(wht)


    })



    // gnb li를 클릭했을때 li의 순번을 찾아라.
    // gnb li를 클릭했을때 클래스 on을 추가해라

    $('.gnb li').click(function(){
        var wht = $(window).height()
        var i = $(this).index()

        console.log(i)

        $('.gnb li').removeClass('on')
        $(this).addClass('on')

        $('html , body').animate({'scrollTop':wht*i},1400,'easeOutBounce')

    });

    // section에서 마우스를 움직였을때, 올라가고 내려가라
    
    $('section').mousewheel(function(event,delta){
        event.preventDefault()

        // 마우스를 올렸을때

        if(0<delta){
            // 현재 나의 이전 위치 값을 찾아라(변수)...? 
            
            var prev = $(this).prev().offset().top
            $('html , body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
    
     
        }
        // 마우스를 내렸을때

        else if(0>delta){
            // 현재 섹션의 이전 위치 값을 찾아라(변수)...? 
            
            var next = $(this).next().offset().top
            $('html , body').stop().animate({'scrollTop':next},1400,'easeOutBounce')

        }

    })


    // scroll의 위치값을 찾고, 일정높이가 되었을때 on 값을 추가해라.

    $(window).scroll(function(){
        var wht = $(window).height()
        var sc = $(this).scrollTop()

        $('h1').text(sc)

        // if(sc>=0 && sc < wht*1 ){
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(0).addClass('on')
        // }
        // if(sc>=wht*1 && sc < wht*2 ){
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(1).addClass('on')
        // }

        // if(sc>=wht*2 && sc < wht*3 ){
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(2).addClass('on')
        // }

        // if(sc>=wht*3 && sc < wht*4 ){
        //     $('.gnb li').removeClass('on')
        //     $('.gnb li').eq(3).addClass('on')
        // }


        // 반복문 활용

        for(var a = 0; a<5; a++ ){

            if(sc>=wht*a && sc < wht*(a+1) ){
         $('.gnb li').removeClass('on')
        $('.gnb li').eq(a).addClass('on')
     }



        }




    })





    



})