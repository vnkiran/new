$(document).ready(function(){
	$("#sidebar li > a").click(function() {
//  $("#sidebar li").slideUp(200);
if (
$(this)
.parent()
.hasClass("active")
) {
$("#sidebar li").removeClass("active");
$(this)
.parent()
.removeClass("active");
} else {
$("#sidebar li").removeClass("active");   
$(this)
.parent()
.addClass("active");
}
});
$("#close-sidebar").click(function() {
$(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
$(".page-wrapper").addClass("toggled");
});

});
