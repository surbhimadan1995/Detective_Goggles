$(document).ready(function() {
	console.log("READY");
	$("#goggles").draggable();
	$("#paragraph_box" ).droppable({
      	drop: function( event, ui ) {
      		//$(this).css({'background-color':'blue'});

     	}
    });
});