var percent = 0.0;
var start = 0.0;
var end = 35.0;
var speed = 1.5
var direction = -1.0;

function show_prog_modal(){
 //  clearInterval(setPercentage);
   percent = 0.0;
   start = 0.0;
   end = 35.0;
   speed = 1.5;
   direction = -1.0;
   
   var setPercentage = setInterval(function(){
     if(direction  == -1.0){
          percent = percent + speed  *  (end - percent) /(end - start) + 0.05;
     
     } else {
          percent = percent + speed  *  (percent - start) /(end - start) + 0.05;
     }
     
     percent_int = ~~(percent)
     
     if(parseInt(percent_int) >= 100) percent_int = 100;
     
     setTimeout(function(){
          $("#prog_bar").css("width", percent_int + '%');
          $("#prog_bar").text(percent_int + '%')
     }, 500);
     $("#percent").val(percent);
  
     if( percent_int == ~~(end)){
         start = end;
         end = end + 10;
         direction = -1.0 * (direction);
     }
     if(percent_int == 35){
          $("#progress_text").text("Congratulations, 50% Discount Has Been Applied!");
     }
     
      if(percent_int == 55){
          $("#progress_text").text("Checking For Available Stock In United States...");
      }
     if(percent_int == 75){
          start = 75.0;
          end = 100.0;
          direction = 1.0;
          $("#progress_text").text("Limited Stock is Available! Reserving It For You");
     }
  
      if(percent_int == 100) {
         clearInterval(setPercentage);
         setTimeout(function(){
              $("#progress_sect").hide();
              $("#brand_logo").hide();
              $("#prog_done").show();
              $("#progress_text").text("Stock Available!");
              $("#progress_text").css('font-size', "32px");
              $("#progress_text").css('font-weight', "200");
          }, 2000);
          setTimeout(function(){
             window.location.href = "https://scmtrack.com/click.php?lp=1";
     
          }, 5000);
          
     }

   }, 100); 

}


