 $(".door").hide();
 $("#2nd").hide();
 $("#3rd").hide();
 $(".closet").hide();
 $(".box").hide();
 $("#4th").hide();
 $("#5th").hide();
 $(".teddy").hide();
 $(".scary").hide();
 $("#final").hide();
 $("button").click(function() {
     $(".door").show();
     $("button").hide();
     $("#2nd").show();
     $(".closet").hide();

 });

 $(".door").dblclick(function() {
     $(".closet").show();
     $(".door").hide();
     $("#2nd").hide();
     $("#3rd").show();
 });

 $(".closet").click(function() {
     $("#3rd").hide();
     $(".box").show();
     $("#4th").show();
     $(".closet").fadeOut();
     $("body").css("background-image", "url(https://previews.123rf.com/images/nomad_s0ul/nomad_s0ul1606/nomad_s0ul160600070/58211084-seamless-question-mark-mystery-pattern-background.jpg)");

 });
 $(".box").click(function() {
     $("#4th").hide();
     $("#5th").show();
     $(".box").hide();
     $(".teddy").show();
 });
 $(".teddy").click(function() {
     $("#5th").hide();
     $(".teddy").hide();
     $("body").css("background-image", "url(https://i.ytimg.com/vi/tRhEp0T2_HA/maxresdefault.jpg)");
     $(".scary").show();
     $("#final").show();


 });