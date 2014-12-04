$(document).ready(function() {
	console.log("READY");
	$("#goggles").draggable();
	$("#paragraph_box" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'background-color':'blue'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		

     	}
    });
});