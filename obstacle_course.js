$(document).ready(function() {
	console.log("READY");
	$("#goggles").draggable();
	$(".crime_scenes" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		

     	}
    });
});
