

$(document).ready(function(){


    $('body').mousemove(function(e){
         // html에 소스를 추가하는 방식
        var imgs = ''
        for(var a= 0; a<200; a++){
            imgs += "<img src=img/pic"+a+".jpg>"
                console.log(imgs)

        }

        $('section').html(imgs)


        var x = e.pageX
        var wd = $(window).width()
        var Xnum = Math.floor((x/wd)*200)
        $('h1').text(Xnum)

        // 속성값을 변경하는 방식 attr()

        // $('section img').attr({'src':'img/pic'+Xnum+'.jpg'})

    //   지정된 숫자만 보여라
    $('section img').hide()
        $('section img').eq(Xnum).show()

        



    })













    
})