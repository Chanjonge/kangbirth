// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요




$(document).ready(function(){


    var ht = $(window).height()
    $('article').height(ht)
    $('.box56').height(1500)

    $(window).resize(function(){
        var ht = $(window).height()

    $('article').height(ht)
    $('.box56').height(1500)

    });






   




    $(window).scroll(function () {
        
        var sc = $(this).scrollTop();
        

        if (sc > 1500 , sc < 4600) {
            $("header nav li a").addClass("on");
          } else {
            $("header nav li a").removeClass("on");
          }

         
    
      });
      $(window).scroll(function () {
        var sc = $(this).scrollTop();

        if (sc > 700){
            $('.box1 h2').addClass('on');
        } else {
            $('.box1 h2').removeClass('on');

        }





      });
      
         

      
    
     $('nav ul li').click(function(){
       var l = $(this).index()

       $('nav ul li').removeClass('on')
       $('nav ul li i').removeClass('on')
       $('nav ul li span').removeClass('on')

       $('nav ul li').eq(l).addClass('on')
        $('nav ul li i').eq(l).addClass('on')
        $('nav ul li span').eq(l).addClass('on')

     })




    




    $('.active1').click(function(){
        var ht = $(window).height()
        var i = $(this).index();
        console.log(i)


        $('html ,body').stop().animate({'scrollTop':0},1400)
      

    });

    $('.active2').click(function(){
        var ht = $(window).height()
        var i = $(this).index();
        console.log(i)


        $('html ,body').stop().animate({'scrollTop':1000},1400)


    });

    

    $('.active3').click(function(){
        var ht = $(window).height()
        var i = $(this).index();
        console.log(i)


        $('html ,body').stop().animate({'scrollTop':2000},1400)


    });

    $('.active4').click(function(){
        var ht = $(window).height()
        var i = $(this).index();
        console.log(i)


        $('html ,body').stop().animate({'scrollTop':3000},1400)


    });

    $('.active5').click(function(){
        var ht = $(window).height()
        var i = $(this).index();
        console.log(i)


        $('html ,body').stop().animate({'scrollTop':4000},1400)


    });

    $('.active6').click(function(){
        var ht = $(window).height()
        var i = $(this).index();
        console.log(i)


        $('html ,body').stop().animate({'scrollTop':5000},1400)


    });



    
    

    $('html,body').stop().animate({scrollTop:0},10)

    $('.box1_inner .btn a').click(function(event){
        event.preventDefault()

        $('.vid001').css({'display':'block'})

    })




    $('.vid001 div').click(function(){

        $('.vid001').css({'display':'none'})
    })

    

    $('.vid001 .skip').click(function(){

        $('.video').css({'display':'none'})
    })


    // 슬라이드 박스 설정
    var a = 0

    $('.box3 .slideBox ul').click(function(){
        if(a<5)a++; 
        if(a==3)a=0
        $(this).stop().animate({'left':-200*a},800)


    })






 // 박스2 titleBox의 li 순번 찾기 
 $(".box2 .list li").click(function () {
    // 클릭한 나 자신의 순번을 변수로 지정하기
    var i = $(this).index();
    // 콘솔에 확인하기
    console.log(i);
    // 찾아낸 순번을 listBox안의 div의 순서에 맞게 보이기
    

       // 클릭한 나 자신에게 클래스주기

       $(".box2 .main li").css({ display: "none" });
       $(".box2 .main li").eq(i).css({ display: "block" });

    
  });


  $(".box3 .slideBox li").click(function(){

    var s = $(this).index();
    console.log(s)

    $(".box3 .slideBox li img").css({ opacity: "1" });
    $(".box3 .slideBox li span").css({ display: "none" });
    $(".box3 .slideBox li img").eq(s).css ({ opacity: "0.5" });
    $(".box3 .slideBox li span").eq(s).css({ display: "block" });

  })






  var b = 1
$('.box6 .img1').click(function(){
    

    $('.box6 .mainBox .img1').removeClass('on')
    $('.box6 .mainBox .img1').addClass('on')
    
    if(b==1) {
        
        $('.box6 .mainBox .img1').addClass('on')
        b=0
    }else if(b==0){
    
        $('.box6 .mainBox .img1').removeClass('on')
        b=1
    }

    console.log(b)
})
var c = 1
$('.box6 .img2').click(function(){
    

    $('.box6 .mainBox .img2').removeClass('on')
    $('.box6 .mainBox .img2').addClass('on')
    
    if(c==1) {
        
        $('.box6 .mainBox .img2').addClass('on')
        c=0
    }else if(c==0){
    
        $('.box6 .mainBox .img2').removeClass('on')
        c=1
    }

    console.log(c)
})




var d = 1
$('.box6 .img3').click(function(){
    

    $('.box6 .mainBox .img3').removeClass('on')
    $('.box6 .mainBox .img3').addClass('on')
    
    if(d==1) {
        
        $('.box6 .mainBox .img3').addClass('on')
        d=0
    }else if(d==0){
    
        $('.box6 .mainBox .img3').removeClass('on')
        d=1
    }

    console.log(d)
})
    







})
