$(document).ready(function(){
  $(document).mousemove(function(e){
    $('img').css('left',e.pageX+"px");
    $('img').css('top',e.pageY+"px");
  });
});

// Snow Falling
function fallingFrogs() {

    var frog = $('<div class="frogs"></div>');
    $('#frogZone').prepend(frog);



    frogX = Math.floor(Math.random() * $('#site').width());
    frogSpeed = Math.floor(Math.random() + 5000);

    frog.css({'left':frogX+'px'});
    frog.animate({
        top: "1000px",
      },{
        "complete" : function(){
          $(this).remove();
         }

    }, frogSpeed, function(){
        $(this).remove();
        fallingFrogs();
    });

}
var timer = Math.floor(Math.random() +1000);

window.setInterval(function(){
    fallingFrogs();
}, timer);
