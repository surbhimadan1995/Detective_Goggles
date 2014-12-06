$(document).ready(function() {
	console.log("READY");
	$("#goggles").draggable();
	$("#paragraph_box" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		// Changing the text in the instructions box to reflect the story.
            $("#dotted_box_goggles").detach();
            $("#instr_text_body_id").replaceWith("<span class='instructions_text_body'>Aha, now on the surface this seems like a nice and friendly neighbourhood. But mark my words Watson, there's a criminal tag hiding in here. He is known in the HTML world as a hyperlink. If you fall in with his lot you don't know where you'll end up. Once you locate the hyperlink (<a> tag) make him mend his erroneous ways by making him point to the right kind of website.</span>");
     	}
    });


    $("#paragraph_box_2" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		

     	}
    });


    $("#paragraph_box_3" ).droppable({
      	drop: function( event, ui ) {
      		$(this).css({'border':'2px solid black'});
      		
  			var script=document.createElement('script');
      		script.src='http://localhost:8080/webxray.js';
      		script.className='webxray';
      		document.body.appendChild(script);
      		

     	}
    });


});
