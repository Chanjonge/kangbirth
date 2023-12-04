


$(document).ready(function(){


    var a = 0
    $('.fa-minus').click(function(){
     if(a>0)a--;
     $('.num').text(a)
     


    })
    $('.fa-plus').click(function(){
        if(a<10)a++;
        $('.num').text(a)
        
   
    if(a==10){

        alert('최대 10개까지 구매 가능합니다')
    }
   
       })




$(window).scroll(function () {
    var sc = $(this).scrollTop();
    // $(".box3>h2").text(sc);
    // console.log(sc)

     if (sc >= 1200) {
       $(".box3-1 .imgBox").addClass("on");
     } else {
       $(".box3-1 .imgBox").removeClass("on");
     }
     if (sc >= 1200) {
        $(".box3-1 .txtBox").addClass("on");
      } else {
        $(".box3-1 .txtBox").removeClass("on");
      }

      if (sc >= 1900) {
        $(".box3-2 .imgBox").addClass("on");

      }else {
        $(".box3-2 .imgBox").removeClass("on");

     }

     if (sc >= 2900) {
      $(".box3-3 .imgBox").addClass("on");

    }else {
      $(".box3-3 .imgBox").removeClass("on");
    }

     if (sc >= 2700) {
      $('.note .note1').addClass('on')

     }else {
       $(".note .note1").removeClass("on");

     }
     if (sc >= 3000) {
       $('.note .note2').addClass('on')

     }else {
       $(".note .note2").removeClass("on");

     }
     if (sc >= 3100) {
       $('.note .note3').addClass('on')

     }else {
       $(".note .note3").removeClass("on");

     }


     if (sc >= 4000) {
       $('.box3-4 .imgBox').addClass('on')

     }else {
       $(".box3-4 .imgBox").removeClass("on");

     }

     if (sc >= 4000) {
      $('.box3-4 .txtBox').addClass('on')

    }else {
      $(".box3-4 .txtBox").removeClass("on");

    }


  });
     


  






  $('.trailer ul').draggable({
    containment: 'parent',
    snap: false,
    grid: false,
    drag: function(event, ui) {
      // 드래그한 거리를 가져와서 움직입니다.
      var dragDistance = ui.position.right;
      
      // 드래그한 거리를 해당 요소의 left 속성에 적용합니다.
      
      $(this).css({'left' : 50});
      
    }
  });


  

      // li를 클릭할 때마다 p의 이미지가 바뀌어라.
      $(".trailer li").click(function () {
        var i = $(this).index();
        console.log(i);
        $(".main>ul li").fadeOut();
        $(".main>ul li").eq(i).fadeIn();
      });
    


  
})