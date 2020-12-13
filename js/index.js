
     $(document).ready(function () {
     
      $(".play-911").on("click",function(){
      	      $(".911t")[0].play();
      	  })
      })



$(document).mousemove(function(e){
    $('.red-ball').css("top", e.pageY);
    $('.red-ball').css("left", e.pageX);
});


